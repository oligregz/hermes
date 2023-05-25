import React, { useEffect, useState } from 'react';
import Input from '../../Input';
import useAuth from '../../../hooks/useAuth';
import { managerReserves, createTable } from './submitProcess';
import './Reserve.css';

const Reservevation = () => {
  
  const {
    clientForm,
    setClientForm,
  } = useAuth();

  const [tableId, setTableId] = useState('');

  useEffect(() => {
    const form = document.getElementById('myForm');
    const submitButton = document.getElementById('submitButton');
    const dateField = document.getElementById('dateField');
    const hourField = document.getElementById('hourField');

    const today = new Date().toISOString().split('T')[0];
    dateField.min = today;

    form.addEventListener('input', () => {
      const date = dateField.value;
      const hour = hourField.value;
      const clientId = document.getElementById('clientIdField').value;
      const tableId = document.getElementById('tableIdField').value;

      if (date && hour && clientId && tableId) {
        submitButton.disabled = false;
      } else {
        submitButton.disabled = true;
      }
    });

    form.addEventListener('submit', (event) => {
      const selectedDate = new Date(dateField.value);
      const dayOfWeek = selectedDate.getDay();
      const selectedHour = new Date(`2000-01-01T${hourField.value}`);
      const startHour = new Date(`2000-01-01T18:00`);
      const endHour = new Date(`2000-01-01T23:59`);
  
      if (dayOfWeek !== 0 && (selectedHour < startHour || selectedHour > endHour)) {
        event.preventDefault();
        alert('Selecione um horário válido. Horários permitidos: das 18:00 às 23:59 .');
        hourField.value = '';
        hourField.focus();
      }
    });

  }, []);

  useEffect(() => {
  }, [clientForm]);
  
  const handleClick = async () => {
    const newTableId = await createTable();
    setTableId(newTableId);
  };

  const submit = async (event) => {
    event.preventDefault();
  
    const form = event.target;
  
    const clientIdInt = form.elements.clientIdField.value;
    setClientForm({
      date: form.elements.dateField.value,
      hour: form.elements.hourField.value,
      clientId: clientIdInt,
      tableId: await createTable(),
    });
    
    managerReserves(clientForm);

    return clientForm;
  };



  return (
    <div class="container mt-5">
      <h4>Realise sua reserva preenchendo os campos abaixo</h4>
      <form id="myForm" onSubmit={submit}>
        <div class="form-group">
          <label for="dateField">Data:</label>
          <Input type="date" className="form-control" id="dateField" required />
        </div>
        <div class="form-group">
          <label for="hourField">Hora:</label>
          <Input type="time" className="form-control" id="hourField" required />
        </div>
        <div class="form-group">
          <label for="clientIdField">ID do Cliente:</label>
          <Input type="text" className="form-control" id="clientIdField" required />
        </div>
        <div class="form-group">
          <label for="tableIdField">ID da Mesa:</label>
          <Input
          type="text"
            className="form-control"
            id="tableIdField"/>
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          id="submitButton"
          disabled
        >
          Enviar
        </button>
      </form>
    </div>
  )
}

export default Reservevation;
