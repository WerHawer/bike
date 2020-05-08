import controls from "./controls.js";
import refs from "./refs.js";

const showPressedButton = (e) => {
  const button = document.querySelector(`button[name='${e.code}']`);
  button.classList.add("active");
};

const hidePressedButton = (e) => {
  const button = document.querySelector(`button[name='${e.code}']`);

  if (!button) return;

  if (button.classList.contains("active")) {
    button.classList.remove("active");
  }
};

const keyboardControl = (e) => {
  if (!controls[e.code]) return;
  controls[e.code]();
  showPressedButton(e);
};

const hidePress = (e) => {
  if (e.target.classList.contains("active")) {
    e.target.classList.remove("active");
  }
  e.target.removeEventListener("mouseout", hidePress);
};

const showPress = (e) => {
  if (e.target === e.currentTarget) return;
  e.target.classList.add("active");

  e.target.addEventListener("mouseout", hidePress);
};

const buttonControl = (e) => {
  if (e.target === e.currentTarget) return;
  controls[e.target.name]();

  hidePress(e);
};

window.addEventListener("keydown", keyboardControl);
window.addEventListener("keyup", hidePressedButton);
refs.controls.addEventListener("mousedown", showPress);
refs.controls.addEventListener("click", buttonControl);
