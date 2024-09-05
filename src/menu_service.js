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

const counter = [].reduce((acc, theitem) =>
    {
	if (acc[theitem.name])
	    {
		acc[theitem.name]++
	    }
	else
	    {
		acc[theitem.name] = 1
	    }
	return acc	    
    }, {})

export const set_menu_order = async (items) =>
    {
	console.log("Aquí están los items: ", items)
    try {
	const url = `http://localhost:3000/to-order`
	fetch(url, {
	    method: 'POST',
	    headers: {
		"Content-Type": "application/json"
	    },
	    body: `${items}`
		//`{"${items}": 1}`
	    
	})
    }
    catch(error)
    {
	console.error("Error al realizar una comanda: ", error)
    }
}
