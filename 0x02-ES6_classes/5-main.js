import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
    new TestBuilding(200)
}
catch(err) {
    console.log(err);
}

try {
  class TestBuilding2 extends Building {
    evacuationWarningMessage() {
      return "Okay";
    }
  }
  console.log(new TestBuilding2(200));
}
catch(err) {
  console.log(err);
}