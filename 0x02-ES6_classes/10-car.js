export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const curr = this;
    return Object.assign(Object.create(Object.getPrototypeOf(curr)), {
      _brand: undefined,
      _motor: undefined,
      _color: undefined,

    });
  }
}
