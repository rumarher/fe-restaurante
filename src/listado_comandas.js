import {useItemsContext} from './items_context'
import {set_menu_order} from './menu_service'
import React, { useEffect, useState } from "react"

export const Listado_comandas = () => {
    const {items, setItems} = useItemsContext()
    const [groupedItems_list, set_groupedItems_list] = useState([])

    
    useEffect(() => {
	set_groupedItems_list(Object.groupBy(items, item => item.id))
    }, [items]);

    const removeItem = (theItem) =>
	{
	    const i = items.indexOf(theItem)
	    if (i !== -1)
		{
		    items.splice(i, 1)
		}

	    setItems([...items])
	}

    const clearItems = () =>
	{
	    setItems([])
	}
    
    let isEmpty_groupedItems_list = Object.keys(groupedItems_list).length === 0
    console.log("Elementos agrupados a mostrar: ", groupedItems_list)
    return (
	<div>
	    <ul>
    {

	Object.keys(groupedItems_list).map((itemId) =>
	    {
		return <li key={itemId}>{
		    groupedItems_list[itemId][0].name + " X " + groupedItems_list[itemId].length 
		}<button onClick={()=>removeItem(groupedItems_list[itemId][0])}>-</button>
				   </li>
	    }
	)
    }
	    </ul>


	    
	    <button disabled={isEmpty_groupedItems_list}
    onClick={()=>set_menu_order(items)}>Realizar el pedido</button>
	    <button disabled={isEmpty_groupedItems_list}
    onClick={()=>clearItems()}>Limpiar</button>
		
	    
	</div>
    )
}
