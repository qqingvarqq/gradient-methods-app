export default function(x) {
  if (!Array.isArray(x) || x.length < 2) {
    throw new Error(`x :${x} should be array with length at least 2`);
  }
  let firstSum = 0;
  for (let i = 0; i < x.length; i++) {
    firstSum += Math.pow(x[i] - 1, 2);
  }
  let secondSum = 0;
  for (let i = 0; i < x.length; i++) {
    secondSum += Math.pow(x[i], 2);
  }
  secondSum -= 0.25;
  secondSum = Math.pow(10, -3) * secondSum * secondSum;
  return firstSum + secondSum;
}
