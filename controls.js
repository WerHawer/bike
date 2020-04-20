import Bike from "./bikeClass.js";
import Driver from "./driverClass.js";
import refs from "./refs.js";

const bike = new Bike();
const driver = new Driver();

const check = (bike, driver, el) => {
  if (bike.condition > 0) return "Уже едем, всё хорошо ;)";
  if (!bike.isWorking) return "Велосипед неисправен!";

  if (driver.weight > bike.maxTransportWeight)
    return "ОГО, я так много не потяну ◉_◉";

  bike.condition = 1;
  el.classList.add("status--good");
  return "Можно ехать!";
};

const notificationAnimation = (notification) => {
  refs.notoficationOutput.innerHTML = notification;
  refs.notoficationOutput.classList.add("notification-show");

  setTimeout(() => {
    refs.notoficationOutput.classList.remove("notification-show");
  }, 3000);
};

const systemsShow = () => {
  let timer = "";
  return (sysName) => {
    const removeSystemNotification = () => {
      refs.systemsOutput.classList.remove("systems-show");
    };

    if (timer) {
      clearTimeout(timer);
    }

    refs.systemsOutput.innerHTML = `Задействована система ${sysName}`;

    refs.systemsOutput.classList.add("systems-show");

    timer = setTimeout(removeSystemNotification, 3000);
  };
};

const systemsShowWithTimer = systemsShow();

const controls = {
  ArrowUp: () => {
    systemsShowWithTimer("скорости");

    if (bike.speedIncrement()) {
      notificationAnimation(bike.speedIncrement());
      refs.speedOutput.innerHTML = bike.speed;

      return;
    }

    refs.speedOutput.innerHTML = bike.speed;
  },

  ArrowDown: () => {
    systemsShowWithTimer("скорости");

    if (bike.speedDecrement()) {
      notificationAnimation(bike.speedDecrement());
      return;
    }

    refs.speedOutput.innerHTML = bike.speed;
  },

  ArrowLeft: () => {
    systemsShowWithTimer("управления");

    if (bike.turnLeft()) {
      notificationAnimation(bike.turnLeft());
      return;
    }

    refs.ruddle.innerHTML = bike.ruddle;
  },

  ArrowRight: () => {
    systemsShowWithTimer("управления");

    if (bike.turnRight()) {
      notificationAnimation(bike.turnRight());
      return;
    }

    refs.ruddle.innerHTML = bike.ruddle;
  },

  KeyC: () => {
    systemsShowWithTimer("защиты");

    refs.statusOutput.innerHTML = check(bike, driver, refs.statusOutput);
  },

  KeyS: () => {
    systemsShowWithTimer("движния");

    refs.statusOutput.innerHTML = bike.start();
    refs.speedOutput.innerHTML = bike.speed;
  },

  Space: () => {
    systemsShowWithTimer("движния");

    bike.stop();
    refs.speedOutput.innerHTML = bike.speed;
  },

  KeyL: () => {
    systemsShowWithTimer("света");

    const light = bike.toggleLight();
    document.body.classList.toggle("lightTheme");

    if (light) {
      refs.light.innerHTML = "вкл";
      return;
    }
    refs.light.innerHTML = "выкл";
  },

  KeyB: () => {
    systemsShowWithTimer("звука");

    bike.ringBell();
    refs.bell.innerHTML = "дзинь-дзинь";
    refs.audioBell.currentTime = 0;
    refs.audioBell.play();

    setTimeout(() => {
      bike.ringBell();
      refs.bell.innerHTML = "тишина";
    }, 500);
  },

  KeyU: () => {
    systemsShowWithTimer("скорости");

    if (bike.transmissionIncrement()) {
      notificationAnimation(bike.transmissionIncrement());
      return;
    }

    refs.transmission.innerHTML = bike.currentTransmission;
  },

  KeyD: () => {
    systemsShowWithTimer("скорости");

    if (bike.transmissionDecrement()) {
      notificationAnimation(bike.transmissionDecrement());
      return;
    }

    refs.transmission.innerHTML = bike.currentTransmission;
  },
};

export default controls;
