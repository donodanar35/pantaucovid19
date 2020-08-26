import "bootstrap";

class PanduanInfo extends HTMLElement {

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
                    <header class="judul" id="header-panduan">
                        <h2 class="text-center">Panduan Pencegahan Covid-19</h2>
                        <p class="lead text-center">Lakukan upaya pencegahan untuk meminimkan resiko terpapar Covid-19:</p>
                    </header>
                    <div class="row p-1">
                        <div class="col-md-4 bg-primary m-3 p-3 border border-dark shadow p-3 mb-5 rounded">   
                            <h5 class="card-title text-center text-white">Berolahraga</h5>
                            <center><img src="images/berolahraga.png" alt="berolahraga"/></center>
                            <p class="card-text text-white">Rutin berolahraga 15 menit sehari.</p>
                        </div>
                        <div class="col-md-3 bg-primary m-3 p-3 border border-dark shadow p-3 mb-5 rounded">
                            <h5 class="card-title text-center text-white">Vitamin</h5>
                            <center><img src="images/vitamin.png" alt="vitamin"/></center>
                            <p class="card-text text-white">Konsumsi vitamin C, B6, E sebagai penguat daya tahan tubuh.</p>
                        </div>
                        <div class="col-md-4 bg-primary m-3 p-3 border border-dark shadow p-3 mb-5 rounded"> 
                            <h5 class="card-title text-center text-white">Berjemur</h5>
                            <center><img src="images/berjemur.png" alt="berjemur"/></center>
                            <p class="card-text text-white">Dianjurkan berjemur selama 15 menit sebelum pukul 10.00 setidaknya 2 - 3 kali seminggu.</p>
                        </div>
                    </div>
                    <div class="row p-1">
                        <div class="col-md-4 bg-success m-3 p-3 border border-dark shadow p-3 mb-5 rounded">
                            <h5 class="card-title text-center text-white">Makan Bergizi</h5>
                            <center><img src="images/makanan_bergizi.png" alt="makanan bergizi"/></center>
                            <p class="card-text text-white">Konsumsi makanan bergizi secara teratur.</p>
                        </div>
                        <div class="col-md-3 bg-success m-3 p-3 border border-dark shadow p-3 mb-5 rounded"> 
                            <h5 class="card-title text-center text-white">Manajemen Stres</h5>
                            <center><img src="images/manajemen_stres.png" alt="manajemen stres"/></center>
                            <p class="card-text text-white">Manajemen waktu dan lakukan relaksasi.</p>
                        </div>
                        <div class="col-md-4 bg-success m-3 p-3 border border-dark shadow p-3 mb-5 rounded">
                            <h5 class="card-title text-center text-white">Tidur Seimbang</h5>
                            <center><img src="images/tidur.png" alt="tidur seimbang"/></center>
                            <p class="card-text text-white">Tidur cukup dan teratur serta hindari begadang.</p>
                        </div>
                    </div>
                    <div class="row p-1">
                        <div class="col-md-4 bg-warning m-3 p-3 border border-dark shadow p-3 mb-5 rounded">
                            <h5 class="card-title text-center text-white">Jaga Jarak</h5>
                            <center><img src="images/jaga_jarak.png" alt="jaga jarak"/></center>
                            <p class="card-text text-white">Jaga jarak 1 - 2 meter dan hindari kerumunan.</p>
                        </div>
                        <div class="col-md-3 bg-warning m-3 p-3 border border-dark shadow p-3 mb-5 rounded">
                            <h5 class="card-title text-center text-white">Pakai Masker</h5>
                            <center><img src="images/masker.png" alt="pakai masker"/></center>
                            <p class="card-text text-white">Pakai masker ketika keluar rumah atau saat sakit.</p>
                        </div>
                        <div class="col-md-4 bg-warning m-3 p-3 border border-dark shadow p-3 mb-5 rounded">
                            <h5 class="card-title text-center text-white">Cuci tangan</h5>
                            <center><img src="images/cuci_tangan.png" alt="cuci tangan"/></center>
                            <p class="card-text text-white">Hindari menyentuh muka dan selalu cuci tangan dengan sabun dan air mengalir setelah beraktivitas atau menyentuh benda.</p>
                        </div>
                    </div>
                    <div class="row p-1">
                        <div class="col-md-4 bg-info m-3 p-3 border border-dark shadow p-3 mb-5 rounded"> 
                            <h5 class="card-title text-center text-white">Work From Home (WFH)</h5>
                            <center><img src="images/workfromhome.png" alt="work from home"/></center>
                            <p class="card-text text-white">Jika memungkinkan lakukan bekerja dari rumah.</p>
                        </div>
                        <div class="col-md-3 bg-info m-3 p-3 border border-dark shadow p-3 mb-5 rounded">  
                            <h5 class="card-title text-center text-white">Study From Home (SFH)</h5>
                            <center><img src="images/studyfromhome.png" alt="study from home"/></center>
                            <p class="card-text text-white">Usahakan belajar dari rumah secara daring.</p>
                        </div>
                        <div class="col-md-4 bg-info m-3 p-3 border border-dark shadow p-3 mb-5 rounded">
                            <h5 class="card-title text-center text-white">Stay At Home</h5>
                            <center><img src="images/stayathome.png" alt="stay at home"/></center>
                            <p class="card-text text-white">Usahakan tetap di dalam rumah dan hindari aktivitas di luar kecuali mendesak.</p>
                        </div>
                    </div>
                </article><br/>
            </div>
        </div>
        `;
    }
  }
  
  customElements.define("panduan-info", PanduanInfo);