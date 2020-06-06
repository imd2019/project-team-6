export class Player {
  constructor(job, apartment, hasChild) {
    this.happiness = 100;
    this.health = 100;
    this.money = job.salary;
    this.job = job;
    this.apartment = apartment;
    this.hasChild = hasChild;
  }
}
