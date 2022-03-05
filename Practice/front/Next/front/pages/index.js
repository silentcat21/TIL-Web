import React from 'react';  //넥스트는 안써도 됨 pages폴더 안에 있는 파일들은 자동으로 읽힘
import AppLayout from '../components/AppLayout';

const Home = () => {
    return (
        <>
            <AppLayout>
                <div>Hi</div>
            </AppLayout>
        </>
    );
}

export default Home;