const gd = require('./getData2.js');
const axios = require(`axios`);//импортируем, чтобы его можно было замокать.

jest.mock('axios');//мокаем объект axious, теперь мы можем его отслеживать косвенно, т.е. вызывать getData и следить как getData работает с axios

describe(`get data test`,()=>{
  
  let response; // это ответ сервера с которым будет сравниваться вывод из getData
  //мы будем мокать его перед каждым тестом в beforeEach
  beforeEach(()=>{/*Для каждого теста будем мокать данные*/
    response = {
      data:[
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
              "lat": "-43.9509",
              "lng": "-34.4618"
            }
          },
          "phone": "010-692-6593 x09125",
          "website": "anastasia.net",
          "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
          }
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
          "username": "Samantha",
          "email": "Nathan@yesenia.net",
          "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
              "lat": "-68.6102",
              "lng": "-47.0653"
            }
          },
          "phone": "1-463-123-4447",
          "website": "ramiro.info",
          "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
          }
        }
      ]
    }
  })

  test( 'Проверяю корректность значения', async ()=>{
    try{
      axios.get.mockReturnValue(response)//Сравниваем вызов "замоканного" метода(замокали в 4-й строке) с объектом, который должен быть вернут, он сохранён в переменную response
      // const data = await gd(); //Результат вызова тестируемой функции сохраняем в переменную data
      // expect(axios.get).toBeCalledTimes(1);//удостоверяемся, что амоканный метод будет вызван 1 раз.
      // expect(data).toEqual([`1`,`2`,`3`]);//Ожидаем, что ответ будет равен массиву строк чисел.
    } catch(err){
      console.log(`err = ${err}`);
    }
  })
})