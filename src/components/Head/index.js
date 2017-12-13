// Core
import React, { Component } from 'react';
import { string } from 'prop-types';

// Instrument
import Styles from './styles.scss';
import avatar from '../../theme/assets/avatar.png';

export default class Head extends Component {
    static contextTypes = {
        firstName: string.isRequired,
        lastName:  string.isRequired,
    };

    render () {
        const { firstName, lastName } = this.context;

        return (
            <section className = { Styles.head }>
                <div className = { Styles.logo } />
                <div className = { Styles.line }>
                    <div className = { Styles.notify }>
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className = { Styles.search }>
                        <input name = 'search' placeholder = 'Search' />
                    </div>
                    <div className = { Styles.user }>
                        <img src = { avatar } title = 'asvatar' />
                        <p>
                            {`${firstName} ${lastName}`} <i />
                        </p>
                    </div>
                    <div className = { Styles.menu }>&#8230;</div>
                </div>
            </section>
        );
    }
}
