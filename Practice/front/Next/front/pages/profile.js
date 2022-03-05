import Head from 'next/head';
import React from 'react';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowerList from '../components/FollowerList';
import FollowingList from '../components/FollowingList';

const Profile = () => {

    const followingList = [{ nickname: '최상민'}, { nickname: '상민'}, { nickname: 'Sangmin'}];
    const followerList = [{ nickname: '최상민'}, { nickname: '상민'}, { nickname: 'Sangmin'}];

    return (
        <>
            <Head>
                <title>SNS Portfolio | 프로필</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowingList header="팔로윙 목록" data={followingList}/>
                <FollowerList header="팔로워 목록" data={followerList} />
            </AppLayout>
        </>
    );
}

export default Profile;