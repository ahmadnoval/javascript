function hitung(){
    //tangkap id form
    var frm = document.getElementById('calcForm');
    var angka1 = parseFloat(frm.angka1.value);
    var angka2 = parseFloat(frm.angka2.value);

    if (isNaN(frm.angka1.value) || isNaN(frm.angka2.value)) {
    alert("Harap masukkan angka!!");
    }    
    else {
       var tombol = event.target.value;
       switch(tombol) {
        case 'btn_tambah' :
            total = angka1 + angka2;
            break;
        case 'btn_kurang' :
            total = angka1 - angka2;
            break;
        case 'btn_kali' :
            total = angka1 * angka2;
            break;
        case 'btn_bagi' :
            total = angka1 / angka2;
            break;
        case 'btn_pangkat' :
            total = angka1 ** angka2;
            break;

        default :
            break;
       }

       frm.hasil.value = total;
    } 
}

