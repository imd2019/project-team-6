export class Player {
  constructor(sex, job, apartment, hasChild) {
    this.happiness = 100;
    this.health = 100;
    this.sex = sex;

    this.job = job;
    this.money = job.salary;
    this.apartment = apartment;
    this.hasChild = hasChild;
  }
}
