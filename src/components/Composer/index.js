// Core
import React, { Component } from 'react';
import PropTypes, { string } from 'prop-types';

// Instruments
import Styles from './styles.scss';
import { getRandomColor } from '../../helpers';

export default class Composer extends Component {
    static contextTypes = {
        firstName: string.isRequired,
    };

    static propTypes = {
        avatar:     string.isRequired,
        createPost: PropTypes.func,
    };

    constructor () {
        super();
        this.handleSubmit = ::this._handleSubmit;
        this.handleTextArea = ::this._handleTextArea;
        this.dontCopy = ::this._dontCopy;
        this.handleKeyPress = ::this._handleKeyPress;
        //this.dontSelect = ::this._dontSelect;
    }

    state = {
        comment:     '',
        styleButton: 'buttonReadOnly',
        selected:    false,
        borderColor: '#fff',
    };

    _handleSubmit (event) {
        event.preventDefault();
        if (this.state.comment === '') {
            this.setState(() => ({ styleButton: 'buttonReadOnly' }));

            return;
        }
        this.props.createPost(this.state.comment);
        this.setState(() => ({ comment: '', styleButton: 'buttonReadOnly' }));
    }

    _handleTextArea (event) {
        const { value: comment } = event.target;

        this.setState(() => ({
            comment,
            styleButton: 'buttonDone',
            borderColor: getRandomColor(),
        }));
    }

    _dontCopy (e) {
        e.target.unselectable = 'on';
        e.preventDefault();
    }

    /*_dontSelect () {
        e.preventDefault();
        this.setState(() => ({ selected: false }));
        const element = e.target;

        if (element.selection && element.selection.empty) {
            element.selection.empty();
        }

        element.removeAllRanges();
    }*/

    _handleKeyPress (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.props.createPost(this.state.comment);
            this.setState(() => ({
                comment:     '',
                styleButton: 'buttonReadOnly',
            }));
        }
    }

    render () {
        const { firstName } = this.context;
        const { avatar } = this.props;
        const { comment, borderColor } = this.state;

        return (
            <section className = { Styles.composer } style = { { borderColor } }>
                <img alt = 'homer' src = { avatar } />
                <form onSubmit = { this.handleSubmit }>
                    <textarea
                        placeholder = { `What's on your mind, ${firstName}` }
                        value = { comment }
                        onChange = { this.handleTextArea }
                        onCopy = { this.dontCopy }
                        onKeyPress = { this.handleKeyPress }
                    />
                    <input
                        className = { Styles[this.state.styleButton] }
                        type = 'submit'
                        value = 'Post'
                    />
                </form>
            </section>
        );
    }
}
