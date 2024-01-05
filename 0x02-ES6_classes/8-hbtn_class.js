export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](int) {
    if (int === 'string') {
      return this._location;
    }
    if (int === 'number') {
      return this._size;
    }
    return null;
  }
}
