import React, { useState, useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

//style
const ButtonWrapper = styled.div`
    margin-top: 10px;
    justify-content: center;
    display: flex;
`
const LoginButton = styled(Button)`
    width: inherit;
`
const SignupButton = styled(Button)`
    width: inherit;
`
const FormWrapper = styled(Form)`

`
const LoginForm = ({ setIsLoggedIn }) => {

    const [id, onChangeId] = useInput('')
    const [password, onChangePassword] = useInput('')
   
    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        setIsLoggedIn(true);
    }, [id, password])

    return (
        <>
            <FormWrapper onFinish={onSubmitForm}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br />
                    <Input
                     placeholder="e-mail"
                     name="user-id"
                     value={id}
                     type='id'
                     onChange={onChangeId}
                     required/>
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <Input.Password
                     placeholder="password"
                     name="user-password"
                     type="password"
                     value={password}
                     onChange={onChangePassword}
                     required></Input.Password>
                </div>
                <ButtonWrapper>
                    <LoginButton
                     type="primary"
                     htmlType="submit"
                     loading={false}>로그인</LoginButton>
                     <Link href="/signup"><a><SignupButton>회원가입</SignupButton></a></Link>
                </ButtonWrapper>
            </FormWrapper>
        </>
    );
}

LoginForm.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired
}

export default LoginForm;