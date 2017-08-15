import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Basket from '../Basket/Basket';
import NotFound from '../NotFound/NotFound';
import ShoeListContainer from '../ShoeListContainer/ShoeListContainer';
import ShoeInfo from '../ShoeInfo/ShoeInfo';

const Routes = (props) => {
    return (
        <div>
            <Switch>
                <Route exact path="/" render={() => (
                    <ShoeListContainer 
                        visibleShoes={ props.visibleShoes } 
                        setVisibleShoes={props.setVisibleShoes} />
                    )} 
                />
                <Route exact path="/shoe/:shoeId" render={(routeParams) => (
                    <ShoeInfo 
                        getShoes={ props.getShoes }
                        addToBasket={ props.addToBasket }
                        {...routeParams}/>
                    )} 
                />
                <Route exact path="/basket" render={() => (
                    <Basket
                        basket={ props.basket }
                        getShoes={ props.getShoes }
                        removeFromBasket={ props.removeFromBasket } />
                    )}
                />
                <Route component={ NotFound } />
            </Switch>
        </div>
    )
}

Routes.PropTypes = {
    basket: PropTypes.object.isRequired,
    visibleShoes: PropTypes.object.isRequired,
    setVisibleShoes: PropTypes.func.isRequired,
    getShoes: PropTypes.func.isRequired,
    addToBasket: PropTypes.object.isRequired,
    removeFromBasket: PropTypes.func.isRequired
}

export default Routes;