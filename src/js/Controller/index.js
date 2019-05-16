import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import {render} from 'react-dom';
import Controller from './Controller';
import Styles from '../../styles/controller/controller.scss';

render(<Router><Controller /></Router>, document.getElementById('controller'));