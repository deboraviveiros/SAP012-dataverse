import { filterData, sortData } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

/* Renderizar cards */
const root = document.querySelector("#root");
root.innerHTML = renderItems(data);

document.addEventListener("DOMContentLoaded", function () { /* Pra que serve esse evento? */
  const comboFiltrar = document.getElementById("filter-state");
  const clearButton = document.getElementById("clear-button");
  const comboOrganizar = document.getElementById("order");
 
  /* Filtro por Estado */
  comboFiltrar.addEventListener("change", (event) => {
    const selectedState = filterData(data, "brState", event.target.value);
    root.innerHTML = renderItems(selectedState);
  });
  
  /* Organizar AZ e ZA*/
  comboOrganizar.addEventListener("change", (event) => {
    const orgData = sortData(data, "name", event.target.value);
    root.innerHTML = renderItems(orgData);
  });

  /* Limpar Filtro e Organização */
  clearButton.addEventListener("click", () => {
    comboOrganizar.selectedIndex = 0;
    comboFiltrar.selectedIndex = 0;
    root.innerHTML = renderItems(data); // não está voltando à organização inicial, ou seja, não está limpando a organização
  });

});