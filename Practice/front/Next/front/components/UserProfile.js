import React, { useCallback } from 'react';
import {Button, Card} from 'antd';
import Avatar from 'antd/lib/avatar/avatar';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers';

//style

const UserProfile = () => {
    const dispatch = useDispatch();

    const onLogOut = useCallback(() => {
        dispatch(logoutAction());
    }, [])

    return (
        <>
            <Card 
             actions={[
                <div key="twit">게시글</div>,
                <div key="following">팔로잉</div>,
                <div key="follower">팔로워</div>,
             ]}>
                <Card.Meta
                 avatar={<Avatar>Sm</Avatar>}
                 title="Sangmin" />
                <Button onClick={onLogOut}>로그아웃</Button>
            </Card>
        </>
    );
}

UserProfile.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired
}

export default UserProfile;
