import { useContext, createContext, useState } from 'react';
// Crear el contexto
const ItemsContext = createContext (null)

// Componente que provee el valor del contexto
export function ItemsProvider({ children }) {
    const [items, setItems] = useState([]);

    return (
	<ItemsContext.Provider value={{ items, setItems }}>	  
	    {children}
	</ItemsContext.Provider>
    );
}

export const useItemsContext = () => {
    const context = useContext(ItemsContext)
    if (!context)
    {
	console.log("Contexto no existe")
    }

    return context
}
