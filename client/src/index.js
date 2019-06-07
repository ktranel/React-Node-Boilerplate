import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


/*Routes*/
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

/*Store setup*/
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './Reducers';

/*Components*/
import Login_Container from './Components/Login/Login_Container';

const store = createStore(reducers, applyMiddleware(thunk));

/*Add Routes and Components inside the app-container for them to be available. Any route with
* a plain <Route/> component will be public, while and <PrivateRoute/> component will require a
* user to log in.
*
* + + + + WARNING + + + +
* This is still the front end guys. Private routes are good for keeping users out of things they shouldn't
* see, but make no replacement for actual auth.
*/
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <div className={'app-container container-fluid'}>
                    <Route path={'/'} exact component={Login_Container}/>
                    <PrivateRoute path={'/home'}  render={()=><div>Private Route</div>}/>
                </div>
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
