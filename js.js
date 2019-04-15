$(function(){
    var cenapro = 4.41;
    var cenanar = 0.52;
    var cenausz = 0.45;
    var cenasia = 5.9;
    var cenazac = 0.14;
    var cenapod = 0.07;
    var cenawie = 0.35;
    var cenaw = 0;
    var cenak = 0;
    var iloscsztuk = 0;

    $('.podlicz').click(function(){
        var utnijszer = "(Utnij:"+(($('.szer').val())-39)+" )";
        var utnijwys = "(Utnij:"+(($('.wys').val())-39)+" )";
        var szer=($('.szer').val())/1000;
        var wys=($('.wys').val())/1000;
        var ile=1;
        if ($('.szt').val()){
            ile=$('.szt').val();
        };
        var obw=(szer+wys)*2;
        var dlaklienta = 0;
        var poprzeczka = 0;
        if($('.pop').is(':checked')){
            poprzeczka = (szer*7)+0.6;
        };
        var cenabrutto = (((obw*cenapro)+(4*cenanar)+((szer*wys)*cenasia)+(8*cenazac)+(8*cenapod)+cenawie+(obw*cenausz)+poprzeczka)*0.85)*1.23;
        cenabrutto=cenabrutto*ile;
        dlaklienta=cenabrutto*3;
        dotabelki(szer.toFixed(3),utnijwys,wys.toFixed(3),utnijszer,ile,cenabrutto.toFixed(2),dlaklienta.toFixed(2));
    });
    $(document).on('click', '.delete',function(){
        $(this).closest('tr').remove();
    });
    $(document).on('click', '#body', function(){
        var ck = $('.ck');
        var cw = $('.cw');
        var il = $('.il')
        cenaw = 0;
        cenak = 0;
        ilesz = 0;
        ck.each(function() {
            var value = $(this).text();
            // add only if the value is number
            if(!isNaN(value) && value.length != 0) {
                cenak += parseFloat(value);
            }
        });
        cw.each(function() {
            var value = $(this).text();
            // add only if the value is number
            if(!isNaN(value) && value.length != 0) {
                cenaw += parseFloat(value);
            }
        });
        il.each(function() {
            var value = $(this).text();
            // add only if the value is number
            if(!isNaN(value) && value.length != 0) {
                ilesz += parseFloat(value);
            }
        });
        $('.cenawytw').text(" (Koszt:"+cenaw.toFixed(2)+")");
        $('.cenaklient').text(cenak.toFixed(2));
        $('.sztuki').text(ilesz);
    });
    $(document).on('click', '.raport', ukryj);
});

function dotabelki(szerokosc,tnijwys,wysokosc,tnijszer,sztuk,koszt,cena){
    $('table tr:last').before('<tr><th>'+szerokosc+'<i>'+tnijszer+'</i>'+'</th><th>'+wysokosc+'<i>'+tnijwys+'</i>'+'</th><th class="il">'+sztuk+'</th><th><b class="ck">'+cena+'</b><i> (Koszt:<i class="cw">'+koszt+'</i>)</i></th><th class="del"><input type="button" class="delete" value="x"></th></tr>');
}

function ukryj(){
    var doskitrania = $('i');
    for(i=0; i<=$('i').length;i++){
        doskitrania[i].classList.toggle('schowane');
    }   
}