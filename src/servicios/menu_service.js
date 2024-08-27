import axios from "axios"

export const get_menu = async () =>
{
    try {
	const url = "http://localhost:3000/menu"
	const response = axios.get(url)
	console.log("La respuesta del menú: ", response)
    }
    catch(error)
    {
	console.error("Error al obtener el menu: ", error)
    }
}
