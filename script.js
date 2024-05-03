window.onload = function() {printTime();}

    function printTime() {

        function normalizaTempo(tempo) {
            return tempo < 10 ? '0' + tempo : tempo;
        }

        var D = new Date();
        var horas = normalizaTempo(D.getHours());
        var minutos = normalizaTempo(D.getMinutes());
        var segundos = normalizaTempo(D.getSeconds());
        var data = normalizaTempo(D.getDate());
        var dia = D.getDay();
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

        mes = (mes < 9 ? "0" : "") + (mes + 1);

        document.getElementById("horas").innerHTML = horas + ":" + minutos + ":" + segundos;
        document.getElementById("semana").innerHTML = dia + " - " + data + '/' + mes + "/" + ano;
    }
    setInterval(printTime, 1000);