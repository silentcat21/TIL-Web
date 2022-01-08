import React, { Component } from "react";
import { ComponentDetails } from "./ComponentDetails/componentDetails";

export class Contact extends Component {
    render() {
        return (
            <div>
                <h1>연락처</h1>
                <p>
                    연락처 들어오는 곳 ...
                </p>
                <ComponentDetails></ComponentDetails>
            </div>
        );
    }
}