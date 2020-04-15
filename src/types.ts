export interface CountryValue {
  deaths: number;
  confirmed: number;
  recovered: number;
  date: string;
}

export interface CountriesObj {
  [key: string]: CountryValue[];
}

export interface CountryRow {
  country: string;
  deaths: number;
  confirmed: number;
  recovered: number;
}

export interface HeaderValue {
  title: string;
  id: string;
  sortType: 'string' | 'number';
  sortOrder: 'asc' | 'desc';
  initialSort?: boolean;
}

export interface TableDataSorter {
  (event: any): void;
}
