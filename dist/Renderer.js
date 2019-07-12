class Renderer {
    constructor (){
    }
    renderData(allCityData){
        $('.weather-container').empty()
        const source = $('#weather-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({array: allCityData});
        $('.weather-container').append(newHTML);
    }
}
let renderer = new Renderer()