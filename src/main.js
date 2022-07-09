import './style.scss'
import './components/vite-button/vite-button.scss';
import './components/vite-button/vite-button';

import githubPng from './assets/github.png';

import viteData from './data/vite-data.json';

class App extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const img = document.createElement('img');
    img.setAttribute('src', githubPng);
    this.appendChild(img);

    const dataDiv = document.createElement('div');
    dataDiv.textContent = JSON.stringify(viteData);
    this.appendChild(dataDiv);

    const ViteButton = document.createElement('vite-button');
    this.appendChild(ViteButton);
  }

  disconnectedCallback() {}
}

customElements.define('vite-app', App);


