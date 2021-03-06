export function translatePigLatin(str) {
  if (str === '') {
    return '';
  }

  if (/^[aeiou]/.test(str)) {
    return `${str}way`;
  }

  const splitStr = str.split(/([aeiou].*)/);
  return [splitStr[1], splitStr[0], 'ay'].join('');
}
