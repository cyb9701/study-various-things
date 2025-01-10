// 1. Date 객체를 생성하는 방법.
let date1 = new Date(); // 생성자.
console.log('🍀chapter10:3🍀', date1); // Log: 현재 시간.

let date2 = Date('2025-01-1');
console.log('🍀chapter10:6🍀', date2); // Log: Fri Jan 10 2025 11:32:27 GMT+0900 (한국 표준시).

// 2. 타임 스탬프.
// 특정 시간이 "1970.01.01 00시 00분 00초 (UTC)"로 부터 몇 ms가 지났는지를 의미하는 숫자값.
let ts1 = date1.getTime();
let date4 = new Date(ts1);

// 3. 시간 요소들을 추출하는 방법.
let year = date1.getFullYear();
let month = date1.getMonth(); // 1월:0 --> index 값으로 반환된다.
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// 4. 시간 수정하기.
date1.setFullYear(1999);
date1.setMonth(2); // 3월.
date1.setDate(30);
date1.setHours(1);
date1.setMinutes(2);
date1.setSeconds(3);

// 5. 시간을 여러 포맷으로 출력하기.
console.log('🍀chapter10:31🍀', date1.toDateString()); // Log: Tue Mar 30 1999.
console.log('🍀chapter10:32🍀', date1.toLocaleString()); // Log: 1999. 3. 30. 오전 1:02:03.
