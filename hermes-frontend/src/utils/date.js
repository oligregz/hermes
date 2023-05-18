function formatDateToBR(date) {
  const dateObj = new Date(date);
  const day = dateObj.getUTCDate();
  const month = dateObj.getUTCMonth() + 1; 
  const year = dateObj.getUTCFullYear();

  const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString()
    .padStart(2, '0')}/${year}`;

  return formattedDate;
}

export default formatDateToBR;
