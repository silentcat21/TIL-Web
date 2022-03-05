import React, { useCallback, useState } from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import {Form, Input, Checkbox} from 'antd';
import useInput from '../hooks/useInput';
import styled from 'styled-components';

//style
const ErrorMessage = styled.div`
    color: red;
`;
const CollectMessage = styled.div`
    color: blue;
`;

const TermError = styled.div`
    color: red;
`;

const Signup = () => {

    const [id,onChangeId] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');

    const [passwordError, setPasswordError] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [password])

    const [termError, setTermError] = useState(true)
    const [term, setTerm] = useState('');
    const onChangeTerm = useCallback((e) => {
        setTerm(e.targe.checked);
        setTermError(false)
    },[])

    
    const onSubmit = useCallback(() => {

    },[]);

    return (
        <>
            <AppLayout>
                <Head>
                    <title>SNS Portfolio | 회원가입</title>
                </Head>
                <Form onFinish={onSubmit}>
                    <div>
                        <label htmlFor="user-id">아이디</label>
                        <br />
                        <Input name="user-id" value={id} required onChange={onChangeId} />
                    </div>
                    <div>
                        <label htmlFor="user-nick">닉네임</label>
                        <br />
                        <Input name="user-nick" value={nickname} required onChange={onChangeNickname} />
                    </div>
                    <div>
                        <label htmlFor="user-password">패스워드</label>
                        <br />
                        <Input
                         name="user-password"
                         type="password"
                         value={password}
                         required onChange={onChangePassword}
                        />
                    </div>
                    <div>
                        <label htmlFor="user-password-check">패스워드 확인</label>
                        <br />
                        <Input
                         name="user-password-check"
                         type="password"
                         value={passwordCheck}
                         required
                         onChange={onChangePasswordCheck}
                        />
                        {passwordError
                        ? <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
                        : <CollectMessage>확인</CollectMessage> }
                    </div>
                    <Checkbox name="user-certify" checked={term} onChage={onChangeTerm}></Checkbox>
                    {termError && <TermError>약관에 동의하셔야 합니다.</TermError>}
                </Form>
            </AppLayout>
        </>
    );
}

export default Signup;