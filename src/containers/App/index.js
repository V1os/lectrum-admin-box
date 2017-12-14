// Core
import React, { Component } from 'react';
import { string } from 'prop-types';

// Instruments
import Catcher from '../../components/Catcher';
import Styles from './styles.scss';
import Head from '../../components/Head';
import SideMenu from '../../components/SideMenu';
import Email from '../../components/Email';

const options = {
    firstName: 'Vladimir',
    lastName:  'Kudinov',
};

export default class App extends Component {
    static childContextTypes = {
        firstName: string.isRequired,
        lastName:  string.isRequired,
    };

    getChildContext () {
        return options;
    }

    render () {
        return (
            <section className = { Styles.app }>
                <Catcher>
                    <Head />
                    <div className = { Styles.container }>
                        <SideMenu />
                        <Email />
                    </div>
                </Catcher>
            </section>
        );
    }
}
