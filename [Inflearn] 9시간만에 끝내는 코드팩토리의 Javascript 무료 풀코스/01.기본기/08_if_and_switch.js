/**
 * If and Switch
 */
let number = 5;

if (number % 2 === 0) {
  console.log('number 변수는 짝수입니다.');
} else {
  console.log('number 변수는 홀수입니다.');
}

if (number % 2 === 0) {
  console.log('2의 배수입니다.');
} else if (number % 3 === 0) {
  console.log('3의 배수입니다.');
} else if (number % 4 === 0) {
  console.log('4의 배수입니다.');
} else {
  console.log('2,3,4의 배수가 아닙니다.');
}

const englishDay = 'monday';
let koreanDay;

switch (englishDay) {
  case 'monday':
    koreanDay = '월요일';
    break;
  case 'tuesday':
    koreanDay = '화요일';
    break;
  case 'wensday':
    koreanDay = '수요일';
    break;
  case 'thursday':
    koreanDay = '목요일';
    break;
  case 'fridday':
    koreanDay = '금요일';
    break;
  case 'saturday':
    koreanDay = '토요일';
    break;
  case 'sunday':
    koreanDay = '일요일';
    break;
}
console.log(koreanDay);
