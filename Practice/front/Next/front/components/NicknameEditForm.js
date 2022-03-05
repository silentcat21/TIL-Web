import React from 'react';
import {Form, Input} from 'antd';
import styled from 'styled-components';

//style
const NickFormWarpper = styled(Form)`
    margin-bottom: 20px;
    border: 1px solid #d9d9d9;
    padding: 10px;
`

const NicknameEditForm = () => {


    return (
        <>
            <NickFormWarpper>
                <Input.Search addonBefore="닉네임" enterButton="수정" />
            </NickFormWarpper>
        </>
    );
}

export default NicknameEditForm;