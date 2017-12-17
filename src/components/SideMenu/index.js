// Core
import React, { Component } from 'react';

// Instrument
import Styles from './styles.scss';
import SideMenuItem from '../../components/SideMenuItem';

export default class SideMenu extends Component {
    state = {
        sideMenus: [
            { name: 'Dashboard', options: { iconPosition: '-65px 415px' }},
            { name: 'Layouts', options: { iconPosition: '-65px 389px' }},
            { name: 'Calendar', options: { iconPosition: '-65px 360px' }},
            { name: 'UI Elements', options: { iconPosition: '-65px 333px' }},
            { name: 'Text & Form', options: { iconPosition: '-65px 304px' }},
            {
                name:    'Email',
                options: {
                    iconPosition: '-65px 277px',
                    active:       { position: '-95px 277px', style: 'border' },
                },
            },
            { name: 'Icon Set', options: { iconPosition: '-65px 247px' }},
            { name: 'Data table', options: { iconPosition: '-65px 219px' }},
            { name: 'Charts', options: { iconPosition: '-65px 193px' }},
            { name: 'Maps', options: { iconPosition: '-65px 165px' }},
            { name: 'Profile', options: { iconPosition: '-65px 136px' }},
            { name: 'Login Page', options: { iconPosition: '-65px 106px' }}
        ],
    };

    render () {
        const menus = this.state.sideMenus.map((menu) => (
            <SideMenuItem key = { menu.name } { ...menu } />
        ));

        return <section className = { Styles.sideMenu }>{menus}</section>;
    }
}
