// Core
import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

//Instrument
import Styles from './styles.scss';

const Search = (props) => {
    const { mode: styleBlock = 'dark' } = props;

    return (
        <div className = { classNames(Styles.search, Styles[styleBlock]) }>
            <input name = 'search' placeholder = 'Search' />
        </div>
    );
};

Search.propTypes = {
    mode: string.isRequired,
};

export default Search;
