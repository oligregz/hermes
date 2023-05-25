import React, { useState, useEffect }from 'react';
import useAuth from '../../../hooks/useAuth';
import formatDateToBR from '../../../utils/date';
import formatDateTimeToBR from '../../../utils/time';
import './reserves.css';

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

  return (
    <div>
      <h3>Reservas</h3>
      {reservesData && Object.entries(reservesData).map(([key, value]) => (
        <li className="list-group-item" key={key}>
          {
          `Referência da Reserva: ${value.id}
          | Cliente N: ${value.clientId}
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
