export const TODAY = new Date().toISOString().slice(0, 10);

export function dateStringToHours(date) {
  return timeInputFormat(date);
}

export function dateStringToDate(date) {
  return dateInputFormat(date);
}

export function dateTimeToDate(date, time) {
  return new Date(date + ' ' + time);
}

export function dateToString(date) {
  return date.toUTCString();
}

//formats time nicely
export function timeInputFormat(date) {
  let now = new Date(date);
  let hour = ('0' + now.getHours()).slice(-2);
  let min = ('0' + now.getMinutes()).slice(-2);
  return hour + ':' + min;
}

//formats date nicely
export function dateInputFormat(date) {
  let now = new Date(date);
  let year = now.getFullYear();
  let month = ('0' + (now.getMonth() + 1)).slice(-2);
  let day = ('0' + now.getDate()).slice(-2);
  return year + '-' + month + '-' + day;
}

export function getCurrentTime() {
  let now = new Date();
  return timeInputFormat(now);
}
export function getCurrentDate() {
  let now = new Date();
  return dateInputFormat(now);
}
export function isEventRepeat(event) {
  let isRepeat = false;
  for (let prop in event.repeats) {
    isRepeat = !!(event.repeats[prop] || isRepeat);
  }
  return isRepeat;
}
export function isEventActive(event) {
  let now = new Date();
  let isActive = false;
  if (isEventRepeat(event)) {
    // FIXME put this in const enum file
    const DAYS_OF_WEEK = [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday'
    ];
    // day of week should be same
    if (event.repeats[DAYS_OF_WEEK[now.getDay()]]) {
      let start = timeInputFormat(event.dates.checkinStart);
      let end = timeInputFormat(event.dates.checkinEnd);
      let current = timeInputFormat(now);
      // checking the hr:min format
      isActive = current >= start && current <= end;
    }
  } else {
    isActive =
      now < new Date(event.dates.checkinEnd) &&
      now > new Date(event.dates.checkinStart);
  }
  return isActive;
}

export function isEventClosed(event) {
  let now = new Date();
  return now > new Date(event.dates.checkinEnd) && !isEventRepeat(event);
}
