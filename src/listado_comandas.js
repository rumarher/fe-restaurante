import {  get_menu, set_menu_order, theItems} from './menu_service'
import {useItemsContext} from './items_context'
import React, { useEffect, useState } from "react"

export const Listado_comandas = () => {
    const [item_list, set_item_list] = useState([])
    const {items, setItems} = useItemsContext()

    useEffect(() => {
	console.log("Dentro de listado_comandos useEffect")
	console.log(items)
    }, [items]);

    const removeItem = (item) =>
	  {
	      const index = item.indexOf(item)
	      items.splice(index, 1)
	      setItems([...items])
	  }

    return (
	<div>
	    <ul>
		{items?.map((item) => {return (<li key={item}>{item} <button onClick={() => {removeItem(item)}}>-</button></li>) })}
	    </ul>
	</div>
    )
}
