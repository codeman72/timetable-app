document.getElementById('timetableForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const subject = document.getElementById('subject').value;
  const day = document.getElementById('day').value;
  const time = document.getElementById('time').value;

  if (subject && day && time) {
    const table = document.querySelector('#timetable tbody');
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${day}</td>
      <td>${time}</td>
      <td>${subject}</td>
    `;

    table.appendChild(row);
    document.getElementById('timetableForm').reset();
  }
});
