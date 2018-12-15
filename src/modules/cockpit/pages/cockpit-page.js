// NPM Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

    controlTouchStart = ({ control }) => {
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
        return (
            <Row type="flex" justify="center">
                <Col span={6}>
                    <div>
                        cockpit page
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
                    </div>
                </Col>
            </Row>
        );
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        sendControl: sendControlSignal.request
    }, dispatch);

export default connect(null, mapDispatchToProps)(CockpitPage);
