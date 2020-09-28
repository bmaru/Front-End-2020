import React from 'react';
import {useParams} from 'react-router-dom';

const PagesPromotionForm = () => {
    const {id} = useParams();

    return (
        <div>
            Formulário genérico...
            {id && <div>id: {id}</div>}
        </div>
    );
}

export default PagesPromotionForm;