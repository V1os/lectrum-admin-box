// Core
import React, { Component } from 'react';
import { array, func, string, number } from 'prop-types';

//Instrument
import Styles from './styles.scss';
import Inbox from './components/Inbox';
import Composer from './components/Composer';

export default class BoxContent extends Component {
    static propTypes = {
        context: array.isRequired,
        route:   string.isRequired,
        onRoute: func.isRequired,
        total:   number,
    };

    render () {
        let content = 'Empty';
        const { context, route = 'inbox', total } = this.props;

        switch (route) {
            case 'inbox':
                content = <Inbox context = { context } total = { total } />;
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
