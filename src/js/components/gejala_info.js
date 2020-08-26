import "bootstrap";

class GejalaInfo extends HTMLElement {

    constructor() {
        super();
    }
  
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <div class="container mb-5" style="max-width: 96%;">
            <div class="row content">
                <article class="col-lg-12">
                    <header class="judul" id="header-gejala">
                        <h2 class="text-center">Gejala Covid-19</h2>
                        <p class="lead text-center">Jangan panik, kenali gejala covid-19 sejak dini dan tetap terapkan protokol kesehatan: </p>
                    </header>
                    <div class="row p-1">
                        <div class="col-md-4 m-3 p-3 border border-dark shadow p-3 mb-5 bg-danger rounded">    
                            <h5 class="card-title text-center text-white">Demam</h5>
                            <center><img src="images/demam.png" alt="demam"/></center>
                            <p class="card-text text-white">Demam menunjukkan gejala awal corona, demam biasanya mencapai suhu >38 derajat celcius.</p>
                        </div>
                        <div class="col-md-3 m-3 p-3 border border-dark shadow p-3 mb-5 bg-danger rounded">
                            <h5 class="card-title text-center text-white">Batuk Kering</h5>
                            <center><img src="images/batuk.png" alt="batuk"/></center>
                            <p class="card-text text-white">Batuk Kering tidak beriak dan berulang ulang merupakan tanda infeksi aktif di paru-paru, yang mungkin bisa disebabkan karena Covid-19.</p>
                        </div>
                        <div class="col-md-4 m-3 p-3 border border-dark shadow p-3 mb-5 bg-danger rounded">
                            <h5 class="card-title text-center text-white">Sakit Tenggorokan</h5>
                            <center><img src="images/sakit_tenggorokan.png" alt="sakit tenggorokan"/></center>
                            <p class="card-text text-white">Infeksi Covid-19 akan melalui jalur pernafasan sehingga dapat mengakibatkan radang pada tenggorokan dan rasa nyeri.</p>
                        </div>
                    </div>
                    <div class="row p-1">
                        <div class="col-md-4 m-3 p-3 border border-dark shadow p-3 mb-5 bg-danger rounded">  
                            <h5 class="card-title text-center text-white">Sakit Kepala</h5>
                            <center><img src="images/pusing.png" alt="sakit kepala"/></center>
                            <p class="card-text text-white">Dengan adanya demam yang tinggi, Covid-19 seringkali diikuti dengan gejala sakit kepala.</p>
                        </div>
                        <div class="col-md-3 m-3 p-3 border border-dark shadow p-3 mb-5 bg-danger rounded">  
                            <h5 class="card-title text-center text-white">Lemas</h5>
                            <center><img src="images/lemas.png" alt="lemas"/></center>
                            <p class="card-text text-white">Infeksi Covid-19 yang telah menyebar ke seluruh tubuh akan menghabiskan energi yang banyak sehingga seringkali dapat mengakibatkan lemas.</p>
                        </div>
                        <div class="col-md-4 m-3 p-3 border border-dark shadow p-3 mb-5 bg-danger rounded">  
                            <h5 class="card-title text-center text-white">Sesak Nafas</h5>
                            <center><img src="images/sesak.png" alt="sesak nafas"/></center>
                            <p class="card-text text-white">Apabila Covid-19 berkembang dengan cepat dan besar di paru-paru, fungsi paru akan menurun sehingga terjadi sesak nafas.</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
        `;
    }
  }
  
  customElements.define("gejala-info", GejalaInfo);