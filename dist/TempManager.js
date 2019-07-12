class TempManager {
    constructor() {
        this.cityData = []
    }

    async getDataFromDB() {
        let x = await $.get('/cities')
            this.cityData = x

    }

    async getCityData(name) {
        let Data = this.cityData
        let resData = await $.get(`/city/:${name}`)
        const city = {
            name: resData.location.name,
            updatedAt: resData.current.last_updated,
            temperature: resData.current.temp_c,
            condition: resData.current.condition.text,
            conditionPic: resData.current.condition.icon,
            
        }
        Data.push(city)

    }

    saveCity(cityName) {
        let Data = this.cityData
        const city = Data.find(c => c.name = cityName)
        $.post('/city', city)
        alert('Save Succesfull!')
    }


    removeCity(cityName) {
        $.ajax({
            method: 'DELETE',
            url: `/city/${cityName}`,
            success: function () {
                alert('Deleted Succesfully!');
                location.reload()
            },
        
        })
    }
}

