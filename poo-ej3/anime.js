export default class Anime {

    constructor () {}

    async obtenerCatalogo()
    {

       const datos = await fetch("https://api.jikan.moe/v3/search/anime?q=Naruto")
        
       //especificamos que los datos estan llegando en formato JSON
       const datos_convertidos = await datos.json()

       const datos_definitivos =  datos_convertidos.results

       datos_definitivos.forEach(element => {
            
        console.log(element.image_url)

       });
        
    }
}