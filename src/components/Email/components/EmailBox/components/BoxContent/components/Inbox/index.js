// Core
import React, { Component } from 'react';
import { array, number } from 'prop-types';

//Instruments
import Styles from './styles.scss';
import Paginator from '../Paginator';

export default class Inbox extends Component {
    static propTypes = {
        context: array.isRequired,
        total:   number,
    };

    constructor () {
        super();
        this.linkPage = ::this._linkPage;
    }

    state = {
        perPage: 25,
        offset:  0,
    };

    _linkPage (offset, perPage = 25) {
        if (this.props.total < offset * perPage) {
            return;
        }

        if (offset < 0) {
            return;
        }

        this.setState(() => ({ perPage, offset }));
    }

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
                    linkPage = { this.linkPage }
                    options = { { ...this.state } }
                />
            </section>
        );
    }
}
