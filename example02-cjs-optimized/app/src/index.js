import add from 'math-lib/lib/add';
import './main.css';

const title = document.createElement('h1');
title.innerHTML = `🌲Shakin??? <br /> 2 + 3 = ${add(2, 3)}`;

document.querySelector('body').append(title);