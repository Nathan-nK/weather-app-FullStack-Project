const manager = new TempManager()
const render = new Renderer()

async function loadPage(){
    let x = await manager.getDataFromDB()
    render.renderData(manager.cityData)
}


async function handleSearch(){
    let cityName = $('#weather-input').val()
   await manager.getCityData(cityName)
    render.renderData(manager.cityData)
}


$('#weather-start').on('click', handleSearch)

$('.weather-container').on('click', '.save', function(){
    let cityName = $(this).closest('.weather-box').find('.data-name').text()
    manager.saveCity(cityName)
})

$('body').on('click', '.remove', function(){
    let cityName = $(this).closest('.weather-box').find('.data-name').text()
    manager.removeCity(cityName)
})
loadPage()
