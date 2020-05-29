const config = {
    UrlBase: "http://localhost:3333",
    ViewMap: "/map",
    ApiMedicamento: "/api/medicamento"
}

try {
    document.getElementById('drugForm').onsubmit = function (e) {
        e.preventDefault();
        titulo = document.getElementById('titulo').value
        latitude = document.getElementById('latitude').value
        longitude = document.getElementById('longitude').value
        raio = document.getElementById('raio').value

        if (titulo && latitude && longitude && raio) {
            titulo = titulo.toUpperCase()

            location.href = `${config.UrlBase}${config.ViewMap}?titulo=${titulo}&latitude=${latitude}&longitude=${longitude}&raio=${raio}`
        } else
            alert("Preenchimentos de todos os campos é obrigatório !")
    }
} catch (err) {
    console.error(err)
}