import $ from "jquery";
import "bootstrap";
import "chart.js";
import "../components/statistik_info.js";

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

const GetCovidGlobal = () => {
    fetch("https://api.covid19api.com/summary")
     .then(response => {
        return response.json();
    })
     .then(responseJson => {
        if(responseJson.Countries){
            //tampilkan statistik covid di dunia
            let number = responseJson.Countries.length;
            let temp_update = "";
            
            for(let i = 0; i < responseJson.Countries.length; i++) {
                let obj = responseJson.Countries[i];
                let x = document.getElementById('tabel-covid-dunia').insertRow(1);
                let no = x.insertCell(0);
                let negara = x.insertCell(1);
                let diperbarui = x.insertCell(2);
                let newConformed = x.insertCell(3);
                let newSembuh = x.insertCell(4);
                let newMeninggal = x.insertCell(5);
                let positif = x.insertCell(6);
                let sembuh = x.insertCell(7);
                let meninggal = x.insertCell(8);

                no.innerHTML = number;
                number = number - 1;
                negara.innerHTML = obj.Country;
                negara.setAttribute("class","text-left");
                temp_update = obj.Date.toString().split("-");
                diperbarui.innerHTML = `${temp_update[2].substr(0,2)} ${convert_bulan(temp_update[1])} ${temp_update[0]}`;
                diperbarui.setAttribute("class","text-left");
                newConformed.innerHTML = `<span>+${new Intl.NumberFormat().format(obj.NewConfirmed)}</span>`;
                newConformed.setAttribute("class","text-right text-warning");
                newSembuh.innerHTML = `<span>+${new Intl.NumberFormat().format(obj.NewRecovered)}</span>`;
                newSembuh.setAttribute("class","text-right text-success");
                newMeninggal.innerHTML = `<span>+${new Intl.NumberFormat().format(obj.NewDeaths)}</span>`;
                newMeninggal.setAttribute("class","text-right text-danger");
                positif.innerHTML = `<span>${new Intl.NumberFormat().format(obj.TotalConfirmed)}</span>`;
                positif.setAttribute("class","text-right text-warning");
                sembuh.innerHTML = `<span>${new Intl.NumberFormat().format(obj.TotalRecovered)}</span>`;
                sembuh.setAttribute("class","text-right text-success");
                meninggal.innerHTML = `<span>${new Intl.NumberFormat().format(obj.TotalDeaths)}</span>`;
                meninggal.setAttribute("class","text-right text-danger");

                //tampilkan info covid Indonesia
                if(obj.Country == "Indonesia"){
                    temp_update = obj.Date.toString().split("-"); 
                    document.getElementById("tgl-update").innerHTML = `Diperbarui: ${temp_update[2].substr(0,2)} ${convert_bulan(temp_update[1])} ${temp_update[0]}`;
                    document.getElementById("statistik-indonesia").innerHTML = 
                    `<table>
                        <tr>
                            <td>Harian Positif </td>
                            <td class="text-dark text-right">
                                <span>+${new Intl.NumberFormat().format(obj.NewConfirmed)}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Harian Sembuh </td>
                            <td class="text-white text-right">
                                <span>+${new Intl.NumberFormat().format(obj.NewRecovered)}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Harian Meninggal </td>
                            <td class="text-warning text-right">
                                <span>+${new Intl.NumberFormat().format(obj.NewDeaths)}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Total Positif </td>
                            <td class="text-dark text-right">
                                <span>${new Intl.NumberFormat().format(obj.TotalConfirmed)}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Total Sembuh </td>
                            <td class="text-white text-right">
                                <span>${new Intl.NumberFormat().format(obj.TotalRecovered)}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Total Meninggal </td>
                            <td class="text-warning text-right">
                                <span>${new Intl.NumberFormat().format(obj.TotalDeaths)}</span>
                            </td>
                        </tr>
                    </table>`; 
                }
            }

            //tampilkan info covid global
            document.getElementById("statistik-global").innerHTML =  
            `<table>
                <tr>
                    <td>Harian Positif </td>
                    <td class="text-dark text-right">
                        <span>+${new Intl.NumberFormat().format(responseJson.Global.NewConfirmed)}</span>
                    </td>
                </tr>
                <tr>
                    <td>Harian Sembuh </td>
                    <td class="text-white text-right">
                        <span>+${new Intl.NumberFormat().format(responseJson.Global.NewRecovered)}</span>
                    </td>
                </tr>
                <tr>
                    <td>Harian Meninggal </td>
                    <td class="text-warning text-right">
                        <span>+${new Intl.NumberFormat().format(responseJson.Global.NewDeaths)}</span>
                    </td>
                </tr>
                <tr>
                    <td>Total Positif </td>
                    <td class="text-dark text-right">
                        <span>${new Intl.NumberFormat().format(responseJson.Global.TotalConfirmed)}</span>
                    </td>
                </tr>
                <tr>
                    <td>Total Sembuh </td>
                    <td class="text-white text-right">
                        <span>${new Intl.NumberFormat().format(responseJson.Global.TotalRecovered)}</span>
                    </td>
                </tr>
                <tr>
                    <td>Total Meninggal </td>
                    <td class="text-warning text-right">
                        <span>${new Intl.NumberFormat().format(responseJson.Global.TotalDeaths)}</span>
                    </td>
                </tr>
            </table>`;
        }else{
            alert('not found!');
        }
    })
     .catch(error => {
         alert(error);
        console.log(error);
    });
}

GetCovidGlobal();
