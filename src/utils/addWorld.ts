import { CountriesObj, CountryValue, WorldObj } from '../types';

export const addWorld = (data: CountriesObj): CountriesObj => {
  const newData = { ...data };
  const all: CountryValue[][] = [];

  for (const key in data) {
    const values = data[key];
    all.push(values);
  }

  const world = all.flat().reduce((acc: WorldObj, cur: CountryValue) => {
    acc[cur.date] = acc[cur.date]
      ? {
          confirmed: acc[cur.date].confirmed + cur.confirmed,
          deaths: acc[cur.date].deaths + cur.deaths,
          recovered: acc[cur.date].recovered + cur.recovered,
        }
      : {
          confirmed: cur.confirmed,
          deaths: cur.deaths,
          recovered: cur.recovered,
        };
    return acc;
  }, {});

  newData.World = [];
  for (const [key, value] of Object.entries(world)) {
    newData.World.push({ date: key, ...(value as CountryValue) });
  }

  return newData;
};
