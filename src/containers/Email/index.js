// Core
import React, { Component } from 'react';

// Instrument
import Styles from './styles.scss';
import EmailSideBar from '../../components/EmailSideBar';
import EmailBox from '../../components/EmailBox';
import faker from 'faker';
import moment from 'moment/moment';

export default class Email extends Component {
    constructor () {
        super();
        this.setRoute = ::this._setRoute;
    }

    state = {
        total:        127,
        routeList:    ['inbox', 'compose'],
        routeCurrent: 'inbox',
        data:         [],
    };

    genData = () => {
        faker.locale = 'ru';
        let time = moment();
        const { data } = this.state;

        if (data.length === 0) {
            for (let i = 0; i < this.state.total; i++) {
                const diff = Math.random() * 10;

                time = moment()
                    .set(time)
                    .add(-diff, 'day');
                data.push({
                    id:        i,
                    subject:   faker.commerce.productName(),
                    shortText: faker.hacker.phrase(),
                    date:      moment(time).format('ll'),
                    checked:   false,
                    favorite:  false,
                });
            }
        }

        return data;
    };

    _setRoute (route) {
        this.setState(() => ({
            routeCurrent: route,
        }));
    }

    render () {
        const context = this.genData();

        return (
            <section className = { Styles.email }>
                <div>
                    <h1>Email</h1>
                    <p>Home / Email</p>
                </div>
                <div>
                    <EmailSideBar onRoute = { this.setRoute } />
                    <EmailBox
                        context = { context }
                        routeCurrent = { this.state.routeCurrent }
                        total = { this.state.total }
                        onRoute = { this.setRoute }
                    />
                </div>
            </section>
        );
    }
}
