// Core
import React, { Component } from 'react';
import { array, string, func, number } from 'prop-types';

//Instruments
import Styles from './styles.scss';
import BoxHead from '../BoxHead';
import BoxContent from '../BoxContent';

export default class EmailBox extends Component {
    static propTypes = {
        context:      array.isRequired,
        onRoute:      func.isRequired,
        routeCurrent: string,
        total:        number,
    };

    render () {
        const { routeCurrent, context, onRoute, total } = this.props;

        return (
            <section className = { Styles.box }>
                <BoxHead search route = { routeCurrent } />
                <BoxContent
                    context = { context }
                    route = { routeCurrent }
                    total = { total }
                    onRoute = { onRoute }
                />
            </section>
        );
    }
}
