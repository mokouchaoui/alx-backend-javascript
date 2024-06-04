export default function cleanSet(set, startString) {
  if (!startString) return '';
  const stringsArr = [];
  set.forEach((word) => {
    if (word.startsWith(startString)) {
      stringsArr.push(word.substr(startString.length, word.length));
    }
  });
  return stringsArr.join('-');
}
