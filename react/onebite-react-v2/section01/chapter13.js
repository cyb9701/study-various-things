// 1. 콜백 함수.
// 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미함.
const main = (value) => {
  console.log('🍀chapter13:4🍀', value);
  value();
};

const sub = () => {
  console.log('🍀chapter13:9🍀', 'i am sub');
};

main(sub);

main(function () {
  console.log('🍀chapter13:15🍀', 'a');
});

main(() => {
  console.log('🍀chapter13:19🍀', 'b');
});

// 2. 콜백 함수의 활용.
const repeat1 = (count) => {
  for (let i = 1; i <= count; i++) {
    console.log('🍀chapter13:25🍀', i);
  }
};

const repeat1Double = (count) => {
  for (let i = 1; i <= count; i++) {
    console.log('🍀chapter13:25🍀', i * 2);
  }
};

repeat1(5);
repeat1Double(5);

const repeat2 = (count, callback) => {
  for (let i = 1; i <= count; i++) {
    callback(count);
  }
};

repeat2(5, (value) => {
  console.log('🍀chapter13:45🍀', value);
});

repeat2(5, (value) => {
  console.log('🍀chapter13:45🍀', value * 2);
});
