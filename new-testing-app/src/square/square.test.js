const square = require('./square.js');

/*Внутри describe можно использовать преколбэки, которые будут запускаться перед каждым тестированием
Они указываются в блоке beforeEach, или beforeAll - будет вызванна единожды перед запуском всех тестов*/
/*Точно также работают afterEach и afterALl - только срабатывают после тестов.*/
let count ;
describe(`test mapArrToString`,()=>{
  //Запускается единожды, перед всеми тестами
  beforeAll(()=>{
    count = 0;
  })
  //запускается перед каждым тестом
  beforeEach(()=>{
    console.log(count++);
  })
    /*можно использовать различные логические операторы not,lessThan, greaterThan, toBeUndefined*/
  test( 'меньше чем', ()=>{
    expect (square(2)).toBe(4);
    expect (square(2)).toBeLessThan(10);
    expect (square(2)).toBeGreaterThan(3);
    expect (square(2)).not.toBeUndefined();

    /*Можно проверить - сколько раз в тестируемом модуле вызывается конкретная функция.
    Для этого нужно использовать метод toBeCalledTimes(имя функции)(более подробно смотри в документации),
    но перед этим нужно указать переменную для слежки за отслеживаемой функцией*/
    const spyMyBomj = jest.spyOn(Math, "pow")//Первый аргумент модуль, который вызывает отслеживаемый метод, второй аргумент - сам метод
    square(2);//Теперь мы вызываем тестируемый модуль в котором будем считать сколько раз вызовется искомый метод
    expect (spyMyBomj).toBeCalledTimes(1);//square должна вызвать метод pow ровно один раз
  })
  test( 'второй подсчёт вызова pow', ()=>{
    const spyMyBomj = jest.spyOn(Math, "pow")
    square(1);//Если не прописать в afterEach метод сброса подсчёта для spyMyBomj, то прописанный мок (spyMyBomj) будут накапливать вызовы pow, сколько бы раз ты не вызвал в тесторовании эту фнукцию - столько раз и будет в spymybomj
    expect (spyMyBomj).toBeCalledTimes(0);//поэтому в forEach мы пишем метод для сброса этих моков, чтобы после каждого теста он обнулялся.
  })
  afterEach(()=>{
    jest.clearAllMocks();//Это метод для сброса счётчиков в каждом моке(как например в spyMybBomj)
  })    
})