// NPM Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// UI Dependencies
import { Row, Col } from 'antd';

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
import ArrowButton from '../components/arrow-button';

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

    controlTouchStart = ({ control }) => {
        const {
            leftKeyDown, rightKeyDown, upKeyDown, downKeyDown
        } = this.props;

        console.log(`${control} start`);

        switch (control) {
            case 'left':
                return leftKeyDown();
            case 'right':
                return rightKeyDown();
            case 'up':
                return upKeyDown();
            case 'down':
                return downKeyDown();
            default:
                return null;
        }
    };

    controlTouchEnd = ({ control }) => {
        const {
            leftKeyUp, rightKeyUp, upKeyUp, downKeyUp
        } = this.props;

        console.log(`${control} end`);

        switch (control) {
            case 'left':
                return leftKeyUp();
            case 'right':
                return rightKeyUp();
            case 'up':
                return upKeyUp();
            case 'down':
                return downKeyUp();
            default:
                return null;
        }
    };

    render() {
        return (
            <div>
                cockpit page
                <Row type="flex" justify="space-between" align="bottom">
                    <Col span={8}>
                        <ArrowButton
                            control="down"
                            onTouchStart={this.controlTouchStart}
                            onTouchEnd={this.controlTouchEnd}
                        />
                    </Col>
                    <Col span={8}>
                        <ArrowButton
                            control="up"
                            onTouchStart={this.controlTouchStart}
                            onTouchEnd={this.controlTouchEnd}
                        />
                        <br />
                        <ArrowButton
                            control="down"
                            onTouchStart={this.controlTouchStart}
                            onTouchEnd={this.controlTouchEnd}
                        />
                    </Col>
                    <Col span={8}>
                        <ArrowButton
                            control="right"
                            onTouchStart={this.controlTouchStart}
                            onTouchEnd={this.controlTouchEnd}
                        />
                    </Col>
                </Row>
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
