// NPM Dependencies
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import KeyboardEventHandler from 'react-keyboard-event-handler';


// UI Dependencies
import { Row, Col } from 'antd';

// Local Dependencies
import { sendControlSignal } from '../actions';
import ArrowButton from '../components/arrow-button';

class CockpitPage extends Component {
    static propTypes = {
        sendControl: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            sendingControl: false
        };
    }

    controlTouchStart = (control) => {
        const { sendingControl } = this.state;
        const { sendControl } = this.props;

        if (!sendingControl) {
            sendControl({ control });

            this.setState({
                sendingControl: true
            });
        }
    };

    controlTouchEnd = () => {
        const { sendControl } = this.props;

        sendControl({ control: 'stop' });
        this.setState({
            sendingControl: false
        });
    };

    render() {
        const { sendingControl } = this.state;

        return (
            <Fragment>
                <KeyboardEventHandler
                    handleKeys={['up', 'down', 'left', 'right']}
                    handleEventType="keydown"
                    isDisabled={sendingControl}
                    onKeyEvent={this.controlTouchStart}
                />
                <KeyboardEventHandler
                    handleKeys={['up', 'down', 'left', 'right']}
                    handleEventType="keyup"
                    onKeyEvent={this.controlTouchEnd}
                />
                <Row type="flex" justify="center">
                    <Col span={20} sm={6}>
                        <div style={{ textAlign: 'center' }}>
                            <img alt="cam" src="http://153.182.124.165:3030/" className="img-responsive" />
                        </div>
                        <Row type="flex" justify="space-between" align="bottom">
                            <Col span={8}>
                                <ArrowButton
                                    control="left"
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
                        <div style={{ textAlign: 'center', marginTop: '20px' }} className="hide-mobile">
                            <p>Use your keyboard arrows to control</p>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '20px' }} className="hide-desktop">
                            <p>Touch and hold arrows to control</p>
                        </div>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        sendControl: sendControlSignal.request
    }, dispatch);

export default connect(null, mapDispatchToProps)(CockpitPage);
