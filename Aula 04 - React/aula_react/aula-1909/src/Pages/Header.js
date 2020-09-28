import React from 'react';

function Header(props) {
    return (
        <header>
            <h1>{props.titulo}</h1>
            <p>{props.descricao}</p>
        </header>
    );
}

export default Header;