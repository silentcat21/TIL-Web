import React, { Component } from 'react';
import './css.css';

class ResponseCheck extends Component {
    state = {
        state: 'screen_waiting',
        message: '클릭해서 시작하세요',
        result: [],
    };

    onClickScreen = () => {

    }

    render() {
        return (
            <>
            <div className='screen'>
                <div id='screen' className={this.state.state} onClick={this.onClickScreen}>
                    {this.state.message}
                </div>
                <div>평균 시간: {this.state.result.reduce((a, c) => a + c) / this.state.result.length}ms</div>
            </div>
            </>
        );
    }
}

export default ResponseCheck;