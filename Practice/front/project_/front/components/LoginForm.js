import React, { useCallback, useState, useMemo } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;

const LoginForm = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);
    //useCallback은 함수 useMemo는 값 리렌더링 인라인 스타일링 최적화
    const style = useMemo(() => {{marginTop: 10}}, []);

    return (
        <Form>
            <div>
                <laber htmlFor="user-id">아이디</laber>
                <br />
                <Input name="user-id" value={ id } onChange= { onChangeId } required placeholder="아이디" />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input name="user-password" value= { password } onChange= { onChangePassword } required />
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </Form>
    );
}

export default LoginForm;