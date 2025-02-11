// Vite의 이미지 최적화를 위해서 import하여 사용하는 것을 권장.
//
// public/ 폴더의 이미지는 브라우저에서 직접 접근할 수 있어 동적 경로 설정이 가능하지만 번들링 및 최적화가 적용되지 않고, src/assets/ 폴더의 이미지는 Webpack을 통해 최적화되며 캐시 관리가 자동으로 되지만 동적 경로 설정이 불가능하므로, 정적 파일은 public/에, React 컴포넌트에서 사용하는 이미지는 src/assets/에 두는 것이 적절하다.
import emotion1 from '../assets/emotion1.png';
import emotion2 from '../assets/emotion2.png';
import emotion3 from '../assets/emotion3.png';
import emotion4 from '../assets/emotion4.png';
import emotion5 from '../assets/emotion5.png';

const getEmotionImage = (emotionId) => {
  switch (emotionId) {
    case 1:
      return emotion1;
    case 2:
      return emotion2;
    case 3:
      return emotion3;
    case 4:
      return emotion4;
    default:
      return emotion5;
  }
};

export default getEmotionImage;
