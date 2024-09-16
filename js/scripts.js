$(document).ready(function() {

    var bt_nr = '';
    
    //$('#txt_display').mask('000\'000\'000\'000\'000' , {reverse: true});

    $('.bt_nr').click(function() {
        var n = $(this).text();

        if(n == '0' || n == '00' ) {

            if(bt_nr.lenght < 0) {
 
               bt_nr = bt_nr.concat(n);

           }
    } else { 
        
        bt_nr = bt_nr.concat(n);

    }

        $('#txt-display').val(bt_nr);
    });

})


