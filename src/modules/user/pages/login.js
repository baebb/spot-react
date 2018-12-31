// NPM Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col, Row } from 'antd';

// Image Dependencies
import sevenupspot from 'public/img/test/7upspot.gif';
import contruction from 'public/img/test/construction.gif';
import H from 'public/img/test/H.gif';
import I from 'public/img/test/I.gif';
import newFriends from 'public/img/test/newFriends.gif';

class LoginPage extends Component {
    static propTypes = {};

    render() {
        return (
            <Row type="flex" justify="center" style={{ marginTop: '30px' }}>
                <Col span={20} sm={8}>
                    <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                        <img alt="contruction" src={contruction} className="img-responsive" />
                    </div>
                    <div className="well" style={{ textAlign: 'center' }}>
                        <h1>
                            <font color="#FF0000">W</font>
                            <font color="#FF5A00">e</font>
                            <font color="#FFB400">l</font>
                            <font color="#FFff00">c</font>
                            <font color="#A5ff00">o</font>
                            <font color="#4Bff00">m</font>
                            <font color="#00ffB4">e</font>
                        </h1>
                        <h2>
                            <img alt="7upspot" src={sevenupspot} />
                            &nbsp;
                            to the
                            &nbsp;
                            <img alt="7upspot" src={sevenupspot} />
                        </h2>
                        <h1>
                            <blink>
                                <font color="#00ffff">H</font>
                                <font color="#00B4ff">o</font>
                                <font color="#005Aff">m</font>
                                <font color="#0000ff">e</font>
                                <font color="#4B00ff">p</font>
                                <font color="#A500ff">a</font>
                                <font color="#FF00ff">g</font>
                                <font color="#FF00B4">e</font>
                            </blink>
                        </h1>
                    </div>
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <img alt="H" src={H} />
                        <img alt="I" src={I} />
                        &nbsp;
                        &nbsp;
                        <img alt="new friends" src={newFriends} />
                    </div>
                    <form className="well" style={{ textAlign: 'center' }}>

                        <div>
                            <input type="text" className="input-large" />
                        </div>
                        <button type="submit" className="btn">Enter</button>
                    </form>
                </Col>
            </Row>
        );
    }
}

export default connect()(LoginPage);
