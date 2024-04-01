export const getPeriod = (start: Date, end: Date): string => {
  const [startYear, startMonth] = [start.getFullYear(), start.getMonth()],
    [endYear, endMonth] = [end.getFullYear(), end.getMonth()];

  // 종료 날짜와 시작 날짜 사이의 전체 월 수 차이를 계산합니다.
  let months = (endYear - startYear) * 12 + (endMonth - startMonth);

  // 최종 년(year)과 월(month) 차이를 계산합니다.
  months %= 12;

  return `(${months + 1} months)`;
};

export const dateToString = (date: Date): string => {
  const month = date.getUTCMonth() + 1;
  return `${month < 10 ? '0' + month : month}.${date.getUTCFullYear()}`;
};
