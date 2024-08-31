import { foo, get_menu, set_menu_order} from './menu_service'

import React, { useEffect, useState } from "react"




export const Menu = () => {

    const [menu_data, set_menu_data] = useState (null)

    //const [menu_order, set_menu_order] = useState (null)

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const data = await get_menu(); // Assuming foo returns a promise

		data.json().then( (dataPr) => {
		    set_menu_data(dataPr)
		    //console.log("que es: ", dataPr);
		})
		
                //set_menu_data(data);

            } catch (error) {
                console.error("Error fetching menu data:", error);
            }
        };

        fetchMenuData();
    }, []);

    const addItem = (theItem) =>
	  {
	      console.log("Intento de hacer una comanda")
	      set_menu_order(theItem)
	  }

    return (
        <div>
            {/* Render your menu data here */}
            {menu_data ? (
                menu_data.map((item, index) => {
		    return <div key={item.name}>{item.name}: {item.price} <button onClick={() => addItem(item.name)}>+</button></div> 
		})
		
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
    //useEffect (() => {foo()}, [])

    //return (<div></div>)
}
