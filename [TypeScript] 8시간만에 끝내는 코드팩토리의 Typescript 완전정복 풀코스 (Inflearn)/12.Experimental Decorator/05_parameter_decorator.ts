/**
 * Parameter Decoratr
 */
class Cat {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  dance(@LogParam ads: string) {
    console.log(`${this.name}가 ${ads} 춤을 춥니다`);
  }
}

const cat = new Cat('cat');
cat.dance('신나게');
// cat가 신나게 춤을 춥니다.

function LogParam(target: any, propertyKey: string, paramIndex: number) {
  console.log(`${paramIndex}번째 파리미터인 ${propertyKey}가 정의되었습니다`);
}
