import React, {useEffect, useState} from 'react';
import PromotionCardImage from 'components/Promotion/Card/Image';
import axios from 'axios';
import './Image.css'; 

const PagesPromotionImage = () => {
  
    const [promotions, setPromotions] = useState([]);

    useEffect (() => {
        axios.get('https://picsum.photos/v2/list?page=1&limit=100')
        .then((response) => {
            setPromotions(response.data);
        });
    },[]);

    return (
        <div className="card-columns">
            {promotions.map((promotion) => (
                <PromotionCardImage promotion={promotion} key={promotion.id}/>
            ))}
        </div>
    );
}

export default PagesPromotionImage;