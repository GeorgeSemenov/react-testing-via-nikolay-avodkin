const delay = require('./delay.js');

describe(`delay tests`,()=>{
  
  //т.к.delay функция асинхронная, то это нужно указать в тесте.
  test( 'delay test', async ()=>{
    const sum = await delay(()=>5+5,1000);
    expect(sum).toBe(10);//Тест будет выполняться дольше, т.к. ему нужно подождать 1000 милисекунд
  })
})