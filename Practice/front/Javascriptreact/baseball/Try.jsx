import React, { Component } from 'react';

class Try extends Component {


    render() {
        return (
            <li>
                <b>{this.props.value.fruit}</b> {this.props.value.taste} = {this.props.index}
                <div>컨텐츠1</div>
                <div>컨텐츠2</div>
                <div>컨텐츠3</div>
            </li>
        );
        
    };
}

export default Try;