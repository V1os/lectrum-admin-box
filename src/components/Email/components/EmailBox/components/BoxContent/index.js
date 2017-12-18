// Core
import React, { Component } from 'react';
import { array, func, string } from 'prop-types';

//Instrument
import Styles from './styles.scss';
import Inbox from './components/Inbox';
import Composer from './components/Composer';

export default class BoxContent extends Component {
    static propTypes = {
        context: array.isRequired,
        route:   string.isRequired,
        onRoute: func.isRequired,
    };

    render () {
        let content = 'Empty';
        const { context, route = 'inbox' } = this.props;

        switch (route) {
            case 'inbox':
                content = <Inbox context = { context } />;
                break;
            case 'compose':
                content = <Composer />;
                break;
            default:
                break;
        }

        return <section className = { Styles.boxContent }>{content}</section>;
    }
}
