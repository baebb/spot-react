// NPM Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col, Row } from 'antd';

// Image Dependencies
import sevenupspot from 'public/img/test/7upspot.gif';
// import H from 'public/img/test/H.gif';
// import I from 'public/img/test/I.gif';
// import newFriends from 'public/img/test/newFriends.gif';

class LoginPage extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);

        this.state = {
            username: ''
        };
    }

    onChange = (e) => {
        const { value } = e.target;

        this.setState({
            username: value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { username } = this.state;

        console.log('username', username);
    };

    render() {
        const { username } = this.state;

        return (
            <Row type="flex" justify="center" style={{ height: '100%' }}>
                <Col span={20} sm={8} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div
                        className="well"
                        style={{
                            textAlign: 'center',
                            marginTop: '-60px',
                            paddingTop: '40px',
                            paddingBottom: '40px'
                        }}
                    >
                        <h1 style={{ marginBottom: '40px' }}>
                            <img alt="7upspot" src={sevenupspot} />
                            &nbsp;
                            <font color="#FF0000">W</font>
                            <font color="#FF5A00">e</font>
                            <font color="#FFB400">l</font>
                            <font color="#FFff00">c</font>
                            <font color="#A5ff00">o</font>
                            <font color="#4Bff00">m</font>
                            <font color="#00ffB4">e</font>
                            &nbsp;
                            <img alt="7upspot" src={sevenupspot} />
                        </h1>
                        <Row type="flex" justify="center">
                            <Col span={20} sm={10}>
                                <form className="form-vertical" onSubmit={this.onSubmit}>
                                    <p style={{ marginBottom: '30px', fontSize: '18px' }}>
                                        To join, enter username:
                                    </p>
                                    <div className="control-group" style={{ marginBottom: '20px' }}>
                                        <div className="controls">
                                            <input
                                                type="text"
                                                className="input"
                                                value={username}
                                                onChange={this.onChange}
                                                style={{
                                                    height: '50px',
                                                    width: '100%',
                                                    fontSize: '20px',
                                                    color: 'red'
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn" style={{ width: '100%' }}>Join</button>
                                </form>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default connect()(LoginPage);
