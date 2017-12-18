// Core
import React, { Component } from 'react';
import { array, string, func } from 'prop-types';

//Instruments
import Styles from './styles.scss';
import BoxHead from './components/BoxHead';
import BoxContent from './components/BoxContent';

export default class EmailBox extends Component {
    static propTypes = {
        context:      array.isRequired,
        onRoute:      func.isRequired,
        routeCurrent: string,
    };

    render () {
        const { routeCurrent, context, onRoute } = this.props;

        return (
            <section className = { Styles.box }>
                <BoxHead search route = { routeCurrent } />
                <BoxContent
                    context = { context }
                    route = { routeCurrent }
                    onRoute = { onRoute }
                />
            </section>
        );
    }
}
