let numberus;

async function awaitTest(){
  console.log(`awaitTest begins`);
  //В данном случае promise для await необходим, т.к. await останавливает
  //работу компилятора только пока не получит значение (как resolve у промиса)
  //Т.К. setTimeout - сразу возвращает integer значение(id функции)
  //То и await не останавливает работу компилятора.
  await new Promise((resolve,reject)=>setTimeout(()=>{
    console.log(`прошла секундус`);
    numberus = 2+2;
    console.log(`numberus in setTimeout = ${numberus}`);
    resolve(numberus)
  },1000))
  console.log(`awaitTest end = ${numberus}`);
}




console.log(`До запуска awaitTest numberus = ${numberus}`);

awaitTest();

console.log(`После запуска awaitTest numberus = ${numberus}`);

// new Promise((resolve,reject)=>{
//   console.log(`numberus in promise = ${numberus}`);
//   // reject(new Error('Да капец вообще'));
// })
// .then((result)=>{
//   console.log(`промис завершился без ганжубаса без${result}`);
//   console.log(`after promise numberus = ${numberus}`);
// })
// .catch((err)=>{
//   console.log(`Обшибка промиса : ${err}`);
// })
// console.log(`Расходимся`);
// console.log(`numberus in the end = ${numberus}`);