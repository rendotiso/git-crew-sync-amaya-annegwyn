function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  if(hours>8){
    const regular = 8 * rate;
    const overtime = (hours - 8) * rate * 1.5;
    return Math.floor(regular + overtime);
  }
  return Math.floor(hours * rate);
}

module.exports = { isValidShift, calculatePay };
