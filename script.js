window.onload = function() {

    function printTime() {
        var D = new Date();
        var horas = D.getHours();
        var minutos = D.getMinutes();
        var segundos = D.getSeconds();
        var dia = D.getDay();
        var data = D.getDate();
        var mes = D.getMonth();
        var ano = D.getFullYear();

        switch(dia) {
            case 0:
                dia = "Domingo";
                break;
            case 1:
                dia = "Segunda-Feira";
                break;
            case 2:
                dia = "Terça-Feira";
                break;
            case 3:
                dia = "Quarta-Feira";
                break;
            case 4:
                dia = "Quinta-Feira";
                break;
            case 5:
                dia = "Sexta-Feira";
                break;
            case 6:
                dia = "Sábado";
                break;
        }


        if(data < 10) {
            data = "0" + data;
        }
        if(horas < 10){
            horas = "0" + horas;
        }
        if(minutos < 10) {
            minutos = "0" + minutos;
        }
        if(segundos < 10) {
            segundos = "0" + segundos;
        }

        mes = (mes < 9 ? "0" : "") + (mes + 1);

        document.getElementById("horas").innerHTML = horas + ":" + minutos + ":" + segundos;
        document.getElementById("semana").innerHTML = dia + " - " + data + '/' + mes + "/" + ano;
    }
    setInterval(printTime, 1000);
