
import tmpl from './vite-button.html?raw';

console.log(tmpl);

class ViteButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = tmpl;
    this._btn = this.querySelector('.vite-button');
    this._btn.addEventListener('click', this.handleButtonClick);
    this.appendChild(this._btn);

  }

  disconnectedCallback() {

  }

  handleButtonClick(e) {
    alert('This is a custom element');
  }
}

customElements.define('vite-button', ViteButton);