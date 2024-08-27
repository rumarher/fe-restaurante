import logo from './logo.svg';

import {Menu} from './menu'
import {Listado_comandas} from './listado_comandas'
import {ItemsProvider} from './items_context'
import './App.css';

function App() {
    return (
	    <div className="App">
	    <header className="App-header">
	    <ItemsProvider>
            <Menu/>
	    <Listado_comandas/>
	    </ItemsProvider>
	    </header>
	    </div>
    );
}

export default App;
