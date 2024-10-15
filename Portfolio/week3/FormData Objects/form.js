document.addEventListener('DOMContentLoaded', () => {
    const formElem = document.getElementById('formElem');
    formElem.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(formElem);
        const currentDate = new Date().toISOString().slice(0, 10); // Formato YYYY-MM-DD
        formData.append('submissionDate', currentDate);

        for (let [name, value] of formData) {
            console.log(`${name}: ${value}`); // Muestra cada par clave/valor en la consola
        }
    });
});
