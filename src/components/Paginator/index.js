// Core
import React from 'react';
import { array, object, func } from 'prop-types';

//Instruments
import Styles from './styles.scss';

const Paginator = (props) => {
    const {
        context,
        options: { perPage, offset, total },
        linkPage,
        selectAll: callSelectAll,
        selectRow: callSelectRow,
        selectFav: callSelectFav,
    } = props;

    const changePage = (ev) => {
        linkPage(ev.target.dataset.to === '-1' ? offset - 1 : offset + 1);
    };

    const selectAll = (ev) => {
        callSelectAll(ev.target.checked);
    };

    const selectIsRead = (ev) => {
        console.log(ev);
    };

    const selectRow = (ev) => {
        const id = parseInt(ev.target.dataset.id, 10);

        callSelectRow(id, ev.target.checked);
    };
    const selectFav = (ev) => {
        const id = parseInt(ev.target.dataset.id, 10);

        callSelectFav(id, ev.target.checked);
    };

    return (
        <section className = { Styles.paginate }>
            <div>
                <p>
                    <label htmlFor = 'all'>
                        <input
                            id = 'all'
                            name = 'all'
                            type = 'checkbox'
                            onChange = { selectAll }
                        />
                        <span>&nbsp;</span>
                        Select All
                    </label>
                    <label htmlFor = 'is-read'>
                        <input
                            id = 'is-read'
                            name = 'is-read'
                            type = 'checkbox'
                            onChange = { selectIsRead }
                        />
                        <span>&nbsp;</span>
                        Mark all is read
                    </label>
                    <label htmlFor = 'move'>
                        <input id = 'move' name = 'move' type = 'checkbox' />
                        <span>&nbsp;</span>
                        Move
                    </label>
                </p>
                <p>
                    {offset * perPage}-{offset * perPage + perPage} of {total}
                    <button data-to = '-1' onClick = { changePage }>
                        &#60;
                    </button>
                    <button data-to = '1' onClick = { changePage }>
                        &#62;
                    </button>
                </p>
            </div>
            <table cellPadding = '0' cellSpacing = '0'>
                <tbody>
                    {context.map((row) => (
                        <tr
                            className = { row.checked ? Styles.active : null }
                            key = { row.id }>
                            <td>
                                <label htmlFor = { `item-${row.id}` }>
                                    <input
                                        checked = { row.checked }
                                        data-id = { row.id }
                                        id = { `item-${row.id}` }
                                        name = 'item[]'
                                        type = 'checkbox'
                                        onChange = { selectRow }
                                    />
                                    <span>&nbsp;</span>
                                </label>
                            </td>
                            <td>
                                <label htmlFor = { `favorite-${row.id}` }>
                                    <input
                                        checked = { row.favorite }
                                        data-id = { row.id }
                                        id = { `favorite-${row.id}` }
                                        name = 'favorite[]'
                                        type = 'checkbox'
                                        onChange = { selectFav }
                                    />
                                    <span>&nbsp;</span>
                                </label>
                            </td>
                            <td>{row.subject}</td>
                            <td>{row.shortText}</td>
                            <td>{row.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <p>4.72 GB (27%) of 50 GB used</p>
                <p>
                    {offset * perPage}-{offset * perPage + perPage} of {total}
                    <button data-to = '-1' onClick = { changePage }>
                        &#60;
                    </button>
                    <button data-to = '1' onClick = { changePage }>
                        &#62;
                    </button>
                </p>
            </div>
        </section>
    );
};

Paginator.propTypes = {
    context:   array.isRequired,
    linkPage:  func.isRequired,
    options:   object.isRequired,
    selectAll: func.isRequired,
    selectFav: func.isRequired,
    selectRow: func.isRequired,
};

export default Paginator;
