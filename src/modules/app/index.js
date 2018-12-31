// NPM Dependencies
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// Modude Dependencies
import LoginPage from 'modules/user/pages/login';

// Local Dependencies
import './core.styles.scss';
import RouterMap from './router';

const { NODE_ENV } = process.env;

const App = ({ authenticated }) => (
    <Fragment>
        {authenticated ?
            <Router>
                <RouterMap />
            </Router>
            :
            <LoginPage />
        }
        <p>{NODE_ENV}</p>
    </Fragment>
);

App.propTypes = {
    authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        authenticated: state.user.authenticated
    };
};

export default connect(mapStateToProps)(App);
