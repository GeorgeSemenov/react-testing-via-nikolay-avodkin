const axios = require(`axios`);
const mats  = require(`../mapArrToString/mapArrToString`)
//axios - пакет, чтобы отправлять запросы на сервер
//В качестве сервера будем использовать сервис jsonplaceholder, к нему можно обратиться и получить ответ.

const burl = 'https://jsonplaceholder.typicode.com/users';
console.log(`so it begin`);
const getData = async () => {
  return axios
    .get(burl)// Запрашиваем у сервера информэйшон, с помощью метода get
    .then((resp)=>{
      // console.log(resp);
      // преобразуем массив объектов пользователей в массив идентификаторов пользователей (ты можешь перейти поссылке по которой обращаемся к серверу и увидеть, какой json получется метод get)
      //возвращаем строку из идентификаторов
      const userIds = resp.data.map(user => user.id);
      return mats(userIds);
    })
    .catch(err=>{console.log(`>>>error : \n${err}`);})
}

getData();

module.exports = getData;