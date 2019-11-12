export default function(x) {
  if (!Array.isArray(x) || x.length < 2 || x.length % 2 !== 0) {
    throw new Error(
      `x :${x} should be array with length at least 2 and length can be divided by 2 without remainder`
    );
  }
  let res = 0;
  for (let i = 0; i < x.length / 2; i++) {
    res +=
      100 * Math.pow(x[2 * i + 1] - x[2 * i] * x[2 * i], 2) +
      Math.pow(1 - x[2 * i], 2);
  }
  return res;
}
