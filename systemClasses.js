export class Light {
  constructor() {
    this.isWork = false;
  }

  toggleLite() {
    this.isWork = !this.isWork;
    console.log("Light system:", this.isWork);
  }
}

export class Sound {
  constructor() {
    this.isWork = false;
  }

  ringBell() {
    this.isWork = !this.isWork;
    console.log("Sound system:", this.isWork);
  }
}

export class Protection {
  constructor() {
    this.isCheked = false;
  }

  chekBike() {
    this.isCheked = true;
    console.log("Protection system - Bike is cheked");
  }
}

export class SpeedSystem {
  constructor() {
    this.gear = 1;
    this.speed = 0;
    this.maxSpeed = 50;
    this.maxGear = 5;
  }

  start = () => {
    this.speed = 1;
    console.log("SpeedSystem - Start! Speed:", this.speed);
  };

  speedIncrement() {
    this.speed += this.gear;
    console.log("SpeedSystem - Speed:", this.speed);
  }

  maxSpeedOnly() {
    this.speed = this.maxSpeed;
    console.log("SpeedSystem - Speed:", this.speed);
  }

  speedDecrement() {
    this.speed -= 1;
    console.log("SpeedSystem - Speed:", this.speed);
  }

  zeroSpeedOnly() {
    this.speed = 0;
    console.log("SpeedSystem - Speed:", this.speed);
  }

  stop() {
    this.speed = 0;
    console.log("SpeedSystem - Speed:", this.speed);
  }

  gearIncrement() {
    this.gear += 1;
    console.log("SpeedSystem - Gear:", this.gear);
  }

  gearMaxOnly() {
    this.gear = this.maxGear;
    console.log("SpeedSystem - Gear:", this.gear);
  }

  gearDecrement() {
    this.gear -= 1;
    console.log("SpeedSystem - Gear:", this.gear);
  }

  gearFirsOnly() {
    this.gear = 1;
    console.log("SpeedSystem - Gear:", this.gear);
  }
}

export class DriveSystem {
  constructor() {
    this.ruddle = 0;
    this.minRuddle = -70;
    this.maxRuddle = 70;
  }

  turnLeft() {
    this.ruddle -= 2;
    console.log("DriveSystem - Ruddle", this.ruddle);
  }

  turnRight() {
    this.ruddle += 2;
    console.log("DriveSystem - Ruddle", this.ruddle);
  }

  maxLeft() {
    this.ruddle = -70;
    console.log("DriveSystem - Ruddle", this.ruddle);
  }

  maxRight() {
    this.ruddle = 70;
    console.log("DriveSystem - Ruddle", this.ruddle);
  }
}
