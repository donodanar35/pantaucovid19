import "bootstrap";

class GrafikInfo extends HTMLElement {

    constructor() {
        super();
    }
  
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <div class="container shadow p-3 mb-5 rounded mb-5" style="max-width: 96%;">
            <div class="row content table-responsive">
                <header class="judul mt-3" id="header-grafik">
                    <h2 class="text-center">Grafik Perkembangan Kasus Akumulatif Covid-19</h2>
                    <p class="lead text-center">Pantau dan bandingkan grafik perkembangan kasus akumulatif Covid-19 berdasarkan negara</p>
                </header>
                <article class="col-lg-5 border border-dark shadow bg-white rounded mr-3 mb-3">
                    <div class="form-group">
                        <label for="judulartikel">Negara</label>
                        <input type="text" class="form-control" id="negara2" name="negara2" placeholder="Negara pembanding...">
                    </div>
                    <div class="form-group">
                        <label for="judulartikel">Dari Tanggal</label>
                        <input type="date" class="form-control" id="tanggalawal2" name="tanggalawal2" placeholder="Tanggal awal...">
                    </div>
                    <div class="form-group">
                        <label for="judulartikel">Sampai Tanggal</label>
                        <input type="date" class="form-control" id="tanggalakhir2" name="tanggalakhir2" placeholder="Tanggal akhir...">
                    </div>
                    <div class="form-group">                            
                        <button type="button" class="btn btn-primary" id="carinegara2" value="new2">Cari</button>
                    </div>
                    <div id="kanvas2">
                        <canvas id="myChart2" width="400" height="400"></canvas>
                    </div>
                </article>
                <article class="col-lg-5 border border-dark shadow bg-white rounded ml-3 mb-3">
                    <div class="form-group">
                        <label for="judulartikel">Negara</label>
                        <input type="text" class="form-control" id="negara" name="negara" placeholder="Negara yang dibandingkan...">
                    </div>
                    <div class="form-group">
                        <label for="judulartikel">Dari Tanggal</label>
                        <input type="date" class="form-control" id="tanggalawal" name="tanggalawal" placeholder="Tanggal awal...">
                    </div>
                    <div class="form-group">
                        <label for="judulartikel">Sampai Tanggal</label>
                        <input type="date" class="form-control" id="tanggalakhir" name="tanggalakhir" placeholder="Tanggal akhir...">
                    </div>
                    <div class="form-group">                            
                        <button type="button" class="btn btn-primary" id="carinegara" value="new">Cari</button>
                    </div>
                    <div id="kanvas">
                        <canvas id="myChart" width="400" height="400"></canvas>
                    </div>
                </article><br/><br/><br/>
            </div>
        </div>
        `;
    }
  }
  
  customElements.define("grafik-info", GrafikInfo);