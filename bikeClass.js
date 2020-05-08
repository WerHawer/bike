import {
  Light,
  Sound,
  Protection,
  SpeedSystem,
  DriveSystem,
} from "./systemClasses.js";

const protection = new Protection();
const speedSystem = new SpeedSystem();
const driveSystem = new DriveSystem();
const liteSystem = new Light();
const soundSystem = new Sound();

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

  check(bike, driver, el) {
    if (bike.condition > 0) return "Уже едем, всё хорошо ;)";
    if (!bike.isWorking) return "Велосипед неисправен!";

    if (driver.weight > bike.maxTransportWeight)
      return "ОГО, я так много не потяну ◉_◉";

    bike.condition = 1;
    el.classList.add("status--good");

    protection.chekBike();
    return "Можно ехать!";
  }

  start() {
    if (this.condition > 1) return "Вы уже в движении";

    if (this.condition < 1) return "Проверте велосипед перед отправлением";

    this.speed += 1;
    this.condition = 2;
    speedSystem.start();
    return "Поехали!";
  }

  speedIncrement() {
    if (this.condition < 2) {
      return "Cначала надо начать движние";
    }

    this.speed += 1 * this.currentTransmission;
    speedSystem.speedIncrement();

    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
      speedSystem.maxSpeedOnly();
      return `${this.maxSpeed} - всё, что могу  ¯\\_(ツ)_/¯`;
    }
  }

  speedDecrement() {
    if (!this.speed) {
      return "И так стоим... (ಠ_ಠ)";
    }

    this.speed -= 1;
    speedSystem.speedDecrement();

    if (this.speed < 0) {
      this.speed = 0;
      speedSystem.zeroSpeedOnly();
      return `Полный стоп`;
    }
  }

  transmissionIncrement() {
    if (this.currentTransmission === this.transmission) {
      speedSystem.gearMaxOnly();
      return "У меня больше нет передач";
    }

    this.currentTransmission += 1;
    speedSystem.gearIncrement();
  }

  transmissionDecrement() {
    if (this.currentTransmission === 1) {
      speedSystem.gearFirsOnly();
      return "Меньше нельзя";
    }

    this.currentTransmission -= 1;
    speedSystem.gearDecrement();
  }

  stop() {
    this.speed = 0;
    speedSystem.stop();
  }

  toggleLight() {
    this.light = !this.light;
    liteSystem.toggleLite();

    return this.light;
  }

  ringBell() {
    this.bell = !this.bell;

    soundSystem.ringBell();
  }

  turnLeft() {
    if (this.ruddle === this.minRuddle) {
      driveSystem.maxLeft();
      return "Руль на максимум влево";
    }
    driveSystem.turnLeft();
    this.ruddle -= 2;

    if (this.ruddle < this.minRuddle) {
      driveSystem.maxLeft();
      this.ruddle = this.minRuddle;
    }
  }

  turnRight() {
    if (this.ruddle === this.maxRuddle) {
      driveSystem.maxRight();
      return "Руль на максимум вправо";
    }

    driveSystem.turnRight();
    this.ruddle += 2;

    if (this.ruddle > this.maxRuddle) {
      driveSystem.maxRight();
      this.ruddle = this.maxRuddle;
    }
  }
}

export default Bike;
