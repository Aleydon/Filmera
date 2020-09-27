import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from '../Styles/styled';
import HomePage from '../Components/Home';
import HeaderComponent from '../Components/Header';
import NotFound from '../Components/NotFound';





const Routes = () => {
    return(
        <>
            <BrowserRouter>
                <HeaderComponent />
                <Container>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Container>
            </BrowserRouter>
        </>
    );
}

export default Routes;