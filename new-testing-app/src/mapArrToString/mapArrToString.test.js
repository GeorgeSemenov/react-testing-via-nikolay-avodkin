const mats = require('./mapArrToString.js');

describe(`test mapArrToString`,()=>{
  test('[1,2,3]',()=>{
    /*т.к. объекты и массивы сравниваются по ссылке, а не 
    по значению, то нужно использовать вместо toBe - toEqual
    В таком случае сравниваться будет значение  */
    expect(mats([1,2,3])).toEqual(['1','2','3']);
  })
  test('[empty]',()=>{
    expect(mats([])).toEqual([]);
  })

  /*Иногда можно использовать логическое отрицание */
  /*более подробно можно посмотреть на сайте jestjs.io*/
  test('[not]',()=>{
    expect(mats([1,2])).not.toEqual([]);
  })
})