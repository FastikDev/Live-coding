import { User } from './user.js';

export class Student extends User {
  #isActive = true;

  constructor (id, firstName, lastName, group, points) {
    super (id, firstName, lastName);
    this.group = group;
    this.points = points;
  }

  get getIsActive () {
    return this.#isActive;
  }

  set setIsActive (value) {
    if (typeof value !== 'boolean') {
      console-error('value is not a boolean type');
      return;
    }
    this.#isActive = value;
  }
}