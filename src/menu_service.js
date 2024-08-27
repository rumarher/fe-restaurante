import axios from "axios"



export const get_menu = async () =>
{
    
    try {
	var result_menu = ""
	const url = `http://localhost:3000/menu`

	return (fetch(url))

    }
    catch(error)
    {
	console.error("Error al obtener el menu: ", error)
    }
}

export const set_menu_order = async (theItem) =>
{
    try {
	const url = `http://localhost:3000/to-order`
	fetch(url, {
	    method: 'POST',
	    headers: {
		"Content-Type": "application/json"
	    },
	    body:
	    `{"${theItem}": 1}`
	    
	})
    }
    catch(error)
    {
	console.error("Error al realizar una comanda: ", error)
    }
}
