import {  get_menu, set_menu_order, theItems} from './menu_service'
import {useItemsContext} from './items_context'
import React, { useEffect, useState } from "react"

export const Listado_comandas = () => {
    const [item_list, set_item_list] = useState([])
    const {items, setItems} = useItemsContext()

    const [groupedItems_list, set_groupedItems_list] = useState([])

    let idsList = []
    
    useEffect(() => {
	console.log("Dentro de listado_comandos useEffect")
	console.log(items)
	set_groupedItems_list(Object.groupBy(items, item => item.id))
    }, [items]);

    const removeItem = (theindex) =>
	  {
	      items.splice(theindex, 1)
	      setItems([...items])
	  }

    console.log("Elementos agrupados a mostrar: ", groupedItems_list)
    return (

	<div>
	    <ul>
		{
		    Object.keys(groupedItems_list).map((itemId) =>
			{
			    return <li key={itemId}>{
				groupedItems_list[itemId][0].name + " X " + groupedItems_list[itemId].length
			    }</li>
			})}
	    </ul>
	</div>
    )
}
