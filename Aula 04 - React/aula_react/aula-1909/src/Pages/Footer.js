import React from 'react';

function Footer(props) {
    return (
        <footer>
            <p>{props.contato}</p>
            <p>{props.copy}</p>
        </footer>
    );
}

export default Footer;