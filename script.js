const personaForm = document.getElementById("appointmentForm");

appointmentForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const cita = new FormData(appointmentForm);

  fetch('citas.php', {
      method: 'POST', 
      body: cita
  })
  .then(response => response.text())
  .then(data => {
      alert("cita creada correctamente");
      appointmentForm.reset();
  })
  .catch(error => {
      console.log("Error al crear la persona:", error);
      alert("Error al crear la persona");
  });
});