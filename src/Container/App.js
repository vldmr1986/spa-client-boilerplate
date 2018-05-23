/* eslint-disable */
/* eslint react/prop-types: 0 */
import React from 'react'; // eslint-disable-line
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Cool from './../Components/Cool';


const About = () => (<div> <h1>About</h1> </div>);


const App = props => (
    <Router>
        <Switch>
            <Route exact path='/' component={Cool} />
            <Route path='/about' component={About} />
        </Switch>
    </Router>
);

App.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

// export default App;

export default hot(module)(App); // replacement work wo full reload page
