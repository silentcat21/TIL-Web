import React from 'react';
import AppLayout from '../components/AppLayout';
//next는 폴더 이름을 무조건 pages로 해줘야 인식함
//package.json의 스크립트 npm run dev, npm run build 등 스크립트 명령어 실행가능
const Home = () => {
    return (
        <AppLayout>
            <div>Hello</div>
        </AppLayout>
    );
}

export default Home;