export default function createIteratorObject(report) {
  const iterator = [];
  const employeeReport = report.allEmployees;
  for (const key of Object.keys(employeeReport)) {
    iterator.push(...employeeReport[key]);
  }
  return iterator;
}
