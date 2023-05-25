import {
  lessThanFifteenReserves,
  postTable,
  postReserve,
} from '../../../services/sevice';
import convertToMySQLDateTime from '../../../utils/dateTime';

const managerReserves = async (clientForm) => {
  const fifteen = await lessThanFifteenReserves(clientForm.date);

  if (!fifteen) {
    alert("Reservas esgotadas para essa data !");
    return;
  } else {
    const obj = getObjPostReserve(clientForm);

    console.log(obj);

    const createReserve = await postReserve(obj);

    
    return createReserve;
  }
}

const getObjPostReserve =  (clientForm) => {
  const hour = convertToMySQLDateTime(clientForm.date, clientForm.hour);
  const obj = {
    date: clientForm.date,
    hour: hour,
    clientId: parseInt(clientForm.clientId),
    tableId: clientForm.tableId,
  }
  return obj;
}

const createTable = async () => {
  const result = await postTable();
  console.log(result.table.id);
  return result.table.id;
} 

export {
  managerReserves,
  createTable,
};
