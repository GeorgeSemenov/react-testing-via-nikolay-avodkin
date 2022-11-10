const validateValues = require('./validateValues.js')
/*Чтобы запустить все тесты - напиши npm run test*/
/*Если нужно запустить конкретный тест, значит пропиши название этого файла после слова test*/
test( 'Проверка валидированности валидируемых валидатов', ()=>{
  expect (validateValues(50)).toBe(true)/*Передаём в функцию значение и сравниваем с тем что должно быть (toBe)*/
})

/*Чтобы запустить сразу несколько однотипных тестов  - можно воспользоваться
обёрткой describe*/

describe("validateValuesTestPack",()=>{
  test( 'Проверка 50', ()=>{
    expect (validateValues(50)).toBe(true)
  })  
  test( 'Проверка (-1)', ()=>{
    expect (validateValues(-1)).toBe(false)
  })  
  test( 'Проверка 101', ()=>{
    expect (validateValues(101)).toBe(false)
  })    
  test( 'Проверка пограничных значений слева (0)', ()=>{
    expect (validateValues(0)).toBe( true)
  })  
  test( 'Проверка пограничны значений справа (100)', ()=>{
    expect (validateValues(100)).toBe(true)
  })    
})