import React, { useEffect } from 'react';

const Reservevation = () => {
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
        alert('Selecione um horário válido. Horários permitidos: das 18:00 às 23:59 exceto aos domingos .');
        hourField.value = '';
        hourField.focus();
      }
    });
  }, []);

  return (
    <div class="container mt-5">
      <form id="myForm">
        <div class="form-group">
          <label for="dateField">Data:</label>
          <input type="date" class="form-control" id="dateField" required></input>
        </div>
        <div class="form-group">
          <label for="hourField">Hora:</label>
          <input type="time" class="form-control" id="hourField" required></input>
        </div>
        <div class="form-group">
          <label for="clientIdField">ID do Cliente:</label>
          <input type="text" class="form-control" id="clientIdField" required></input>
        </div>
        <div class="form-group">
          <label for="tableIdField">ID da Mesa:</label>
          <input type="text" class="form-control" id="tableIdField" required></input>
        </div>
        <button type="submit" class="btn btn-primary" id="submitButton" disabled>Enviar</button>
      </form>
    </div>
  )
}

export default Reservevation;
