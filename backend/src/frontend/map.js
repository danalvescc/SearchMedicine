const initMap = () => {
    const query = new URLSearchParams(document.location.search)
    const titulo = query.get('titulo')
    const latitude = query.get('latitude')
    const longitude = query.get('longitude')
    const raio = query.get('raio')

    const response = await fetch(`${config.ApiBase}${config.ApiMedicamento}?titulo=${titulo}&latitude=${latitude}&longitude=${longitude}&raio=${raio}`)
    const data = await response.json()
    if (data.response) {
        alert(data.response)
        return false
    } else {

    }
}

initMap()