import "bootstrap";

class JumbotronInfo extends HTMLElement {

    constructor() {
        super();
    }
  
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <div class="jumbotron">
            <div class="text-center mt-3">
                <h1 class="display-4">Pantau Covid-19</h1>
                <p class="lead text-center">Memantau Perkembangan Terkini Covid-19</p>
                <p class="lead text-center" id="tgl-update">Diperbarui: </p>
            </div>
            <hr class="my-4">
            <div class="row">
                <div class="col-lg-6">                    
                    <div class="card bg-danger" style="max-width: 680px;">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                            <img src="images/indonesia.jpg" class="card-img" alt="bendera Indonesia">
                            </div>
                            <div class="col-md-8">
                            <div class="card-body text-white">
                                <p id="statistik-indonesia"></p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">                    
                    <div class="card bg-info" style="max-width: 680px;">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                            <img src="images/pbb.jpg" class="card-img" alt="bendara pbb">
                            </div>
                            <div class="col-md-8">
                            <div class="card-body text-white">
                                <p id="statistik-global"></p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
  }
  
  customElements.define("jumbotron-info", JumbotronInfo);