import { useEffect, useRef } from 'react';
import {
  Engine,
  MouseConstraint,
  Mouse,
  Composites,
  Composite,
  Constraint,
  Render,
  World,
} from 'matter-js';
import Matter from 'matter-js';

const CHAIN_COL_NUM = 10;

function Comp() {
  const scene = useRef<any>();
  const engine = useRef(Engine.create());

  let mouseConstraintRef = useRef<MouseConstraint | null>(null);

  useEffect(() => {
    // Create Engine and Render
    let render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: 800,
        height: 1000,
        wireframes: false,
        showMousePosition: true,
        showCollisions: true,
      },
    });

    const mouse = Mouse.create(render.canvas);
    mouseConstraintRef.current = MouseConstraint.create(engine.current, {
      mouse: mouse,
      constraint: {
        stiffness: 0.01,
        render: {
          visible: false,
        },
      },
    });

    // Create Chain
    let group = Matter.Body.nextGroup(true);
    let rope = Composites.stack(
      100,
      100,
      CHAIN_COL_NUM,
      1,
      0,
      0,
      (x: number, y: number, index: number) => {
        if (index === CHAIN_COL_NUM - 1) {
          return Matter.Bodies.circle(x, y, 30, {
            render: {
              fillStyle: '#FFFFFF00',
              strokeStyle: 'brown',
              lineWidth: 10,
            },
          });
        }
        return Matter.Bodies.rectangle(x, y, 50, 20, {
          collisionFilter: { group: group },
          density: 0.005,
          frictionAir: 0.05,
          render: {
            fillStyle: 'brown',
          },
        });
      },
    );

    Composites.chain(rope, 0.5, 0, -0.5, 0, {
      stiffness: 0.5,
      length: 1,
      render: { type: 'line', anchors: false },
    });

    // Fix end of chain
    Composite.add(rope, [
      Constraint.create({
        bodyB: rope.bodies[0],
        pointB: { x: -25, y: 0 },
        pointA: {
          x: rope.bodies[0].position.x,
          y: rope.bodies[0].position.y,
        },
        stiffness: 0.5,
        render: {
          visible: false,
        },
      }),
    ]);

    render.mouse = mouse;
    World.add(engine.current.world, mouseConstraintRef.current);

    // Add chain to World
    World.add(engine.current.world, rope);

    // Execute Engine
    Engine.run(engine.current);

    // Execute Render
    Render.run(render);

    return () => {
      Render.stop(render);
      Matter.World.clear(engine.current.world, true);
      Matter.Engine.clear(engine.current);
      render.canvas.remove();
      render.canvas = null as any;
      render.context = null as any;
      render.mouse = null as any;
    };
  }, []);

  return (
    <div>
      <div
        ref={scene}
        style={{ width: '100%', height: '100%' }}
        onMouseLeave={e => {
          const ev = new Event('mouseup');
          mouseConstraintRef.current?.mouse.element.dispatchEvent(ev);
        }}
      />
    </div>
  );
}

export default Comp;
