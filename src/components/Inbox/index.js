// Core
import React, { Component } from 'react';
import { array, number } from 'prop-types';

//Instruments
import Styles from './styles.scss';
import Paginator from '../Paginator';

export default class Inbox extends Component {
    static propTypes = {
        context: array.isRequired,
        total:   number,
    };

    constructor () {
        super();
        this.linkPage = ::this._linkPage;
        this.prepareData = ::this._prepareData;
        this.selectAll = ::this._selectAll;
        this.selectFav = ::this._selectFav;
        this.selectRow = ::this._selectRow;
    }

    state = {
        perPage: 25,
        offset:  0,
        data:    [],
    };

    componentWillMount () {
        this.linkPage(0);
    }

    _prepareData (offset, perPage) {
        const { context } = this.props;

        return context.slice(offset * perPage, perPage * offset + perPage);
    }

    _linkPage (offset, perPage = 25) {
        const { total } = this.props;

        if (total < offset * perPage) {
            return;
        }
        if (offset < 0) {
            return;
        }
        this.setState(() => ({
            perPage,
            offset,
            data: this.prepareData(offset, perPage),
        }));
    }

    _selectAll (checked) {
        const { context } = this.props;

        this.setState(() => ({
            data: context.map((row) => {
                row.checked = checked;

                return row;
            }),
        }));
    }

    _selectRow (id, checked) {
        const { offset, perPage } = this.state;
        let data = this.prepareData(offset, perPage);

        // because index array equal to value id
        if (data[id] !== undefined) {
            data[id].checked = checked;
        } else {
            data = data.map((row) => {
                if (id === row.id) {
                    row.checked = checked;
                }

                return row;
            });
        }
        this.setState(() => ({ data }));
    }

    _selectFav (id, checked) {
        const { offset, perPage } = this.state;
        let data = this.prepareData(offset, perPage);

        // because index array equal to value id
        if (data[id] !== undefined) {
            data[id].favorite = checked;
        } else {
            data = data.map((row) => {
                if (id === row.id) {
                    row.favorite = checked;
                }

                return row;
            });
        }
        this.setState(() => ({ data }));
    }

    render () {
        const { data } = this.state;

        return (
            <section className = { Styles.inbox }>
                <Paginator
                    context = { data }
                    linkPage = { this.linkPage }
                    options = { { ...this.state } }
                    selectAll = { this.selectAll }
                    selectFav = { this.selectFav }
                    selectRow = { this.selectRow }
                />
            </section>
        );
    }
}
