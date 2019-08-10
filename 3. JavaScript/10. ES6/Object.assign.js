
const person = {
  name: 'Wes Bos',
  age: 80
};
const cap2 = Object.assign({}, person, { number: 99, age: 12 });

//output : {name: "Wes Bos", age: 12, number: 99}




/**
 * 참고자료
 */
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign