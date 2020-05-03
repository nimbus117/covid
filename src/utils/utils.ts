import { SortData } from '../types';

export const addCommasToInt = (number: number): string =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const sortObjectsArray = (
  data: SortData,
  sortBy: string,
  sortAsc: true | false,
): SortData => {
  return data
    .concat()
    .sort(
      (a, b): number =>
        (a[sortBy] > b[sortBy] ? 1 : a[sortBy] < b[sortBy] ? -1 : 0) *
        (sortAsc ? 1 : -1),
    );
};
