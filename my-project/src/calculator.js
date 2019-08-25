export const add = (x, y, z) => {
  return (x || 0) + (y || 0) + (z || 0);
};

// const add = (...numbers) => numbers.reduce((a, e) => a + (e || 0), 0);

export class Integer {
  constructor(value) {
    this.value = value;
  }

  plus(other) {
    return new Integer(this.value + other.value);
  }
}
