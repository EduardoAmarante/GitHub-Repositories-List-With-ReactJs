import './App.css';
import React, {useState } from 'react';
import axios from 'axios';

function App(props) {

  function handlePesquisa(){
    console.log(usuario)
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
  }

  const [usuario, setUsuario] = useState('');
  return (

    <div className="App">
      {/* <h1>{usuario}</h1> */}
      <h1>{usuario}</h1>
      <input name="usuario" id="usuario" value={usuario} className="usuarioInput" placeholder="Nome Usuario" onChange={e=>setUsuario(e.target.value)}/>
      <button type='button' >Pesquisar</button>
    </div>
  );
}

export default App;
