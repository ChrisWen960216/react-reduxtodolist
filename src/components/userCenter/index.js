import React, { Component } from 'react';
import { Col, Row, Button, Modal } from 'antd';

export default class UserCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibile: false
        }
        this.quitLogIn = this.props.quitLogIn.bind(this);
        this.showModal = this.showModal.bind(this);
    }

    showModal() {
        this.setState({
            visibile: !this.state.visibile
        })
    }
    render() {
        return (
            <Row className='header-row'>
              <Col span={ 7 }></Col>
              <Col span={ 10 }>
              <Button className='quit-button' ghost onClick={ this.quitLogIn }>
                退出登录
              </Button>
              <Button className='user-button' type='dashed' ghost onClick={ this.showModal }>
                欢迎！
                { this.props.user.userName }
              </Button>
              </Col>
              <Col span={ 7 }></Col>
              <Modal title='软件说明' visible={ this.state.visibile } onCancel={ this.showModal } footer={ null }>
                <span className='user-intro'>
                                                                                            <h2>React-redux TodoList Created By ChrisWen</h2>
                                                                                            <h2>Version:2.0</h2>
                                                                                            <h3>V1.0的彻底重构版，加入大量新的功能，使用了新的技术栈和UI界面，这个APP将作为我的一个作品放在个人（未来的）网站上</h3>
                                                                                            <h3>即使周围暗礁密布，纵然前方惊涛骇浪，吾之所向，依旧是星辰大海！</h3>
                                                                                        </span>
              </Modal>
            </Row>

        )
    }
}