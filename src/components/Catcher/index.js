// Core
import React, { Component } from 'react';
import { object, array, oneOfType } from 'prop-types';

// Instrument
import Styles from './styles.scss';

export default class Catcher extends Component {
    static propTypes = {
        children: oneOfType([object.isRequired, array.isRequired]),
    };

    state = {
        hasError: false,
    };

    componentDidCatch (error, info) {
        console.warn('ERROR:', error.message);
        console.info('STACKTRACE:', info.componentStack);

        this.setState(() => ({ hasError: true }));
    }

    render () {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return (
                <section className = { Styles.catcher }>
                    <p>Error have</p>
                </section>
            );
        }

        return children;
    }
}
