export type CountryValue = {
  deaths: number;
  confirmed: number;
  recovered: number;
  date: string;
};

export type CountriesObj = {
  [key: string]: CountryValue[];
};

export type CountryRow = {
  country: string;
  deaths: number;
  confirmed: number;
  recovered: number;
};

export type HeaderId = 'confirmed' | 'deaths' | 'recovered' | 'country';
export type HeaderTitle = 'Confirmed' | 'Deaths' | 'Recovered' | 'Country';

export type HeaderValue = {
  title: HeaderTitle;
  id: HeaderId;
  sortAsc: true | false;
};

export type TableSortRequester = {
  (id: HeaderValue): void;
};

export type WorldObj = {
  [key: string]: {
    deaths: number;
    confirmed: number;
    recovered: number;
  };
};

export type UseFetchState = {
  data: CountriesObj | null;
  isLoading: boolean;
  error: string | null;
};

export type UseFetchAction =
  | { type: 'request' }
  | { type: 'success'; data: CountriesObj }
  | { type: 'failure'; error: string };

export type SortData = { [key: string]: string | number }[];
