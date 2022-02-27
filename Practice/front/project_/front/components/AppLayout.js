import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Link from 'next/link'; //링크 설정, 라우터
import { Input, Menu, Row, Col } from 'antd';
import styled from 'styled-components';

import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm";

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`

const AppLayout = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>Fitdoc</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={ 8 }>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    { children }
                </Col>
                <Col xs={24} md={6}>
                    <a href="http://naver.com" target="_blank" rel="noreferrer noopener" style={{ color: 'black' }}>naver</a>
                </Col>
            </Row>
        </div>
    );
};

//프로타입스(유효성) 검사해주는 패키지
AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;