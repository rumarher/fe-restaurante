import '../servicios/menu_services'

import React, { useEffect, useState } from "react"

export const Menu = () => {

    const [menu_data, set_menu_data] = useState ()

    useEffect (() => {get_menu()}, [])
}
