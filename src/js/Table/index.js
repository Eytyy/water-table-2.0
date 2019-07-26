import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import {render} from 'react-dom';
import Main from './Main';
import Styles from '../../styles/table/table.scss';

render(<Router><Main /></Router>, document.getElementById('table'));