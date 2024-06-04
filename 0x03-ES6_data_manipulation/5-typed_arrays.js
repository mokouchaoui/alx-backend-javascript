export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }
  const arrBuff = new ArrayBuffer(length);
  const typedIntArray = new Int8Array(arrBuff);
  const dataView = new DataView(arrBuff);
  typedIntArray[position] = value;
  return dataView;
}
