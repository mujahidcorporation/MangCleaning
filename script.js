const nomorWhatsApp = "6282113949719"; // Ganti dengan nomor WhatsApp kamu

fetch("data.json")
  .then(response => response.json())
  .then(data => {
    const layananList = document.getElementById("layanan-list");

    data.layanan.forEach(item => {
      const layananDiv = document.createElement("div");
      layananDiv.className = "layanan-item";

      const pesan = encodeURIComponent(`Halo, saya ingin memesan jasa ${item.nama}`);

      layananDiv.innerHTML = `
        <img src="${item.gambar}" alt="${item.nama}">
        <div class="layanan-content">
          <h3>${item.nama}</h3>
          <p>${item.deskripsi}</p>
          <a class="wa-button" href="https://wa.me/${nomorWhatsApp}?text=${pesan}" target="_blank" rel="noopener noreferrer">
            Pesan via WhatsApp
          </a>
        </div>
      `;

      layananList.appendChild(layananDiv);
    });
  })
  .catch(error => console.error("Gagal memuat data:", error));
