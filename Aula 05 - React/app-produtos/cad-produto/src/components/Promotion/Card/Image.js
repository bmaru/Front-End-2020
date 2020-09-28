import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Image.css'; 

const PromotionCardImage = ({ promotion }) => (

<div class="container">
    <div class="row">
        <div class="col">
            <div class="card">
                <img src={promotion.download_url} class="card-img-top" alt={ promotion.title}/>
                <div class="card-body">
                    <h5 class="card-text">{promotion.author}</h5>            
                    <a href={promotion.download_url} class="btn btn-light" target="_blank" rel="noopener noreferrer">Download Image</a>
                </div> 
            </div>
        </div>  
    </div>
</div>
);

export default PromotionCardImage;