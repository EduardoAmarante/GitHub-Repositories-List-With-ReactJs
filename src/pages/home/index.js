import React, {useState} from 'react';
import axios from 'axios';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';

function App(props) {

  const history = useNavigate();


  function handlePesquisa(){
    console.log(usuario)
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => repositoriesName.push(repository.name));
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      history('/repositories');
      });
    
  }

  const [usuario, setUsuario] = useState('');
  return (

    <S.Container>
      <S.Input name="usuario" id="usuario" value={usuario} className="usuarioInput" placeholder="Nome Usuario" onChange={e=>setUsuario(e.target.value)}/>
      <S.Button type='button' onClick={handlePesquisa}>Pesquisar</S.Button>
    </S.Container>
  );
}

export default App;
