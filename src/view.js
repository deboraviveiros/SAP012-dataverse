export const renderItems = (data) => {
export const renderItems = (data) => {
  // console.log(data)

  let ul = '<ul>';

  data.forEach((item) => {
    ul += `
      <li itemscope itemtype="Rota dos Sonhos" class="list__card">
        <div class="container__card">
          <dl itemscope itemtype="RoteirosDosSonhos" class="content__card">
            <div class="front">
              <dt><img src="${item.imageUrl}" alt="Imagem do Destino" itemprop="${item.name}" class="image__card" /></dt>
              <h2 itemprop="name" class="name">${item.name} - ${item.facts.brState}</h2>
              <dd itemprop="shortDescription" class="shortDescription">${item.shortDescription}</dd>
              <dd itemprop="sort-order" class="someFeatures">${item.facts.someFeatures}</dd>
              <dd itemprop="itineraryType" class="itineraryType">${item.facts.itineraryType}</dd>
              <dd itemprop="estimatedValue" class="estimatedValue">${item.facts.estimatedValue}</dd>
            </div>
            <div class="back">
              <dd itemprop="description" class="description">${item.description}</dd>
              <dd itemprop="bestActivities" class="bestActivities">${item.facts.bestActivities}</dd>
              <dd itemprop="bestMonth" class="bestMonth">${item.facts.bestMonth}</dd>
            </div>
          </dl>
        </div>
      </li>
    `;
  });

  ul += "</ul>"
  return ul;
};