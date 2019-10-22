import React, { Component } from 'react';
import Content from './Content';
import { BrowserRouter } from 'react-router-dom';
import Buttons from '../../screens/Buttons';
import Inputs from '../../screens/Inputs';
import NewAdmission from '../../screens/student/admission/NewAdmission';

export default class ContentContainer extends Component {
    render() {
        return (
            <Content>
                {/* <Buttons /> */}
                {/* <Inputs /> */}
                <NewAdmission />
                {/* <Inputs /> */}
            </Content>
        )
    }
}
