
const initMap = async () => {
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
        if (data.medicamentos.length) {
            var { medicamentos, farmacias } = data
            sessionStorage.setItem('medicamentos', JSON.stringify(medicamentos))
            sessionStorage.setItem('farmacias', JSON.stringify(farmacias))
            insertDataInList(medicamentos)
        }
    }
}

const insertDataInList = medicamentos => {
    medicamentos.forEach(medicamento => {
        document.getElementById('listDrugs').innerHTML += `
        <li onclick="loadPinMap('${medicamento.id_farmacia}')">
            <p>${medicamento.titulo}</p>
            <span><i class="fas fa-building fa-sm"></i> FARMÁCIA SÃO PAULO</span>
            <p>R$ ${medicamento.valor}</p>
        </li>
         `
    })
}

initMap()

const loadPinMap = id => {
    arrDrugstores = JSON.parse(sessionStorage.getItem('farmacias'))
    drugstore = arrDrugstores.find(single => single._id == id)

    var map = new Microsoft.Maps.Map('#myMap', {
        center: new Microsoft.Maps.Location(drugstore.latitude, drugstore.longitude),
        zoom: 17
    });

    var center = map.getCenter();

    var pin = new Microsoft.Maps.Pushpin(center, {
        title: drugstore.nome,
        subTitle: drugstore.bairro
    });

    map.entities.push(pin);
}