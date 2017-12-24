// Core
import React from 'react';
import { array, object, func } from 'prop-types';

//Instruments
import Styles from './styles.scss';

const Paginator = (props) => {
    const { context, options: { perPage, offset, total }, linkPage } = props;
    const changePage = (ev) => {
        linkPage(ev.target.dataset.to === '-1' ? offset - 1 : offset + 1);
    };

    const selectAll = (ev) => {
        console.log(ev);
    };

    const selectIsRead = (ev) => {
        console.log(ev);
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
                        <tr key = { row.id }>
                            <td>
                                <label htmlFor = { `item-${row.id}` }>
                                    <input
                                        id = { `item-${row.id}` }
                                        name = 'item[]'
                                        type = 'checkbox'
                                    />
                                    <span>&nbsp;</span>
                                </label>
                            </td>
                            <td>
                                <label htmlFor = { `favorite-${row.id}` }>
                                    <input
                                        id = { `favorite-${row.id}` }
                                        name = 'favorite[]'
                                        type = 'checkbox'
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
    context:  array.isRequired,
    linkPage: func.isRequired,
    options:  object.isRequired,
};

export default Paginator;
