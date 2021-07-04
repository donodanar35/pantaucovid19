import $ from "jquery";
import "bootstrap";
import "chart.js";
import "../components/grafik_info.js";

const convert_bulan = (month) =>{
    if(month == "01"){
        return "Januari";
    }else if(month == "02"){
        return "Februari";
    }else if(month == "03"){
        return "Maret";
    }else if(month == "04"){
        return "April";
    }else if(month == "05"){
        return "Mei";
    }else if(month == "06"){
        return "Juni";
    }else if(month == "07"){
        return "Juli";
    }else if(month == "08"){
        return "Agustus";
    }else if(month == "09"){
        return "September";
    }else if(month == "10"){
        return "Oktober";
    }else if(month == "11"){
        return "November";
    }else if(month == "12"){
        return "Desember";
    }else{
        return month;
    }
}

//grafik negara pembanding
const GetCovidGrafik = (paramNegara = "indonesia",paramtglawal = "2020-01-01",paramtglakhir = "2020-07-31", paramcarinegara) => {
    paramNegara = paramNegara.toLowerCase();
    paramNegara = paramNegara.replace(" ","-");
    if(paramtglawal > paramtglakhir){
        alert("Tanggal awal tidak boleh lebih dari tanggal akhir");
    }else{
        fetch(`https://api.covid19api.com/country/${paramNegara}/status/confirmed?from=${paramtglawal}&to=${paramtglakhir}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            let tgl = [];
            let covid = [];
            let negara = "Perkembangan Kasus Akumulatif Covid-19 di ";
            if(responseJson.length > 0){
                let temp_tgl = "";
                for(let i = 0; i < responseJson.length; i++) {
                    temp_tgl = responseJson[i].Date.toString().split("-");
                    tgl.push(`${temp_tgl[2].substr(0,2)} ${convert_bulan(temp_tgl[1])} ${temp_tgl[0]}`);
                    covid.push(responseJson[i].Cases);
                }
                negara = `${negara}${responseJson[responseJson.length-1].Country}`;
                if(paramcarinegara =="new"){
                    newjChart(negara, tgl, covid);
                }else{
                    jChart(negara, tgl, covid);
                }   
            }else{
                alert("Tidak ditemukan!");
            }
        })
        .catch(error => {
            alert(error);
            console.log(error);
        });
    }
}

const jChart = (NamaNegara, DataTgl, DataCovid) => {
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: DataTgl,
            datasets: [{
                label: NamaNegara,
                data: DataCovid,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    stacked: true
                }]
            }
        }
    });
};

const newjChart = (NamaNegara, DataTgl, DataCovid) => {
    $('#myChart').remove(); 
    $('#kanvas').append('<canvas id="myChart" width="400" height="400"></canvas>');
    const cty = document.getElementById('myChart');
    const myChart = new Chart(cty, {
        type: 'line',
        data: {
            labels: DataTgl,
            datasets: [{
                label: NamaNegara,
                data: DataCovid,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    stacked: true
                }]
            }
        }
    });
  };


const carinegara_grafik = document.getElementById("carinegara");
carinegara_grafik.addEventListener("click", 
    function pencarian(){
        const negara = document.getElementById("negara").value;
        const tglawal = document.getElementById("tanggalawal").value;
        const tglakhir = document.getElementById("tanggalakhir").value;
        const carinegara = document.getElementById("carinegara").value;
        GetCovidGrafik(negara, tglawal, tglakhir, carinegara);    
    }
);

GetCovidGrafik();