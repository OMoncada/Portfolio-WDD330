fetch('json/prophets.json') // La ruta correcta a tu archivo JSON
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('cards-container');
        const template = document.getElementById('prophet-card').content;

        // Loop through the prophets array in the JSON data
        data.prophets.forEach(prophet => {
            const clone = template.cloneNode(true); // Clona el contenido de la plantilla
            const h2 = clone.querySelector('h2');
            const birthdate = clone.querySelectorAll('p')[0];
            const birthplace = clone.querySelectorAll('p')[1];
            const img = clone.querySelector('img');

            // Rellenar la plantilla con los datos
            h2.textContent = `${prophet.name} ${prophet.lastname}`;
            birthdate.textContent = `Birthdate: ${prophet.birthdate}`;
            birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
            img.src = prophet.imageurl;
            img.alt = `Portrait of ${prophet.name} ${prophet.lastname}`;

            // Añadir la tarjeta clonada al contenedor
            container.appendChild(clone);
        });
    })
    .catch(error => console.error('Error fetching the data:', error));
