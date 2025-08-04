function validasiForm() {
    var nama = document.forms["formReservasi"]["nama"].value;
    var nohp = document.forms["formReservasi"]["nohp"].value;
    var layanan = document.forms["formReservasi"]["layanan"].value;
    var tanggal = document.forms["formReservasi"]["tanggal"].value;
    var dp = document.forms["formReservasi"]["dp"].value;

    if (nama == "" || nohp == "" || layanan == "" || tanggal == "" || dp == "") {
        alert("Semua kolom harus diisi!");
        return false;
    } else {
        alert("Reservasi berhasil!");
        window.location.href = "invoice.html"; 
        return false; 
    }
}
