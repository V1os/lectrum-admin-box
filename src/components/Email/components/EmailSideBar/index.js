// Core
import React, { Component } from 'react';

//Instruments
import Styles from './styles.scss';
import SideMenuItem from '../../../SideMenuItem';

export default class EmailSideBar extends Component {
    state = {
        sideBarList: [
            {
                name:    'Inbox',
                options: {
                    iconPosition: '-125px 387px',
                    active:       { style: 'backGround' },
                },
            },
            { name: 'Sand mail', options: { iconPosition: '-125px 361px' }},
            { name: 'Important', options: { iconPosition: '-125px 332px' }},
            { name: 'Draft', options: { iconPosition: '-125px 305px' }},
            { name: 'Trash', options: { iconPosition: '-125px 276px' }},
            { name: 'Spam', options: { iconPosition: '-125px 248px' }},
            { name: 'All Email', options: { iconPosition: '-125px 218px' }}
        ],
    };

    render () {
        const sideBarMenus = this.state.sideBarList.map((menu) => (
            <SideMenuItem key = { menu.name } { ...menu } />
        ));

        return (
            <section className = { Styles.sideBar }>
                <button>Compose Mail</button>
                {sideBarMenus}
            </section>
        );
    }
}
