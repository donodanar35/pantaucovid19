class FooterInfo extends HTMLElement {

  constructor() {
      super();
  }

  connectedCallback(){
      this.render();
  }

  render() {
      this.innerHTML = `
      <p>Pantau Covid19 Copyright &copy; 2020</p>`;
  }
}

customElements.define("footer-info", FooterInfo);