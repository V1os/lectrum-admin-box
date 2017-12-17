// Core
import React, { Component } from 'react';
import { array } from 'prop-types';

//Instruments
import Styles from './styles.scss';
import Paginator from '../Paginator';

export default class Inbox extends Component {
    static propTypes = {
        context: array.isRequired,
    };

    state = {
        perPage: 25,
        offset:  0,
    };

    prepareData = () => {
        const { context } = this.props;
        const { perPage, offset } = this.state;

        return context.slice(offset * perPage, perPage * offset + perPage);
    };

    render () {
        return (
            <section className = { Styles.inbox }>
                <Paginator
                    context = { this.prepareData() }
                    options = { { ...this.state } }
                />
            </section>
        );
    }
}
