function orderNow(paket) {
    const nomorWA = "628xxxxxxxxxx"; // GANTI KE NOMOR KAMU
    const pesan = `Halo, saya ingin order joki ML untuk paket: ${paket}`;
    const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

    window.open(url, "_blank");
}