import toFinite from './toFinite.js';

const freeParseFloat = parseFloat;

function random(lower, upper, floating) {
  if (floating === undefined) {
    if (typeof upper === "boolean") {
      floating = upper;
      upper = undefined;
    } else if (typeof lower === "boolean") {
      floating = lower;
      lower = undefined;
    }
  }
  if (lower === undefined && upper === undefined) {
    lower = 0;
    upper = 1;
  } else {
    lower = toFinite(lower);
    if (upper === undefined) {
      upper = lower;
      lower = 0;
    } else {
      upper = toFinite(upper);
    }
  }
  if (lower > upper) {
    const temp = lower;
    lower = upper;
    upper = temp;
  }
  if (floating || lower % 1 || upper % 1) {
    const rand = Math.random();
    const randLength = `${rand}`.length - 1;
    return Math.min(
      lower + rand * (upper - lower + freeParseFloat(`1e-${randLength}`)),
      upper
    );
  }
  return lower + Math.floor(Math.random() * (upper - lower + 1));
}

export { random };
