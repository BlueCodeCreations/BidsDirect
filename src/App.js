import React from 'react';
import ForConsumers from './pages/ForConsumers';
import ForContractors from './pages/ForContractors';
import LandingPage from './pages/LandingPage';
import LoggedInConsumer from './pages/LoggedInConsumer';
import LoggedInContractor from './pages/LoggedInContractor';
import { useAuth0 } from '@auth0/auth0-react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
    const { isAuthenticated, isLoading, user } = useAuth0();

    //TODO: REFACTOR THESE IF STATEMENTS
    if (isLoading) {
        return <div>loading 123...</div>;
    }
    if (!isAuthenticated) {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={LandingPage}></Route>
                    <Route
                        exact
                        path="/ForConsumers"
                        component={ForConsumers}
                    ></Route>
                    <Route
                        exact
                        path="/ForContractors"
                        component={ForContractors}
                    ></Route>
                </Switch>
            </Router>
        );
    }
    if (
        isAuthenticated &&
        user &&
        user['https://bidsdirect.com/roles'] === 'Consumer'
    ) {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <LoggedInConsumer user={user} />
                    </Route>
                    <Route exact path="/FindContractors">
                        <div>secured page. add info about contractors</div>
                    </Route>
                    <Route exact path="/CurrentProjects">
                        <div>secured page. add info about projects</div>
                    </Route>
                </Switch>
            </Router>
        );
    }
    if (
        isAuthenticated &&
        user &&
        user['https://bidsdirect.com/roles'] === 'Contractor'
    ) {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <LoggedInContractor />
                    </Route>
                </Switch>
            </Router>
        );
    }
};

export default App;
