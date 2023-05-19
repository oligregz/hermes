import React, { useState, useEffect }from 'react';
import useAuth from '../../../hooks/useAuth';
import formatDateToBR from '../../../utils/date';
import formatDateTimeToBR from '../../../utils/time';

const Reserve = () => {

  const { reserves } = useAuth();
  const [reservesData, setReservesData] = useState(null);
  const [valuesData, setValuesData] = useState({});

  
  useEffect(() => {
    const fetchData = async () => {
      const data = await reserves();
      setReservesData(data.reserves);
      setValuesData(JSON.stringify(data.reserves));
    };
    
    fetchData();
  }, [reserves]);

  // function parseJSONToObject() {
  //   try {
  //     const obj = JSON.parse(valuesData);
  //     console.log(obj);
  //     return obj;
  //   } catch (error) {
  //     console.error('Erro ao converter JSON para objeto:', error);
  //     return null;
  //   }
  // }

  // const nameClient = (id) => {
  //   const reserveObject = parseJSONToObject();

  //   for (let i = 0; i < reserveObject.length; i++) {
  //     let idClient = reserveObject[i].clientId;
  //     if (idClient === id) {
  //       const client = getClientById(id);
  //       console.log(client.id);
  //       return client.id;
  //     }
  //   }
  // }

  return (
    <div>
      {reservesData && Object.entries(reservesData).map(([key, value]) => (
        <li className="list-group-item" key={key}>
          {
          `Referência da Reserva: ${value.id}
          | Mesa: ${value.tableId}
          | Data: ${formatDateToBR(value.date)}
          | Hora: ${formatDateTimeToBR(value.hour)}`
          }
        </li>
      ))}
    </div>
  );
};


export default Reserve;
