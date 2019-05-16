import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import {render} from 'react-dom';
import Table from './Table';
import Styles from '../../styles/table/table.scss';

render(<Router><Table /></Router>, document.getElementById('table'));