import React from 'react';
import { Route, Switch } from 'react-router-dom';

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
                        {...routeParams}/>
                    )} 
                />
                <Route component={ NotFound } />
            </Switch>
        </div>
    )
}

export default Routes;