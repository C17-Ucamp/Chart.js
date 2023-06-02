import {render} from './info.js'

const getApi = async() =>{
    const response = await fetch(`https://api.waqi.info/feed/here/?token=${API_PASSWORD}`)

    const {data} =  await response.json()
    console.log(data)

    const datos = data.city 
    console.log("ciudad",datos)
     render(datos)

    const dia = data.forecast.daily.o3.map((x)=> x.day)
    day = dia


    const max = data.forecast.daily.o3.map((x)=> x.max)
    o3 = max

}


export let day = []
export let o3 = []

export default getApi



