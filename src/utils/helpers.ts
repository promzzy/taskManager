import moment from "moment";

export function colorsGenerator(key: string){
  switch (key) {
    case 'UPCOMING':

      return '#af0909c6';
    case 'INPROGRESS':
      return '#FD6820';
    case 'COMPLETED':
      return '#005C17'

    default:
      return '#000000';
  }
}

export function sentenceCase(value: string) {
  return value.toLowerCase().replace(/^./g, value.charAt(0).toUpperCase())
}

export function titleCase(value: string) {
    return value
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function whichHour() {
  const hours = new Date().getHours();
  const min = new Date().getMinutes(); // eslint-disable-line
  return hours < 12
    ? 'Morning'
    : hours >= 12 && hours < 17
    ? 'Afternoon'
    : 'Evening';
}

export function dateFormate(date: string) {
  return new Date(date).getTime()
    ? moment(new Date(date)).format('DD MMM, YYYY')
    : '-- / --';
}