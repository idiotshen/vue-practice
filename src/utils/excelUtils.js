import XLSX from 'xlsx';

/**
 *
 *
 * @export
 * @param {Array} title
 * @param {Array} data
 * @param {string}} name
 */
export default function (title, data, name) {
  data.unshift(title);

  const worksheet = XLSX.utils.aoa_to_sheet(data);
  const newWorkBook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(newWorkBook, worksheet, name);

  XLSX.writeFile(newWorkBook, `${name}.xlsx`);
}
