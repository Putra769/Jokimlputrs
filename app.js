function orderNow(paket) {
    const nomorWA = "6285136332063"; // GANTI KE NOMOR KAMU
    const pesan = `Halo, saya ingin order joki ML untuk paket: ${paket}`;
    const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

    window.open(url, "_blank");
}