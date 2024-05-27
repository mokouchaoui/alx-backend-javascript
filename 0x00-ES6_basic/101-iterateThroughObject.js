export default function iterateThroughObject(reportWithIterator) {
  let retStr = '';
  for (const idx in reportWithIterator) {
    if (parseInt(idx, 10) === reportWithIterator.length - 1) {
      retStr += reportWithIterator[idx];
    } else {
      retStr += `${reportWithIterator[idx]} | `;
    }
  }
  return retStr;
}
