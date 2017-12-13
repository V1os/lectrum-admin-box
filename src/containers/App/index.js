// Core
import React, { Component } from 'react';
//import { string } from 'prop-types';

// Instruments
import Catcher from '../../components/Catcher';
import Styles from './styles.scss';
import Head from '../../components/Head';
import SideMenu from '../../components/SideMenu';
import Email from '../../components/Email';

const options = {};

export default class App extends Component {
    static childContextTypes = {};

    constructor () {
        super();
    }

    getChildContext () {
        return options;
    }

    render () {
        return (
            <section className = { Styles.app }>
                <Catcher>
                    <Head />
                    <SideMenu />
                    <Email />
                </Catcher>
            </section>
        );
    }
}
