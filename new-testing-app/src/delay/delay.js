const delay = (callback, ms)=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(callback())
    },ms)
  })
}

module.exports = delay;

// delay(()=>5+5,1000)
//   .then(res=>console.log(res))//Через секунду он запустит колбек, который ты передашь функции delay