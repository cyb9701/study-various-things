// 비동기 작업 처리하기.
// 1. 콜백 함수.
//
// [assets/pdf/2섹션-JavaScript 심화.pdf]

const task = () => {
  setTimeout(() => {
    console.log('🍀chapter12:6🍀', 'hi');
  }, 3000);
};

task();

const add = (a, b, callbak) => {
  setTimeout(() => {
    const sum = a + b;
    callbak(sum);
  }, 3000);
};

add(1, 2, (value) => {
  console.log('🍀chapter12:20🍀', value);
});

// 음식을 주문하는 상황.
const orderFood = (callback) => {
  setTimeout(() => {
    const food = '떡볶이';
    callback(food);
  }, 3000);
};

const cooldownFood = (food, callback) => {
  setTimeout(() => {
    const cooldownedFoold = `식은 ${food}`;
    callback(cooldownFood);
  }, 2000);
};

orderFood((orderedFood) => {
  console.log('🍀chapter12:32🍀', orderedFood);

  cooldownFood(orderedFood, (cooldownedFood) => {
    console.log('🍀chapter12:42🍀', cooldownedFood);
  });
});
