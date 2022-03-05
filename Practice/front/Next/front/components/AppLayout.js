import React ,{ useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col, Carousel } from 'antd';
import styled from 'styled-components';
import {HomeOutlined, UserOutlined, UserAddOutlined} from '@ant-design/icons'


import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

//style
const RightCol = styled(Col)`
    font-family : sans-serif;
    font-weight : bold;
`;
const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`
const MenuStyle = styled(Menu)`
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
`
const ItemMenu = styled(Menu.Item)`
    font-size: 1.2rem;
`
const Layout = styled.div`
    margin: 0px 15px;
`

const AppLayout = ({ children }) => {
    const [current,setCurrent] = useState('')
    const [isLogedIn, setIsLoggedIn] = useState(false)
    const handleClick = (e) => {
        setCurrent(e.key)
    }
    
    return (
        <>
            <Layout>
                <MenuStyle mode="horizontal"
                style={{ overflow: 'visible'}}
                onClick={handleClick}
                selectedKeys={current}>
                    <ItemMenu key="home">
                        <Link href="/"><a><HomeOutlined /> 홈</a></Link>
                    </ItemMenu>  
                    <ItemMenu key="search">
                        <SearchInput placeholder="input search text" enterButton/>
                    </ItemMenu>                 
                    <ItemMenu key="profile">
                        <Link href="/profile"><a><UserOutlined /> 프로필</a></Link>
                    </ItemMenu>                   
                    <ItemMenu key="signup">
                        <Link href="/signup"><a><UserAddOutlined /> 회원가입</a></Link>
                    </ItemMenu>   
                </MenuStyle>
                <Row gutter={8}>
                    <Col xs={24} md={6} >
                        {isLogedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
                    </Col>
                    <Col xs={24} md={12} >
                        {children}
                    </Col>
                    <RightCol xs={24} md={6}>
                        <Carousel autoplay>
                            <div>
                                <a href="https://github.com/silentcat21"
                                target='_blank'
                                rel="noreferrer noopener">Go to Github-silentcat</a>
                            </div>
                            <div>
                                <a href="https://priceless-sinoussi-748198.netlify.app/"
                                target='_blank'
                                rel="noreferrer noopener">Go to UI/UX Components</a>
                            </div>

                        </Carousel>
                    </RightCol>
                </Row>
                
            </Layout>
        </>
    );
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;