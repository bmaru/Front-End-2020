import React, {useEffect, useState} from 'react';
import Header from './Header';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './Form.css';

function Form() {

    const [estados, setEstados] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/estados')
        .then(response => {
            setEstados(response.data);
            //console.log(response.data);
        })
    })
    
    const [campos, setCampos] = useState(
        {txtNome: '',
            txtCPF: '',
            cmbUF: 0
        })

    function handleInputChange(event) {
        campos[event.target.name] = event.target.value;
        setCampos(campos);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:3002/cadastro', campos)
        .then(response => {
            alert(response.data.dados.length + 'registro!');
        })
        //console.log(campos);
    }

    return (
        <div className="Form">
            <Header titulo="Formulário de Cadastro"/>

            <form onSubmit={handleFormSubmit}>
                <fieldset>
                    <legend>
                        <h3>Dados</h3>
                    </legend>

                    <div class="form-group">
                        <label>Nome:</label>
                        <input type="text" class="form-control" name="txtNome" id="txtNome" onChange={handleInputChange}></input>
                    </div>

                    <div class="form-group">
                        <label>CPF:</label>
                        <input type="text" class="form-control" name="txtCPF" id="txtCPF" onChange={handleInputChange}></input>
                    </div>

                    <div class="form-group">
                        <label>Estado:</label>
                        <select class="form-control" name="cmbUF" id="cmbUF" onChange={handleInputChange}>
                            <option value="0">Selecione</option>
                            {estados.map(estado => (<option key={estado.id} value={estado.id}>{estado.uf}</option>))}
                        </select>
                    </div>

                    <input class="btn btn-dark" type="submit" value="Enviar"></input>
                
                </fieldset>
            </form>
        
        
        </div>
    );
}

export default Form;