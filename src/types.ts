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

export type HeaderId = 'confirmed' | 'deaths' | 'recovered' | 'country';
export type HeaderTitle = 'Confirmed' | 'Deaths' | 'Recovered' | 'Country';

export interface HeaderValue {
  title: HeaderTitle;
  id: HeaderId;
  sortOrder: 'asc' | 'desc';
}

export interface TableDataSorter {
  (event: React.MouseEvent<HTMLTableHeaderCellElement>): void;
}
