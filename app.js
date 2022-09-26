const ufId = document.getElementById("uf")
const urlUF = 'http://servicodados.ibge.gov.br/api/v1/localidades/estados'
const cities = document.getElementById("city")

ufId.addEventListener('change', async ()=>{
    const cityUrl = 'http://servicodados.ibge.gov.br/api/v1/localidades/estados/' + uf.value + '/municipios'
    const request = await fetch(cityUrl)
    const response = await request.json()
    let options = ''
    response.forEach(function(city){
        options += '<option>' + city.nome +'</option>'
    })
    cities.innerHTML = options
})

window.addEventListener('load', async ()=> {
    const request = await fetch(urlUF)
    const response = await request.json()
    const options = document.createElement("optgroup")
    options.setAttribute('label', '')

    response.forEach(function(uf){
        options.innerHTML += '<option>' + uf.sigla +'</option>'
    })

    ufId.append(options)
})
