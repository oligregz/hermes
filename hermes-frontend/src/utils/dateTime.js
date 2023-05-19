function convertToMySQLDateTime(date, hour) {
  console.log(hour);
  try {
    const [year, month, day] = date.split('-');
    const [hours, minutes] = hour.split(':');
  
    const datetime = new Date(year, month - 1, day, hours, minutes, 0);
  
    const mysqlDateTime = datetime.toISOString().slice(0, 19).replace('T', ' ');
  
    return mysqlDateTime;
  } catch (e) {
    console.error(e)
  }

}

export default convertToMySQLDateTime;