import React, { useState, useEffect }from 'react';
import useAuth from '../../../hooks/useAuth';
import formatDateToBR from '../../../utils/date';
import formatDateTimeToBR from '../../../utils/time';

const Reserve = () => {

  const { reserves, clientById } = useAuth();
  const [reservesData, setReservesData] = useState(null);
  const [nameClient, setNameClient] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await reserves();
      setReservesData(data.reserves);
    };

    fetchData();
  }, [reserves]);

  // cria uma função que busca o cliente pelo id
  return (
    <div>
      {reservesData && Object.entries(reservesData).map(([key, value]) => (
        <li className="list-group-item" key={key}>
          {
          `Cliente: ${getClientById(value.clientId)}
          | Referência: ${value.id}
          | Data: ${formatDateToBR(value.date)}
          | Hora: ${formatDateTimeToBR(value.hour)}`
          }
        </li>
      ))}
    </div>
  );
};


export default Reserve;
