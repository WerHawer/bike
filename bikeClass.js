class Bike {
  constructor(
    mark = "Ukraina",
    weight = 20,
    maxTransportWeight = 300,
    transmission = 5,
    passenger = false
  ) {
    this.mark = mark;
    this.weight = weight;
    this.maxTransportWeight = maxTransportWeight;
    this.currentTransmission = 1;
    this.transmission = transmission;
    this.passenger = passenger;
    this.speed = 0;
    this.maxSpeed = 50;
    this.condition = 0;
    this.light = false;
    this.bell = false;
    this.isWorking = true;
    this.ruddle = 0;
    this.minRuddle = -70;
    this.maxRuddle = 70;
  }

  start() {
    if (this.condition > 1) return "Вы уже в движении";

    if (this.condition < 1) return "Проверте велосипед перед отправлением";

    this.speed += 1;
    this.condition = 2;
    return "Поехали!";
  }

  speedIncrement() {
    if (this.condition < 2) {
      return "Cначала надо начать движние";
    }

    this.speed += 1 * this.currentTransmission;

    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
      return `${this.maxSpeed} - всё, что могу  ¯\\_(ツ)_/¯`;
    }
  }

  speedDecrement() {
    if (!this.speed) {
      return "И так стоим... (ಠ_ಠ)";
    }

    this.speed -= 1;

    if (this.speed < 0) {
      this.speed = 0;
      return `Полный стоп`;
    }
  }

  transmissionIncrement() {
    if (this.currentTransmission === this.transmission) {
      return "У меня больше нет передач";
    }

    this.currentTransmission += 1;
  }

  transmissionDecrement() {
    if (this.currentTransmission === 1) {
      return "Меньше нельзя";
    }

    this.currentTransmission -= 1;
  }

  stop() {
    this.speed = 0;
  }

  toggleLight() {
    this.light = !this.light;

    return this.light;
  }

  ringBell() {
    this.bell = !this.bell;
  }

  turnLeft() {
    if (this.ruddle === this.minRuddle) {
      return "Руль на максимум влево";
    }

    this.ruddle -= 2;

    if (this.ruddle < this.minRuddle) {
      this.ruddle = this.minRuddle;
    }
  }

  turnRight() {
    if (this.ruddle === this.maxRuddle) {
      return "Руль на максимум вправо";
    }

    this.ruddle += 2;

    if (this.ruddle > this.maxRuddle) {
      this.ruddle = this.maxRuddle;
    }
  }
}

export default Bike;
