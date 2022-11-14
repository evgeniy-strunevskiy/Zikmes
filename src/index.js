import './index.html';
import './index.scss';
import code from './img/code.png';

const imgWrapper = document.querySelector('.img')
const img = new Image();
img.src = code
img.width = 700
imgWrapper.append(img)