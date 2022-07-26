import './App.css';

import Mensaje from './Mensaje.js';
const Description = () => {
  return "Hacemos un complemento"
}
const App = () => {
  
  return (
    <div className="App">
      <Mensaje color="green" message="Usamos React"/>
      <Mensaje color="red" message="Para Crear una Bonita"/>
      <Mensaje color="blue" message="Página Web"/>
      <Description />
    </div>
  )
}

export default App;

