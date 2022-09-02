let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function myFunc(ele) {
//   console.log(ele);
// }

// arr.forEach(function (ele, index) {
//   console.log(`[${index}]의 값은 ${ele}입니다`);
// });

// const myfunc2 = (ele, index) => console.log(`[${index}]의 값은 ${ele}입니다`);

// myfunc2(10, 20);

// arr.forEach((ele, idx) =>
//   idx < 3 ? console.log(`[${idx}]의 값 ${ele}`) : null
// );

// let result = arr.forEach((ele, index) => {
//   console.log(`[${index}]의 값은 ${ele}입니다`);
//   return ele;
// });
// console.log(result);

// let result1 = arr.map((ele, index, allArr) => {
//   console.log(`[${index}] ${ele} ${allArr}`);
//   console.log(allArr);
// });
// console.log(result1);

// const result = arr.map((ele) => ele * 2);
// console.log(result);

// const result = arr.filter((ele) => ele % 2 === 0).map((ele) => ele * 2);

// console.log(result);

let hour = 0;
let minute = 0;
let second = 0;
let quit;

const timerId = setInterval(() => {
  console.log(`${hour}:${minute}:${second}`);
  second++;
  if (second === 60) {
    minute++;
    second = 0;
  }
  if (minute === 60) {
    hour++;
    minute = 0;
  }
  if (second % 10 === 0) {
    if (confirm("종료하시겠습니까?")) {
      setTimeout(() => {
        clearInterval(timerId);
        console.log("종료됩니다.");
      }, 1000);
    }
  }
}, 500);

// console.log(timerId);

// let hour = 0;
// let minute = 10;
// let second = 00;

// const timerId = setInterval(() => {
//   console.log(
//     `${hour.toString().padStart(2, "0")}:${minute
//       .toString()
//       .padStart(2, "0")}:${second.toString().padStart(2, "0")}`
//   );
//   if (second === 0 && minute === 0 && hour === 0) {
//     console.log("따르르르르릉");
//     clearInterval(timerId);
//   }

//   if (second === 00) {
//     minute--;
//     second = 60;
//   }
//   if (minute === 00) {
//     hiur--;
//     minute = 59;
//   }

//   second--;
// }, 100000);
