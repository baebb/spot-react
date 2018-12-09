// NPM Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Local Dependencies
import {
    leftKeyDownSignal,
    leftKeyUpSignal,
    rightKeyDownSignal,
    rightKeyUpSignal,
    upKeyDownSignal,
    upKeyUpSignal,
    downKeyDownSignal,
    downKeyUpSignal
} from '../actions';

class CockpitPage extends Component {
    static propTypes = {
        leftKeyDown: PropTypes.func.isRequired,
        leftKeyUp: PropTypes.func.isRequired,
        rightKeyDown: PropTypes.func.isRequired,
        rightKeyUp: PropTypes.func.isRequired,
        upKeyDown: PropTypes.func.isRequired,
        upKeyUp: PropTypes.func.isRequired,
        downKeyDown: PropTypes.func.isRequired,
        downKeyUp: PropTypes.func.isRequired
    };

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

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        leftKeyDown: leftKeyDownSignal.request,
        leftKeyUp: leftKeyUpSignal.request,
        rightKeyDown: rightKeyDownSignal.request,
        rightKeyUp: rightKeyUpSignal.request,
        upKeyDown: upKeyDownSignal.request,
        upKeyUp: upKeyUpSignal.request,
        downKeyDown: downKeyDownSignal.request,
        downKeyUp: downKeyUpSignal.request
    }, dispatch);

export default connect(null, mapDispatchToProps)(CockpitPage);
