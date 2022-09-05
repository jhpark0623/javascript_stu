// const myPrint = (...data) => {
//   let result = "";

//   for (let i = 0; i < data.length; i++) {
//     result = result + data[i] + " ";
//   }

//   console.log(data.join(","));
//   console.log(result.split(" "));
// };

// myPrint("안녕", "하세요", "선문대", "입니다");

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

//-------------------------------------------------------
/*const 알바생 = (name, 시급, 근무시간) => {
        if (!name) {
          console.log("이름을 입력해라");
          return;
        }

         **시급 예외처리
        1. 숫자가 아닐때 > typeof(시급) !== number
        2. 최저시급보다 낮을때 > 9600 >= 시급
        3. undefined일때 > 시급 ===undefined
        4. 문자열이 입력된 경우 > typeof(시급) === "string"

        if (typeof 시급 === "number" && 9620 > 시급) {
          console.log("최저시급보다 높은 값을 입력하세요.");
          return;
        } else if (typeof 시급 === "string" && 9620 > Number(시급)) {
          console.log("최저시급보다 높은 값을 입력하세요.");
          return;
        } else if (시급 === undefined) {
          console.log("시급을 입력하세요.");
          return;
        }

        if (시급 === undefined || typeof 시급 !== "number") {
            if(typeof(시급) === "string"){
                console.log("숫자를 입력하세요.");
            }
            else{
                console.log("시급을 입력하세요.");
            }
          return;
        } else {
          if (9620 >= 시급) {
            console.log("최저시급보다 높은 값을 입력하세요.");
            return;
          }
        }

        console.log(`이름 : ${name}`);
        console.log(`시급 : ${시급.toLocaleString()}`);
        console.log(`근무시간 : ${근무시간}`);
        console.log(`하루 일당은 : ${(시급 * 근무시간).toLocaleString()}`);
        console.log(`---------------------------`);

      };

      알바생("박종훈");
      알바생("강석원", "9200");
      알바생();*/

/*const myFunc = (type, arr) => {
        let result = arr[0];

        if (type === "min") {
          for (let i = 1; i < arr.length; i++) {
            if (result > arr[i]) {
              result = arr[i];
            }
          }
        } else if (type === "max") {
          for (let i = 1; i < arr.length; i++) {
            if (result < arr[i]) {
              result = arr[i];
            }
          }
        } else {
          console.log("똑바로 써라 이놈아");
          return;
        }

        return result;
      };

      const inputarr = [30, 20, 304, 10, 94, 31];

      console.log(myFunc("min", inputarr));
      console.log(myFunc("max", inputarr));
      console.log(myFunc("fsdafs", inputarr));*/

//------------------------------------------------
// callback함수

/*const call3Timers = (callback) => {
  for (let i = 0; i < 3; i++) {
    //console.log(typeof callback);
    if (i === 2) callback(i);
  }
};

const myPrint = (idx) => console.log(`${idx} 번째 함수 호출`);

//call3Timers((idx) => console.log(`${idx} 번째 함수 호출`));
/*call3Timers(function (idx) {
  console.log(`${idx} 번째 함수 호출`);
});
call3Timers(myPrint);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sunmoonfn = (value, index, arr) => {
  console.log(`${value}/ ${index}/ ${arr}`);
  return value * value;
};

const forEachResult = arr.forEach(sunmoonfn);
console.log(forEachResult);

const mapResult = arr.map(sunmoonfn);
console.log(mapResult);

const filterfn = (value, index, arr) => {
  console.log(`${value}/ ${index}`);
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const filterResult = arr.filter(filterfn);
console.log(filterResult);*/

/*const arr = [
  "강석원",
  "박종훈",
  "윤승준",
  "이슬비",
  "이정운",
  "이종석",
  "이진우",
  "장효택",
  "정도현",
  "장도원",
  "최승준",
];*/

// const filterfn = (value) => {
//   /*if (value[0] === "이") {
//     return true;
//   }*/
//   //value[0] === "이" ? true : false;
//   if (value.indexOf("종") === 1) return true;
// };

/*console.log(arr.filter(filterfn));

arr.push("안녕", 1234, arr[10], 12345, "롤리팝!");
let pop = arr.pop();
console.log(arr);
console.log(pop);
console.log(arr.reverse());
console.log(arr.reverse());*/

/*const arr = [2, 4, 6, 8, 10];

const sum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

//const result = sum(arr);

//console.log(`배열의 총 합은 ${result}입니다.`);

const reducefn = (acc, cur, idx, src) => {
  console.log(`acc:${acc} / cur:${cur} / idx:${idx} / src:${src}`);
  return acc * cur;
};

const result = arr.reduce(reducefn);
console.log(result);*/
