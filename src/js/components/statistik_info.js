import "bootstrap";

class StatistikInfo extends HTMLElement {

    constructor() {
        super();
    }
  
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <div class="container shadow p-3 mb-5 rounded mb-5" style="max-width: 96%;">
            <div class="row content">
                <article class="col-lg-12 table-responsive grafik">
                    <header class="judul" id="header-statistik">
                        <h2 class="text-center">Statistik Covid-19 di Dunia</h2>
                        <p class="lead text-center">Statistik Covid-19 dari berbagai negara secara aktual</p>
                    </header>
                    <table class="table table-striped " id="tabel-covid-dunia" style="width:100%;">
                        <thead class="thead text-center">
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Negara</th>
                                <th scope="col">Diperbarui</th>
                                <th scope="col">Harian Positif</th>
                                <th scope="col">Harian Sembuh</th>
                                <th scope="col">Harian Meninggal</th>
                                <th scope="col">Total Positif</th>
                                <th scope="col">Total Sembuh</th>
                                <th scope="col">Total Meninggal</th>
                            </tr>
                        </thead>
                        <tbody id="tabel-data-covid-dunia">
                        </tbody>
                        </table>
                </article><br/>
            </div>
        </div>
        `;
    }
  }
  
  customElements.define("statistik-info", StatistikInfo);