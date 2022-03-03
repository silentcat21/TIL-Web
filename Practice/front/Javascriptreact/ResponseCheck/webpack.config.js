const path = require('path');
const refreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
// process.env.NODE_ENV = 'prodiction';  <- 환경변수를 프로덕션으로 바꿔줘야함

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', //실서비스: production
    devtool: 'eval', //production 일때는 hidden-sourse-map
    resolve: {
        extensions: ['.js','.jsx'] //엔트리에 확장자명 안넣어도 찾아줌
    },

    entry: {
        app: ['./client.jsx'], // client.jsx에서 WordRelay를 불러오고있기 때문에 따로 추가할 필요 없음
    }, //입력

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 5% in KR', 'last 2 chrome versions'], //browserslist에서 브라우저 호환 확인
                        },
                        debug: true,
                    }],
                    '@babel/preset-react'
                    ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel'
                ],
            },
            },{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          }],
    },

    plugins: [
        new refreshWebpackPlugin()
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',

    }, //출력
    devServer: {
        devMiddleware: { publicPath: "/dist/" },
        static: { directory: path.resolve(__dirname) }, //최상위 폴더, 다른 폴더일 경우 , path.resolve(__dirname, '폴더이름')
        hot: true,
    },
};