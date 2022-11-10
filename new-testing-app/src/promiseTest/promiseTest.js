console.log(`Начинаем ганжубасный расколбас`);
let numberus;
new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log(`прошла секундус`);
    numberus = 2+2;
    console.log(`numberus in setTimeout = ${numberus}`);
    resolve('done');
  },1000)
  console.log(`numberus in promise = ${numberus}`);
  // reject(new Error('Да капец вообще'));
})
.then((result)=>{
  console.log(`промис завершился без ганжубаса без${result}`);
  console.log(`after promise numberus = ${numberus}`);
})
.catch((err)=>{
  console.log(`Обшибка промиса : ${err}`);
})
console.log(`Расходимся`);
console.log(`numberus in the end = ${numberus}`);