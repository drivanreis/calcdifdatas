var vta = new Date()
var vTempoAtual = String(vta.getDate()).padStart(2,"0") + "/" + String(vta.getMonth()+1).padStart(2,"0") + "/" + String(vta.getFullYear()).padStart(2,"0") + " " + String(vta.getHours()).padStart(2,"0") + ":" + String(vta.getMinutes()).padStart(2,"0") + ":" + String(vta.getSeconds()).padStart(2,"0") + ":" + String(vta.getMilliseconds()).padStart(4,"0")

function Carregar(){  
    var cxTempoAtual = window.document.getElementById("IdTempoAtual") // Peguei o objeto HTML
    cxTempoAtual.innerHTML = "Tempo Atual: " + vTempoAtual   
 }
 
 function Mostar(){
    var cxResposta = window.document.getElementById("idResposta") // Peguei o objeto HTML
    cxResposta.innerHTML = "Resposta: O Tempo Total Foi de: " + Calcula()
 }
 
 function Calcula(){

    // TEMPO INICIAL
    var idCxDataIni = String(window.document.getElementById("idCxDataIni").value)
    var idCxHoraIni = String(window.document.getElementById("idCxHoraIni").value)
    var idCxSegIni = String(window.document.getElementById("idCxSegIni").value)
    var idCxMilIni = parseFloat(window.document.getElementById("idCxMilIni").value)

    // TEMPO FINAL
    var idCxDataFin = String(window.document.getElementById("idCxDataFin").value)
    var idCxHoraFin = String(window.document.getElementById("idCxHoraFin").value)
    var idCxSegFin = String(window.document.getElementById("idCxSegFin").value)
    var idCxMilFin = parseFloat(window.document.getElementById("idCxMilFin").value)

    if(idCxMilFin >= idCxMilIni){
        respMil = idCxMilFin - idCxMilIni
        
    } else {
        idCxSegFin = idCxSegFin - 1
        idCxMilFin = idCxMilFin + 1000
        respMil = idCxMilFin - idCxMilIni
    }

    // TEMPO TOTAL
    var vTempoTotal = dfData(fData(idCxDataIni), fData(idCxDataFin), idCxHoraIni, idCxHoraFin, idCxSegIni, idCxSegFin ) // 5.123456789 Dias
    //  vDiaEfra                          // 5.123456789 Dias
    var vSoDia = Math.trunc(vTempoTotal)  // 5 Dias
    var vDiaSoFra = vTempoTotal - vSoDia  // 5.123456789 Dias - 5 Dias = 0,123456789 Dias
    var vHoraEfra = vDiaSoFra * 24          // 0,123456789 Dias x 24hs = 2.962962936 Horas
    var vSoHora = Math.trunc(vHoraEfra)   // 2 Horas
    var vHoraSoFra = vHoraEfra - vSoHora  // 2.962962936 Horas - 2 Horas = 0.962962936 Horas
    var vMinEfra = vHoraSoFra * 60          // 0.962962936 Horas * 60 = 57.77777616 Minutos
    var vSoMin = Math.trunc(vMinEfra)     // 57 Minutos
    var vMinSoFra = vMinEfra - vSoMin     // 57.77777616 Minutos - 57 = 0.77777616 Minutos
    var vSegEfra = vMinSoFra * 60         // 0.77777616 Minutos * 60 = 46.6665696 Segundos.
    var vSoSeg = Math.trunc(vSegEfra)     // 46 Segundos
    var vSegSoFra = vSegEfra - vSoSeg      // 46.6665696 Segundos - 46 Segundos = 0.6665696 Segundos
    var vMilEfra = vSegSoFra * 1000       // 0.6665696 Segundos * 1000 = 666.5696 Milesimos
    var vSoMil = Math.trunc(vMilEfra)     // 666 Milesimos

   
    //PAREI AQUI!!!! TENHO QUE ACERTAR, A COVERSÃO DE UNIDADES!!!
    return vSoDia + " Dias e " + vSoHora + " Horas e " + vSoMin + " Minutos e " + vSoSeg + " Segundos e " + vSoMil + " Milésimos"

 }

 function fData(tx){ //Formata a data de 2021-06-01 para 01/06/2021.
    var at = tx.split("-")
    return at[2] + "/" + at[1] + "/" + at[0]
}

function dfData(d1,d2,h1,h2,s1,s2){ // Calcula a diferença entre datas e retorna em dias.
    var d1 = d1 + " " + h1 + ":" + s1
    var d2 = d2 + " " + h2 + ":" + s2
    var diff = moment(d2,"DD/MM/YYYY HH:mm:ss").diff(moment(d1,"DD/MM/YYYY HH:mm:ss"));
    var dias = moment.duration(diff).asDays();
    return dias
}
