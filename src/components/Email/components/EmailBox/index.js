// Core
import React, { Component } from 'react';
import { array } from 'prop-types';

//Instruments
import Styles from './styles.scss';
import BoxHead from './components/BoxHead';
import BoxContent from './components/BoxContent';

export default class EmailBox extends Component {
    static propTypes = {
        context: array.isRequired,
    };

    state = {
        routeList:    ['inbox', 'compose'],
        routeCurrent: 'compose',
    };

    render () {
        return (
            <section className = { Styles.box }>
                <BoxHead search route = { this.state.routeCurrent } />
                <BoxContent
                    context = { this.props.context }
                    route = { this.state.routeCurrent }
                />
            </section>
        );
    }
}
