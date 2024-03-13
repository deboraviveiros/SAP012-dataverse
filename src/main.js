import { filterData, sortData } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

/* Renderizar cards */
const root = document.querySelector("#root");
root.innerHTML = renderItems(data);

document.addEventListener("DOMContentLoaded", function () {
  const comboFiltrar = document.querySelector('#filter-state');
  const clearButton = document.querySelector('#button-clear');
  const comboOrganizar = document.querySelector('#order');
  let dataFilter = [...data];
 
  /* Filtro por Estado */
  comboFiltrar.addEventListener("change", (event) => {
    const selectedState = filterData(data, "brState", event.target.value);
    dataFilter = selectedState;
    root.innerHTML = renderItems(selectedState);
  });
  
  /* Organizar AZ e ZA*/
  comboOrganizar.addEventListener("change", (event) => {
    const orgData = sortData(dataFilter, "name", event.target.value);
    root.innerHTML = renderItems(orgData);
  });

  /* Limpar Filtro e Organização */
  clearButton.addEventListener("click", () => {
    comboOrganizar.selectedIndex = 0;
    comboFiltrar.selectedIndex = 0;
    root.innerHTML = renderItems(data);
  });

});

//document.querySelector(#root).innerHTML = renderItems(data);
//innerHTML => renderItems retorna uma string
//appendChild(elementos) => retorna um elemento HTML criado

// filtrar => retornar um array de 5 elementos