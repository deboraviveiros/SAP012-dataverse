/* Filtragem por Estados */

export const filterData = (data, filterBy, value) => {
  const filterState = data.filter((element) => element.facts[filterBy] === value);
  return filterState;
};

/* Organização dos Cards (AZ e ZA) */

export const sortData = (data, sortBy, value) => {
  if (value === "asc") {
    return data.toSorted((a, b) => {return a[sortBy].localeCompare(b[sortBy])});
  } else if (value === "desc") {
    return data.toSorted((c, d) => {return c[sortBy].localeCompare(d[sortBy])}).reverse();
  } else {
    return data;
  }
};

// // cálculos estatisticos básicos - esta função deve usar o método reduce.
// export const computeStats = (data) => { 
//   return "computeStats"
// }

/* spread operator - const copyData = [...data]; 
ver testes - toSorted */