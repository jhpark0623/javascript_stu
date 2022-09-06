// const name = "망고";
// const price = 10000;

// const product = {
//   //key: value,
//   제품명: "7D 건조망고",
//   유형: "당절임",
//   성분: "망고, 설탕, 치자황색소",
//   원산지: "필리핀",
//   const: "상수입니다.",
//   javascript: "자바스크립트입니다",
//   1234: 4234,
//   "제품 유형": "먹는거",
// };

// // console.log(product);

// // console.log(product.제품명);
// // console.log(product["제품명"]);

// // console.log(product.const);
// // console.log(product.javascript);
// // console.log(product[1234]);
// //console.log(product.1234);
// //console.log(product.제품 유형);
// // console.log(product["제품 유형"]);

// const site = {
//   사이트명: "네이버",
//   url: "https://naver.com",
// };

// const iPhone = {
//   품명: "Apple 정품 아이폰 13 Pro 자급제",
//   "KC 인증 필 유무": "추후 등록 예정",
//   출시년월: "알 수 없음(업체미제공)",
//   "제조사(수입자)": "애플 / 애플",
//   제조국: "중국",
//   "크기(박스포함)": "165*89*33mm",
//   "무게(박스포함)": "326g",
//   "이동통신 가입조건": "해당없음(공기계)",
//   가입절차: "해당없음(공기계)",
//   "소비자의 추가 부담사항": "해당없음",
//   "주요 사양": "컨텐츠 참조",
//   품질보증기준:
//     "제품 이상 시 공정거래위원회 고시 소비자분쟁해결기준에 의거 보상합니다.",
//   "A/S 책임자와 전화번호": "Apple 고객센터 080-333-4000",
//   옵션명: ["1개", "2개", "3개"],
//   판매처: site,
// };

// console.log(typeof iPhone);
// console.log(typeof console);
// console.log(typeof iPhone.printBrand);

// console.log(iPhone);

// iPhone.고객센터 = "1577-1577";
// console.log(iPhone);

// delete iPhone.가입절차;
// console.log(iPhone);

// //delete console.log;
// console.myName = "홍길동";

// iPhone["제조사(수입자)"] = "삼성";

// console.log(typeof iPhone.품명);
// console.log(typeof iPhone.옵션명);
// iPhone.옵션명.type = "수량";
// console.log(iPhone.옵션명);

// // const json = JSON.stringify(iPhone, null, 1);
// // console.log(json);
// // const obj = JSON.parse(json);
// // console.log(obj);
// // console.log(obj.판매처.url);

// // console.log(iPhone.품명);
// // console.log(iPhone["KC 인증 필 유무"]);
// // console.log(iPhone.옵션명);
// // console.log(iPhone.판매처.url);
// // iPhone.printBrand("박종훈");
// //iPhone.printfModel("박종훈");

// const products = [iPhone, iPhone, iPhone, iPhone, iPhone];
// console.log(products);

// const 내쇼핑몰 = {
//   제품들: products,
// };
// console.log(내쇼핑몰);
// console.log(내쇼핑몰.제품들[0].품명);
// console.log(products[0].품명);
// console.log(iPhone.품명);

// const str = "hello world";
// console.log(str);
// str.indexOf();

// const str2 = new String("hello world");
// console.log(typeof str2);

// str2.indexOf();

// const str3 = "동해물과 백두산이 마르고 닳도록";
// console.log(str3.trim().split(" "));

// console.printf = function (str) {
//   console.log(str);
// };
// console.printf("내가 만든 출력 함수");

// String.prototype.toPrint = function () {
//   console.log("[2022-09-06] " + this.valueOf());
// };

// "dd".toPrint();

// const teststr = "test";
// teststr.toPrint();
// console.log(iPhone.품명);
// iPhone.품명.toPrint();

// iPhone.출시년월.toPrint();

console.log("asdf".toString());
console.log(["a", "s", "d", "f"].toString());
console.log((123).toString());

console.log(Math.abs(-1020));
const max = [1, 2, 5, 4, 8, 7, 9, 5, 2, 20];
console.log(Math.max(...max));
console.log(Math.min(...max));

console.log(Math.sqrt(Math.pow(2, 4)));

const rand = Math.random();
console.log(rand);
console.log(Math.trunc(rand * 10));
console.log(Math.floor(rand * 1000) / 100);
console.log((rand * 10).toFixed(2));

const product2 = [
  {
    제품명: "탐사수",
    가격: 500,
    무게: 50,
  },
  {
    제품명: "화장지",
    가격: 500,
    무게: 80,
  },
  {
    제품명: "모니터",
    가격: 100000,
    무게: 350,
  },
  {
    제품명: "마우스",
    가격: 50000,
    무게: 180,
  },
];

console.log(product2);
product2.sort();
const compare = (a, b) => {
  console.log(`a : ${JSON.stringify(a)}`);
  console.log(`b : ${JSON.stringify(b)}`);
  if (a.가격 < b.가격) return 1;
  else if (a.가격 > b.가격) return -1;
  else return 0;
};
const result = product2.sort(compare);
console.log(result);

console.log(_.sortBy(product2, ["무게"]).reverse());

console.log(_.orderBy(product2, ["가격", "무게"], ["asc"]));
console.log(_.orderBy(product2, ["가격", "무게"], ["desc"]));

// for (let i = 0; i < product2.length; i++) {
//   for (let j = product2.length - 1; j > i; j--) {
//     if (product2[i].가격 > product2[j].가격) {
//       product2[product2.length] = product2[i];
//       product2[i] = product2[j];
//       product2[j] = product2[product2.length];
//     }
//   }
// }
