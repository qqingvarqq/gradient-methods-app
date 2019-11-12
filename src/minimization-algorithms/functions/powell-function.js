export default function(x) {
  if (!Array.isArray(x) || x.length < 4 || x.length % 4 !== 0) {
    throw new Error(
      `x :${x} should be array with length at least 4 length can be divided by 4 without remainder`
    );
  }
  let res = 0;
  for (let i = 0; i < x.length / 4; i++) {
    res +=
      Math.pow(x[4 * i] + 10 * x[4 * i + 1], 2) +
      5 * Math.pow(x[4 * i + 2] - x[4 * i + 3], 2) +
      Math.pow(x[4 * i + 1] - 2 * x[4 * i + 2], 4) +
      10 * Math.pow(x[4 * i] - x[4 * i + 3], 4);
  }
  return res;
}
