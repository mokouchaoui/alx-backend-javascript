export default function appendToEachArrayValue(array, appendString) {
  for (const val of array) {
    // eslint-disable-next-line no-param-reassign
    array[array.indexOf(val)] = `${appendString}${val}`;
  }

  return array;
}
