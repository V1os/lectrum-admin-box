// Core
import React from 'react';
import { string, bool } from 'prop-types';

//Instruments
import Styles from './styles.scss';
import Search from '../../components/Search';

const BoxHead = (props) => {
    const { search: hasSearch = true, route } = props;
    let title = 'Head';

    switch (route) {
        case 'inbox':
            title = 'Inbox';
            break;
        case 'compose':
            title = 'Compose Mail';
            break;
        default:
            break;
    }

    return (
        <section className = { Styles.head }>
            <h1>{title}</h1>
            {hasSearch ? <Search mode = { 'lite' } /> : null}
        </section>
    );
};

BoxHead.propTypes = {
    route:  string.isRequired,
    search: bool.isRequired,
};

export default BoxHead;
