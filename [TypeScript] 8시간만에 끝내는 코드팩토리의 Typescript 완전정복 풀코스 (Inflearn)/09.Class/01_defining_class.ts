/**
 * Class 선언하기
 */
class SampleClass {}

class Game {
  name: string;
  country: string;
  download: number;

  constructor(name: string, country: string, download: number) {
    this.name = name;
    this.country = country;
    this.download = download;
  }

  introduce() {
    return `${this.name}`;
  }
}

const game = new Game('a', 'b', 100);

const returnValue = game.introduce(); // TYPE: string
