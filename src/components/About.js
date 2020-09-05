import React, { Component } from 'react'
import styled from 'styled-components';

const Heading = styled.h1`
   color:red;
   text-align:center;
`


export default class About extends Component {
    render() {
        return (
            <div>
                <Heading>Hello</Heading>
            </div>
        )
    }
}
