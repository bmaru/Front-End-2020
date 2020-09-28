import React, {useState} from 'react';
import logo from '../logo.svg';
import './Home.css';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';

function Home() {

    const [contagem, setContagem] = useState(0);
    function alteracao() {
      setContagem(contagem+1);
    }

  return (
    <div className="Home">
      <header className="Home-header">
        <Header titulo="Bem Vindo ao React"/>
        <img src={logo} className="Home-logo" alt="logo" />
        <Header descricao="Texto descritivo..."/>
        
        <Link to="/formulario">Formulário de cadastro</Link>
        
        <input type="button" value="Clique" onClick={alteracao} />
        <p>Foram realizados {contagem} cliques!</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="Home-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <footer className="Home-footer">
        <Footer contato="Telefone 9999-000"/>
        <Footer copy="© React 2020"/>
      </footer>
    </div>
  );
}

export default Home;
