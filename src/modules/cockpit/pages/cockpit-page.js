// NPM Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CockpitPage extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //
    //     };
    // }

    render() {
        return (
            <div>
                cockpit page
            </div>
        );
    }
}

export default connect()(CockpitPage);
