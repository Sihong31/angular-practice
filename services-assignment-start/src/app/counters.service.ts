export class CountersService {
  activeToInactive = 0;
  inactiveToActive = 0;

  incrementActiveToInactive () {
    this.activeToInactive++;
    console.log('Active to Inactive: ' + this.activeToInactive);
  }

  incrementInactiveToActive () {
    this.inactiveToActive++;
    console.log('Inactive To Active: ' + this.inactiveToActive);
  }
}
