import React from 'react';
import ReactDom from 'react-dom';
import './styles.scss';

import App from './components/App';

const root = document.getElementById('app-container');

ReactDom.render(<App />, root);
