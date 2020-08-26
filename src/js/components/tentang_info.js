import "bootstrap";

class TentangInfo extends HTMLElement {

    constructor() {
        super();
    }
  
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <br/><br/>
        <div class="container mb-3" style="max-width: 96%;">
        <div class="row content">
            <article class="col-lg-12">
                <header class="judul" id="header-hotline">
                    <h2 class="text-center">Tentang Pengembang</h2>
                </header>
                <div class="row">
                    <div class="col-lg-12"> 
                        <figure>
                            <center>
                                <img id="foto" with="60%" src="images/me.png" alt="Danar Dono">
                                <figcaption>Foto Pengembang</figcaption>
                            </center>
                        </figure>
                        <p>
                            Perkenalkan, saya Danar Dono selaku pengembang <strong> pantau covid19 </strong>. Website ini saya dedikasikan untuk mengedukasi masyarakat seputar info terkini seputar covid-19 baik statistik penularan di berbagai negara, grafik perkembangan akumulatif kasusnya hingga identifikasi gejala covid-19, upaya pencegahan penularan covid-19, serta hotline yang bisa dihubungi jika sewaktu-waktu dibutuhkan masyarakat terkait pelayanan dan informasi seputar covid-19 khususnya di pulau Jawa.   
                        </p>
                        <p>
                            Pengembang berharap dengan website ini setidaknya bisa memberikan edukasi bagi masyarakat guna meningkatkan kesadaran atas bahaya covid-19 dan disiplin mematuhi protokol kesehatan. Semoga pandemi covid-19 segera berakhir. Jika Anda memiliki kritik, saran dan masukan, atau sekedar ingin silahturahmi dengan pengembang, silahkan kunjungi akun media sosial pengembang pada tautan di bawah ini. Terima kasih, semoga bermanfaat.
                        </p>
                        <center>
                            <a target="_blank" class="sosmed-link ml-2" href="https://web.facebook.com/danar.dono3/">
                                <img class="medsos" width="5%" src="images/fb.png" alt="facebook">
                            </a>
                            <a target="_blank" class="sosmed-link ml-2" href="https://www.instagram.com/mas.danar_dono/">
                                <img class="medsos" width="5%" src="images/IG.png" alt="instagram">
                            </a>
                            <a target="_blank" class="sosmed-link ml-2" href="https://id.quora.com/profile/Danar-Dono-1">
                                <img class="medsos" width="5%" src="images/quora.png" alt="instagram">
                            </a>
                        </center><br/>
                    </div>
                </div>
            </article><br/>
        </div>
    </div>`;
    }
  }
  
  customElements.define("tentang-info", TentangInfo);