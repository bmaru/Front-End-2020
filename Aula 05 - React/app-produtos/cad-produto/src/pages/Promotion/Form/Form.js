import React from 'react';
import {useParams} from 'react-router-dom';
import PromotionForm from 'components/Promotion/Card/Form'

const PagesPromotionForm = () => {
    const {id} = useParams();

    return (
        <div>
            <PromotionForm id={id ? Number.parseInt(id, 10) : null}/>
            {id && <div>id: {id}</div>}
        </div>
    );
}

export default PagesPromotionForm;