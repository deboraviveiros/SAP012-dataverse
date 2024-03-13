/* Filtragem por Estados */

export const filterData = (dataFilter, filterBy, value) => {
  const filterState = dataFilter.filter((element) => element.facts[filterBy] === value);
  return filterState;
};

/* Organização dos Cards (AZ e ZA) */

export const sortData = (dataFilter, sortBy, value) => { 
  if (value === "asc") {
    return dataFilter.sort((a, b) => {return a[sortBy].localeCompare(b[sortBy])});
  } else if (value === "desc") {
    return dataFilter.sort((c, d) => {return c[sortBy].localeCompare(d[sortBy])}).reverse();
  } else {
    return dataFilter;
  }
};

// // cálculos estatisticos básicos - esta função deve usar o método reduce.
// export const computeStats = (data) => { 
//   return "computeStats"
// }

/* export const computeStats = (data) => { 
  const estatistica = data.map(destinos => destinos.facts.brState).filter(value => !isNaN(value));
  const contador = estatistica.reduce((acc) => acc + 1, 0);
  console.log(contador);
  return contador; */