// Core
import React, { Component } from 'react';

// Instrument
import Styles from './styles.scss';
import EmailSideBar from './components/EmailSideBar';
import EmailBox from './components/EmailBox';
import faker from 'faker';
import moment from 'moment/moment';

export default class Email extends Component {
    state = {
        total: 127,
    };

    genData = () => {
        faker.locale = 'ru';
        const data = [];
        let time = moment();

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
            });
        }

        return data;
    };

    render () {
        return (
            <section className = { Styles.email }>
                <div>
                    <h1>Email</h1>
                    <p>Home / Email</p>
                </div>
                <div>
                    <EmailSideBar />
                    <EmailBox context = { this.genData() } />
                </div>
            </section>
        );
    }
}
