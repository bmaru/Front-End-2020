import React, {useEffect, useState} from 'react';
import PromotionCard from 'components/Promotion/Card/Card';
import axios from 'axios';

const PagesPromotionSearch = () => {
  
    const [promotions, setPromotions] = useState([]);

    useEffect (() => {
        axios.get('http://localhost:5000/promotions?_embed=comments')
        .then((response) => {
            setPromotions(response.data);
        });
    },[]);

    return (
        <div className="pages-promotion-search__promotion-card">
            {promotions.map((promotion) => (
                <PromotionCard promotion={promotion} key={promotion.id}/>
            ))}
        </div>
    );
}

export default PagesPromotionSearch;