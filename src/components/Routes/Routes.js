import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NotFound from '../NotFound/NotFound';
import ShoeListContainer from '../ShoeListContainer/ShoeListContainer';
import ShoeInfo from '../ShoeInfo/ShoeInfo';

const Routes = (props) => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" render={() => (<ShoeListContainer shoes={ props.visibleShoes } />)} />
                <Route exact path="/shoe/:shoeId" render={(match) => (<ShoeInfo getShoes={ props.getShoes } {...match}/>)} />
            </div>
        </BrowserRouter>
    )
}

export default Routes;