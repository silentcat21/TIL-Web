import React, { Component, useState, useRef } from 'react';
import './css.css';

const ResponseCheck = () => {
    const [state, setState] = useState('screen_waiting');
    const [message, setMessage] = useState('클릭해서 시작');
    const [result, setResult] = useState([]);
    const timeOut = useRef(null);
    const startTime = useRef(0);
    const endTime = useRef(0);

    const onClickScreen = () => {
        if (state === 'screen_waiting') {
            timeOut.current = setTimeout(() => {
                setState('screen_now');
                setMessage('지금 클릭');
                startTime.current = new Date();
            }, Math.floor(Math.random() * 1000) + 2000);
            setState('screen_ready');
            setMessage('초록색이 되면 클릭하세요');
        } else if ( state === 'screen_ready') {
            clearTimeout(timeOut.current);
            setState('screen_waiting');
            setMessage('너무 성급합니다. 다시 클릭해서 시작')
        } else if ( state === 'screen_now' ) {
            endTime.current = new Date();
            setState('screen_waiting');
            setMessage('클릭해서 시작하세요');
            setResult((prevResult) => {
                return [...prevResult, endTime.current - startTime.current];
            });
            console.log(setResult(),'111')
        }
    };

    const renderAverage = () => {
        return (
            result.length === 0 
            ? null 
            : <div>평균시간 : {((result.reduce((a , c) => a + c)) / result.length).toFixed(0)}ms</div>
        );
    };

    return (
        <>
            <div className='screen'>
                <div className={state} onClick={onClickScreen}>
                    {message}
                </div>
                {renderAverage()}
            </div>
        </>
    );
}
// class ResponseCheck extends Component {
//     constructor (props) {
//         super(props)
//     }
//     state = {
//         state: 'screen_waiting',
//         message: '클릭해서 시작하세요',
//         result: [],
//     };

//     timeout;
//     startTime;
//     endTime;

//     onClickScreen = () => {
//         const { state, message, result } = this.state
//         if (state === 'screen_waiting') {
//             this.setState({
//                 state : 'screen_ready',
//                 message: '초록색이 되면 클릭하세요',
//             });
//            this.timeout = setTimeout(() => {
//             this.setState({
//                 state: 'screen_now',
//                 message: '지금 클릭',
//             });
//             this.startTime = new Date();
//            }, Math.floor(Math.random() * 1000) + 2000);
//         } else if (state === 'screen_ready') {
//             clearTimeout(this.timeout);
//             this.setState({
//                 state: 'screen_waiting',
//                 message: '너무 성급합니다. 다시 시작'
//             })
//         } else if (state === 'screen_now') {
//             this.endTime = new Date();
//             this.setState((prevState) => {
//                 return {
//                 state: 'screen_waiting',
//                 message: '클릭해서 시작하세요',
//                 result: [...prevState.result, this.endTime - this.startTime],
//                 }
                
//             })
//         }
//     };

    

//     renderAverage = () => {
//         return this.state.result.length === 0 
//         ? null 
//         : <div>평균시간 : {(this.state.result.reduce((a, c) => a + c) / this.state.result.length).toFixed(0)}ms</div>
//     };

//     render() {
//         return (
//             <>
//             <div className='screen'>

//                 <div className={this.state.state} onClick={this.onClickScreen}>
//                     {this.state.message}
//                 </div>
//                 {this.renderAverage()}
//             </div>
//             </>
//         );
//     }
// }

export default ResponseCheck;