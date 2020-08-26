import "bootstrap";

class NavigasiInfo extends HTMLElement {

    constructor() {
        super();
    }
  
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="index.html">Pantau Covid-19</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <a class="nav-item nav-link" href="index.html#header-statistik">Statistik</a>
                    <a class="nav-item nav-link" href="index.html#header-grafik">Grafik</a>
                    <a class="nav-item nav-link" href="index.html#header-gejala">Gejala</a>
                    <a class="nav-item nav-link" href="index.html#header-panduan">Panduan</a>
                    <a class="nav-item nav-link" href="index.html#header-hotline">Hotline</a>
                    <a class="nav-item nav-link" href="tentang.html">Tentang</a>
                    </div>
                </div>
            </div>
        </nav>
        `;
    }
  }
  
  customElements.define("navigasi-info", NavigasiInfo);