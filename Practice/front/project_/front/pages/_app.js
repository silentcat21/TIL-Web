import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import Head from 'next/head';
//공통으로 적용하는 app.js 빌드 _app.js React에서 app.js와 동일

const App = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>Fitdoc</title>
            </Head>
            <Component/>
        </>
    );
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default App;