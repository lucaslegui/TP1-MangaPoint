document.getElementById('fetchMangas').addEventListener('click', function() {
    const secretKey = prompt("Por favor, introduce la clave secreta 👮‍♂️:");
    if (secretKey) {
        const url = `/mangas?secretKey=${secretKey}`;
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Acceso denegado: ' + response.statusText);
                }
            })
            .then(data => displayMangas(data))
            .catch(error => {
                console.error('Error:', error);
                alert(error.message);
            });
    } else {
        alert("No se ingresó la clave secreta.");
    }
});

function displayMangas(mangas) {
    const container = document.getElementById('mangaContainer');
    container.innerHTML = '';
    mangas.forEach(manga => {
        const card = `
            <div class="col-md-4 mb-3">
                <div class="card">
                    <img src="${manga.image_url}" class="card-img-top" alt="${manga.title}">
                    <div class="card-body">
                        <h5 class="card-title">${manga.title}</h5>
                        <p class="card-text">${manga.description}</p>
                        <p class="card-text"><small class="text-muted">Género: ${manga.genre}</small></p>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}
