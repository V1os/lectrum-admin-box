// Core
import React from 'react';
import { createPortal } from 'react-dom';

// Instruments
import Styles from './styles';

const spinner = document.getElementById('spinner');

const Spinner = () =>
    createPortal(<div className = { Styles.spinner }> &#8756; </div>, spinner);

export default Spinner;
