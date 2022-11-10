const axios = require(`axios`);
const mats  = require(`../mapArrToString/mapArrToString`)
//axios - пакет, чтобы отправлять запросы на сервер
//В качестве сервера будем использовать сервис jsonplaceholder, к нему можно обратиться и получить ответ.

const burl = 'https://jsonplaceholder.typicode.com/users';
console.log(`so it begin`);
const getData = async () => {
  axios
    .get(burl)// Запрашиваем у сервера информэйшон, с помощью метода get
    .then((resp)=>{
      console.log(resp);
      // преобразуем массив объектов пользователей в массив идентификаторов пользователей (ты можешь перейти поссылке по которой обращаемся к серверу и увидеть, какой json получется метод get)
      const userIds = response.data.map(user => user.id);
    })
    .catch(err=>{console.log(`>>>error : \n${err}`);})
    //возвращаем строку из идентификаторов
    // return mats(userIds);
}

getData();

module.exports = getData;