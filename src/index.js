// https://webpack.js.org/guides/getting-started/
import myName from './myName';
import './style.css';
import Icon from './icon.png';
import Books from './books.xml';

function component() {
    const element = document.createElement('div');
  
    element.textContent = myName('Batuhan');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.table(Books)

    return element;
  }
  
  document.body.appendChild(component());