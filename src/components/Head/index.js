// Core
import React, { Component } from 'react';

// Instrument
import Styles from './styles.scss';

export default class Head extends Component {
    render () {
        return <section className = { Styles.head }>
            <div className = { Styles.logo }/>
            <div className = { Styles.line }>
                <div className = { Styles.notify }>
                    <span/>
                    <span/>
                    <span/>
                </div>
                <div className = { Styles.menu }/>
                <div className = { Styles.user }/>
                <div className = { Styles.search }/>
            </div>
        </section>
    }
}
