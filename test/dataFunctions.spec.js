import { filterData, sortData } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

// console.log(fakeData);

describe('filterData', () => {

  it('returns `example`', () => {
    const selectedState = filterData(fakeData, 'brState', 'BA');
    expect(selectedState.length).toBe(1);  
  });

  it('returns `example`', () => {
    const selectedState = filterData(fakeData, 'brState', 'PE');
    expect(selectedState.length).toBe(1);  
  });
});

describe('sortData', () => {

  it('returns `ordemAZ`', () => {
    const azOrg = sortData(fakeData, 'name', 'asc')
    expect(azOrg[0].name).toBe('Chapada Diamantina');
    expect(azOrg[1].name).toBe('Chapada dos Veadeiros');
    expect(azOrg[2].name).toBe('Fernando de Noronha');
  });


  it('returns `ordemZA`', () => {
    const zaOrg = sortData(fakeData, 'name', 'desc')
    expect(zaOrg[0].name).toBe('Lençóis Maranhenses');
    expect(zaOrg[1].name).toBe('Jericoacoara');
    expect(zaOrg[2].name).toBe('Fernando de Noronha');
  });
});