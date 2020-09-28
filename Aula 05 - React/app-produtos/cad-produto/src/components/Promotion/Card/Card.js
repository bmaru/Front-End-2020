import React from 'react';
import './Card.css';
import 'bootstrap/dist/css/bootstrap.css';

const PromotionCard = ({ promotion }) => (
<div class="container p-3">
    <div class="card w-50">
        <img src={ promotion.imageUrl} class="card-img-top" alt={ promotion.title}/>
        <div class="card-body">
            <h4 class="display-4">{ promotion.title}</h4>
            <h5><strong class="card-subtitle mb-2">R$ { promotion.price}</strong></h5>            
            <a href={promotion.url} class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Comprar</a>
        </div> 
        <footer class="card-footer bg-light">
            { promotion.comments.length > 0 && (
                <div class="text mb-2">
                    { promotion.comments[0].comment}
                </div>
            )}
            <div class="text-muted">
                { promotion.comments.length}{" "}
                { promotion.comments.length > 1 ? 'Comentários' : "Avaliação"}
            </div>  
        </footer>       
    </div>
</div>
);

export default PromotionCard;