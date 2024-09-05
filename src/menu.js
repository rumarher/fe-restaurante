import { get_menu, set_menu_order} from './menu_service'
import React, { useEffect, useState } from "react"
import {useItemsContext} from './items_context'

export const Menu = () => {
    const [menu_data, set_menu_data] = useState (null)
    const {items, setItems} = useItemsContext()

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const data = await get_menu()
		data.json().then( (dataPr) => {
		    set_menu_data(dataPr)
		})

            } catch (error) {
		
                console.error("Error fetching menu data:", error);
            }
        };

        fetchMenuData();
    }, []);

    const addItem = (theItem) =>
	  {
	      setItems([...items, theItem])
	  }

    return (
        <div>
            {menu_data ? (
                menu_data.map((item, index) => {
		    return <div key={item.name}>{item.name}: {item.price} <button onClick={() => addItem(item)}>+</button></div> 
		})
		
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
    //useEffect (() => {foo()}, [])

    //return (<div></div>)
}
