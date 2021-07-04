import "bootstrap";

class HotlineInfo extends HTMLElement {

    constructor() {
        super();
    }
  
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <div class="container mb-3" style="max-width: 96%;">
        <div class="row content">
            <article class="col-lg-12">
                <header class="judul" id="header-hotline">
                    <h2 class="text-center">Hotline</h2>
                    <p class="lead text-center">Untuk informasi dan layanan terkait Covid-19 silahkan hubungi kontak berikut:</p>
                </header>
                <div class="row">
                    <div class="col-md-4 border border-dark shadow p-3 mb-5 bg-white rounded m-3 p-3 align-center">                    
                        <h5 class="card-title text-center text-black">Kementerian Kesehatan RI</h5>
                        <center><img src="images/kemenkes.png" alt="Logo Kementerian Kesehatan RI"/></center>
                        <p class="card-text text-black text-center">
                            021-5210-411<br/>
                            0812-1212-3119</br>
                            <a href="https://covid19.go.id" target="_blank" class="link">covid19.go.id</a>
                        </p>
                    </div>
                    <div class="col-md-3 border border-dark shadow p-3 mb-5 bg-white rounded m-3 p-3 align-center align-center">                    
                        <h5 class="card-title text-center text-black">Pemprov DKI Jakarta</h5>
                        <center><img src="images/dki.png" class="align-center" alt="Logo Pemprov DKI"/></center>
                        <p class="card-text text-black text-center">
                            112<br/>
                            0813-8837-6955<br/>                                    
                            <a href="https://corona.jakarta.go.id" target="_blank" class="link">corona.jakarta.go.id</a>
                        </p>
                    </div>
                    <div class="col-md-4 border border-dark shadow p-3 mb-5 bg-white rounded m-3 p-3 align-center">                    
                        <h5 class="card-title text-center text-black">Pemprov Jawa Tengah</h5>
                        <center><img src="images/jateng.png" class="align-center" alt="Logo Pemprov Jawa Tengah"/></center>
                        <p class="card-text text-black text-center">
                            024-358-0713<br/>
                            0823-1360-0560<br/>
                            <a href="https://corona.jatengprov.go.id" target="_blank" class="link">corona.jatengprov.go.id</a>
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 border border-dark shadow p-3 mb-5 bg-white rounded m-3 p-3 align-center">                    
                        <h5 class="card-title text-center text-black">Pemprov Jawa Timur</h5>
                        <center><img src="images/jatim.png" class="align-center" alt="Logo Pemprov Jawa Timur"/></center>
                        <p class="card-text text-black text-center">
                            031-843-0313<br/>
                            0813-3436-7800<br/>
                            <a href="http://infocovid19.jatimprov.go.id" target="_blank" class="link">infocovid19.jatimprov.go.id</a>
                        </p>
                    </div>
                    <div class="col-md-3 border border-dark shadow p-3 mb-5 bg-white rounded m-3 p-3 align-center">                    
                        <h5 class="card-title text-center text-black">Pemprov Jawa Barat</h5>
                        <center><img src="images/jabar.png" class="align-center" alt="Logo Pemprov Jawa Barat"/></center>
                        <p class="card-text text-black text-center">
                            119<br/>
                            0811-209-3306<br/>
                            <a href="https://pikobar.jabarprov.go.id" target="_blank" class="link">pikobar.jabarprov.go.id</a>
                        </p>
                    </div>
                    <div class="col-md-4 border border-dark shadow p-3 mb-5 bg-white rounded m-3 p-3 align-center">                   
                        <h5 class="card-title text-center text-black">Pemprov DIY</h5>
                        <center><img src="images/diy.png" class="align-center" alt="Logo Pemprov DIY"/></center>
                        <p class="card-text text-black text-center">
                            0274-555-585<br/>
                            0811-2764-800<br/>
                            <a href="https://corona.jogjaprov.go.id" target="_blank" class="link">corona.jogjaprov.go.id
                        </a>
                        </p>
                    </div>
                </div>
            </article><br/>
        </div>
    </div>`;
    }
  }
  
  customElements.define("hotline-info", HotlineInfo);