import 'antd/dist/antd.css'
import propTypes from 'prop-types';
import React from 'react';
import Head from 'next/head';
import wrapper from '../store/configureStore';

const App = ({ Component }) => {
    return (
        <>
        <Head>
            <meta charSet="utf-8" />
            <title>SNS Portfolio</title>
        </Head>
        {/* // <div>공통메뉴</div> 모든 앱에서 공통인 경우 여기서 */}

        <Component />
        
        </>
    );
};

App.propTypes = {
    Component: propTypes.elementType.isRequired,
}

export default wrapper.withRedux(App); //모든 앱을 wrapper로 감싸줌 Provide 로 사용할 필요 없음