$(function(){
    var cenapro = 4.41;
    var cenanar = 0.52;
    var cenausz = 0.45;
    var cenasia = 5.9;
    var cenazac = 0.14;
    var cenapod = 0.07;
    var cenawie = 0.35;

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
        dotabelki(wys.toFixed(3),utnijwys,szer.toFixed(3),utnijszer,ile,cenabrutto.toFixed(2),dlaklienta.toFixed(2));
    });

    $(document).on('click', '.delete',function(){
        $(this).closest('tr').remove();
    });


});


function dotabelki(wysokosc,tnijwys,szerokosc,tnijszer,sztuk,koszt,cena){
    $('table tr:last').after('<tr><th>'+wysokosc+tnijwys+'</th><th>'+szerokosc+tnijszer+'</th><th>'+sztuk+'</th><th>'+koszt+'</th><th>'+cena+'</th><th><input type="button" class="delete" value="x"></th></tr>');
}