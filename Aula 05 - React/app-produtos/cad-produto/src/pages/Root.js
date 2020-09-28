import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PagesPromotionForm from "./Promotion/Form/Form";
import PagesPromotionImage from './Promotion/Image/Image';
import PagesPromotionSearch from "./Promotion/Search/Search";

const Root = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={PagesPromotionSearch} exact/>
                <Route path="/create" component={PagesPromotionForm}/>
                <Route path="/edit/:id" component={PagesPromotionForm}/>
                <Route path="/image" component={PagesPromotionImage}/>
            </Switch>
        </Router>
    );
};

export default Root;