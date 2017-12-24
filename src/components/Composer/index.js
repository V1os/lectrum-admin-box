// Core
import React, { Component } from 'react';
import { object } from 'prop-types';
import { EditorState } from 'draft-js';

// Instruments
import Styles from './styles.scss';
import { Editor } from 'react-draft-wysiwyg';
import '../../theme/react-draft-wysiwyg.css';

export default class Composer extends Component {
    static propTypes = {
        editorState: object,
    };

    state = {
        editorState: EditorState.createEmpty(),
    };

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    render () {
        const { editorState } = this.state;

        return (
            <div className = { Styles.composer }>
                <div className = { Styles.to }>
                    <p>To</p>
                    <div>
                        <i>&times;</i>Robert Skind
                    </div>
                    <div>
                        <i>&times;</i>Robert Skind
                    </div>
                    <div>
                        <i>&times;</i>Robert Skind
                    </div>
                    <input type = 'text' />
                </div>
                <div className = { Styles.subject }>
                    <p>Subject</p>
                    <input type = 'text' />
                </div>
                <Editor
                    editorClassName = { Styles.editorClassName }
                    editorState = { editorState }
                    toolbar = { {
                        options: [
                            'fontSize',
                            'fontFamily',
                            'colorPicker',
                            'inline',
                            'textAlign',
                            'link'
                        ],
                    } }
                    toolbarClassName = { Styles.toolbarClassName }
                    onEditorStateChange = { this.onEditorStateChange }
                />
                <div>
                    <button>
                        <span>&oplus;</span> Attach File
                    </button>
                    <button>Send Message</button>
                </div>
            </div>
        );
    }
}
