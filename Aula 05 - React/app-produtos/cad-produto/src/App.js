import React from 'react';
import PromotionCard from 'components/Promotion/Card/Card';

const App = () => {
  const promotion = {
    "id": 1,
    "title": "Tênis Nike Air Max",
    "price": 799,
    "imageUrl": "https://images.lojanike.com.br/700x700/produto/208428_2013329_20200317154053.jpg",
    "url": "https://www.nike.com.br/Produto/Tenis-Nike-Air-Max-90-SP-Feminino/1-26-28-208443?gridPosition=A2",
    "comments": [
      {
        "id": 1,
        "comment": "O Nike Air Max 90 permanece fiel às suas raízes OG com o solado Waffle icônico, camadas costuradas e detalhes em TPU clássicos. Cores atuais proporcionam um visual moderno, enquanto o amortecimento Air Max acrescenta conforto à sua jornada."
      }
      ],
  };
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <PromotionCard promotion={promotion}/>
    </div>
  );
}

export default App;
