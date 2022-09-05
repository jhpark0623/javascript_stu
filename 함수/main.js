const myPrint = (...data) => {
  let result = "";

  for (let i = 0; i < data.length; i++) {
    result = result + data[i] + " ";
  }

  console.log(data.join(","));
  console.log(result.split(" "));
};

myPrint("안녕", "하세요", "선문대", "입니다");

/*const min = (a, b, c) => {
  let result = a;

  if (result > b) result = b;
  if (result > c) result = c;

  return result;
};

const max = (arr) => {
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    result = result < arr[i] ? arr[i] : result;
  }

  return result;
};

const input = [10, 50, 5, 30, 2];*/

/*const min = (...items) => {
  let result = items[0];

  for (let i = 1; i < items.length; i++) {
    result = result > items[i] ? items[i] : result;
  }

  return result;
};

console.log(min(10, 20, 30));*/

//console.log(max(input));

/*const isLeapYear = (year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

console.log(`2020년은 윤년일까? === ${isLeapYear(2020)}`);
console.log(`2010년은 윤년일까? === ${isLeapYear(2010)}`);
console.log(`2000년은 윤년일까? === ${isLeapYear(2000)}`);
console.log(`1900년은 윤년일까? === ${isLeapYear(1900)}`);*/

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, 2));

// const sum2 = function (a, b) {
//   return a + b;
// };
// console.log(sum2(3, 4));

// const sum3 = (a, b) => a + b;
// // const sum3 = (a, b) => {return a + b};
// console.log(sum3(10, 20));

// //prompt("입력");
// let rhkdlf = prompt("좋아하는 과일은?", "포도");
// console.log(rhkdlf);

// let yorn = confirm("Y or N?");
// console.log(yorn);

// let qudtls = alert("?");
// console.log(qudtls);

// function main(a, b, c) {
//   console.log(`a값은 ${a}입니다.`);
//   console.log(`b값은 ${b}입니다.`);
//   console.log(`c값은 ${c}입니다.`);
// }

// main(1, 2, 3);

// const main2 = function (a, b, c) {
//   console.log(`${a},${b},${c}`);
// };

// main2(1, 2, 3);

// const main3 = (a, b, c) => console.log(`${a},${b},${c}`);

// main3(4, 5, 6);

// main();

// console.log(typeof main);
// console.log(typeof 1234);
// console.log(typeof "1234");
// console.log(typeof [1]);

// const obj = { a: 1, b: 2, c: 3 };
// console.log(typeof obj);

// console.log(typeof 123.456);

// console.log(main);
// console.log(console.log);
