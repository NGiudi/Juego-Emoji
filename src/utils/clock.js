/**
 * @param {number} obj interval time value.
 * @return {objec} object time.
 */
export const getTimeObject = (ms) => {
  if (ms < 0) ms = 0;

  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((ms % (1000 * 60)) / 1000);

  return {
    minutes: ms ? minutes : 0,
    seconds: ms ? seconds : 0,
    total_ms: ms ? ms : 0,
  };
};

/**
 * @param {object} obj time object.
 * @param {string} obj format time.
 * @return {string} formatted string.
 */
export const formatClock = (timeObject) => {
  let str = "";

  /* if timeObject is not received, the time is set to zero. */
  if (timeObject) {
    if (timeObject.minutes > 9) {
      str += `${timeObject.minutes}:`;
    } else {
      str += `0${timeObject.minutes}:`;
    }

    if (timeObject.seconds > 9) {
      str += `${timeObject.seconds}`;
    } else {
      str += `0${timeObject.seconds}`;
    }

    return str;
  }

  return "00:00";
};
