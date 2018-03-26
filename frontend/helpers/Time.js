export const TODAY = new Date().toISOString().slice(0, 10);

export function dateStringToHours(date) {
  return timeInputFormat(date);
}

export function dateStringToDate(date) {
  return dateInputFormat(date);
}

export function dateTimeToDateString(date, time) {
  return new Date(date + ' ' + time).toUTCString();
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
export function isEventActive(event) {
  let now = new Date();
  return (
    now < new Date(event.dates.checkinEnd) &&
    now > new Date(event.dates.checkinStart)
  );
}
export function isEventClosed(event) {
  let now = new Date();
  return now > new Date(event.dates.checkinEnd);
}
