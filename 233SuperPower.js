const storm = {
  superPower: "Flying",
  log: printSuperPower,
};
function printSuperPower() {
  console.log("my superpower is " + this.superPower);
}
printSuperPower();
