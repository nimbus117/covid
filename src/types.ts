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
  sortAsc: true | false;
}

export interface TableSortRequester {
  (id: HeaderValue): void;
}
