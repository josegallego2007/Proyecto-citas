document.addEventListener("DOMContentLoaded", function() {
    const appointmentForm = document.getElementById("appointmentForm");

    if (appointmentForm) {
        appointmentForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const formData = new FormData(appointmentForm);

            // Aquí se podría enviar la información a un servidor usando fetch o XMLHttpRequest
            console.log("Nombre:", formData.get("name"));
            console.log("Correo Electrónico:", formData.get("email"));
            console.log("Fecha:", formData.get("date"));
            console.log("Hora:", formData.get("time"));
            console.log("Motivo:", formData.get("reason"));

            alert("Cita agendada con éxito. Nos pondremos en contacto contigo pronto.");
            appointmentForm.reset();
        });
    }

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const formData = new FormData(contactForm);

            // Aquí se podría enviar la información a un servidor usando fetch o XMLHttpRequest
            console.log("Nombre:", formData.get("name"));
            console.log("Correo Electrónico:", formData.get("email"));
            console.log("Mensaje:", formData.get("message"));

            alert("Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.");
            contactForm.reset();
        });
    }

    fetch('data/news.json')
        .then(response => response.json())
        .then(news => {
            const newsContainer = document.getElementById("newsContainer");
            if (newsContainer) {
                news.forEach(item => {
                    const newsItem = document.createElement("div");
                    newsItem.classList.add("news-item");
                    newsItem.innerHTML = `
                        <h2>${item.title}</h2>
                        <p>${item.content}</p>
                    `;
                    newsContainer.appendChild(newsItem);
                });
            }
        })
        .catch(error => console.error('Error fetching news:', error));
});
