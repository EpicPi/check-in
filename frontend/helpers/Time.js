export const TODAY = new Date().toISOString().slice(0,10);

export function dateStringToHours(date) {
    let hours = ('0' + (new Date(date).getHours())).slice(-2);
    let mins = ('0' + (new Date(date).getMinutes())).slice(-2);
    return hours + ':' + mins;
}

export function dateStringToDate(date) {
    return new Date(date).toISOString().split('T')[0];
}

export function dateTimeToDate(date, time) {
    return new Date(date + ' ' + time);
}
