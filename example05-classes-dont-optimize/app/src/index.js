import { Pairs } from 'math-lib';
import './main.css';

const twos = new Pairs(2, 2);

const title = document.createElement('h1');
title.innerHTML = `🌲Shakin??? <br /> 2 + 2 = ${twos.add()}`;

document.querySelector('body').append(title);