import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Pricing from './components/Pricing';
import Landing from './components/Landing';

const App = () => {
    return (
        <div>
            <StylesProvider generateClassName={createGenerateClassName({
                productionPrefix: 'ma'
            })}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing} />
                        <Route exact path="/" component={Landing} />
                    </Switch>
                </BrowserRouter>
            </StylesProvider>
        </div>
    )
}

export default App;
