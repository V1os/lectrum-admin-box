import React from 'react';
import { string, object } from 'prop-types';

// Instruments
import Styles from './styles.scss';

const SideMenuItem = (props) => {
    const { name, options } = props;

    return (
        <div className = { Styles.sideMenuItem }>
            <i
                className = { Styles.sideMenuItemIcon }
                style = { {
                    backgroundPosition: options.active
                        ? options.active
                        : options.iconPosition,
                } }
            />{' '}
            {name}
        </div>
    );
};

SideMenuItem.propTypes = {
    name:    string.isRequired,
    options: object.isRequired,
};

export default SideMenuItem;
