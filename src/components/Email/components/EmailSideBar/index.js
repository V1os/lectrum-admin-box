// Core
import React, { Component } from 'react';
import { func } from 'prop-types';

//Instruments
import Styles from './styles.scss';
import SideMenuItem from '../../../SideMenuItem';

export default class EmailSideBar extends Component {
    static propTypes = {
        onRoute: func.isRequired,
    };

    constructor () {
        super();
        this.onRoute = ::this._onRoute;
    }

    state = {
        sideBarList: [
            {
                name:    'Inbox',
                options: {
                    iconPosition: '-125px 387px',
                    active:       { style: 'backGround' },
                },
                route: 'inbox',
            },
            { name: 'Sand mail', options: { iconPosition: '-125px 361px' }},
            { name: 'Important', options: { iconPosition: '-125px 332px' }},
            { name: 'Draft', options: { iconPosition: '-125px 305px' }},
            { name: 'Trash', options: { iconPosition: '-125px 276px' }},
            { name: 'Spam', options: { iconPosition: '-125px 248px' }},
            { name: 'All Email', options: { iconPosition: '-125px 218px' }}
        ],
    };

    _onRoute () {
        const { onRoute } = this.props;

        onRoute('compose');
    }

    render () {
        const sideBarMenus = this.state.sideBarList.map((menu) => (
            <SideMenuItem
                key = { menu.name }
                onRoute = { this.props.onRoute }
                { ...menu }
            />
        ));

        return (
            <section className = { Styles.sideBar }>
                <button onClick = { this.onRoute }>Compose Mail</button>
                {sideBarMenus}
            </section>
        );
    }
}
