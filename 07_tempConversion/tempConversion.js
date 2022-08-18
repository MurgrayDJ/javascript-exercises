const ftoc = function(fTemp) {
  let cTemp = (fTemp - 32) * (5/9);
  let cRounded = Math.round(cTemp * 10)/10;
  return cRounded;
};

const ctof = function(cTemp) {
  let fTemp = cTemp * (9/5) + 32;
  let fRounded = Math.round(fTemp * 10)/10;
  return fRounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
