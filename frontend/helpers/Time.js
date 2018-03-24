export const TODAY = new Date().toISOString().slice(0, 10);

export function dateStringToHours(date) {
  let hours = ('0' + new Date(date).getHours()).slice(-2);
  let mins = ('0' + new Date(date).getMinutes()).slice(-2);
  return hours + ':' + mins;
}

export function dateStringToDate(date) {
  return new Date(date).toISOString().split('T')[0];
}

export function dateTimeToDate(date, time) {
  return new Date(date + ' ' + time);
}

export function timeInputFormat(date) {
  let now = new Date(date);
  let hour = ('0' + now.getHours()).slice(-2);
  let min = ('0' + now.getMinutes()).slice(-2);
  return hour + ':' + min;
}

export function dateInputFormat(date) {
  let now = new Date(date);
  let year = now.getFullYear();
  let month = ('0' + (now.getMonth() + 1)).slice(-2);
  let day = ('0' + now.getDate()).slice(-2);
  return year + '-' + month + '-' + day;
}
