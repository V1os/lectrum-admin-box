import React from 'react';
import { string, object } from 'prop-types';
import classNames from 'classnames';

// Instruments
import Styles from './styles.scss';

const SideMenuItem = (props) => {
    const { name, options: { active, iconPosition }} = props;

    return (
        <div
            className = { classNames(
                Styles.sideMenuItem,
                active !== undefined && active.hasOwnProperty('style')
                    ? Styles[active.style]
                    : ''
            ) }>
            <i
                className = { Styles.sideMenuItemIcon }
                style = { {
                    backgroundPosition:
                        active !== undefined &&
                        active.hasOwnProperty('position')
                            ? active.position
                            : iconPosition,
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
