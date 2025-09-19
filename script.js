const teams = {
  ceo: [
    {
      role: "CEO",
      nama: "Tarzz",
      alamat: "Sidoarjo",
      telp: "0812-XXXX-XXXX",
      kelas: "VIII SMP",
      foto: "assets/7arzz.jpg",
    },
    {
      role: "Sekretaris",
      nama: "Tarzz",
      alamat: "Sidoarjo",
      telp: "0812-XXXX-XXXX",
      kelas: "VIII SMP",
      foto: "assets/7arzz.jpg",
    },
  ],
  marketing: [
    {
      role: "Direktur Marketing",
      nama: "Andi",
      alamat: "Surabaya",
      telp: "0812-3456-7890",
      kelas: "VIII SMP",
      foto: "assets/7arzz.jpg",
    },
    {
      role: "Manager Marketing",
      nama: "Budi",
      alamat: "Sidoarjo",
      telp: "0822-9876-5432",
      kelas: "IX SMP",
      foto: "assets/7arzz.jpg",
    },
    {
      role: "Tim Marketing",
      nama: "Citra",
      alamat: "Gresik",
      telp: "0856-1111-2222",
      kelas: "VIII SMP",
      foto: "assets/7arzz.jpg",
    },
  ],
  finance: [
    {
      role: "Direktur Finance",
      nama: "Farhan",
      alamat: "Surabaya",
      telp: "0812-1111-2222",
      kelas: "IX SMP",
      foto: "assets/7arzz.jpg",
    },
    {
      role: "Manager Finance",
      nama: "Rina",
      alamat: "Sidoarjo",
      telp: "0822-3333-4444",
      kelas: "VIII SMP",
      foto: "assets/7arzz.jpg",
    },
    {
      role: "Tim Finance",
      nama: "Dika",
      alamat: "Gresik",
      telp: "0856-5555-6666",
      kelas: "VIII SMP",
      foto: "assets/7arzz.jpg",
    },
  ],
};

const container = document.getElementById("teamContainer");

for (const dept in teams) {
  teams[dept].forEach((person) => {
    const div = document.createElement("div");
    div.className = "col-md-4 col-sm-6";

    div.innerHTML = `
      <div class="card team-card p-3 shadow-sm">
        <img src="${person.foto}" class="mx-auto mb-3" width="120" height="120" alt="${person.role}">
        <h5 class="fw-bold fs-3">${person.role}</h5>
        <div class="info">
          <p class="fw-bold fs-5" style="color: #ffffff;"><b>Nama:</b> ${person.nama}</p>
          <p class="fw-bold fs-5" style="color: #ffffff;"><b>Alamat:</b> ${person.alamat}</p>
          <p class="fw-bold fs-5" style="color: #ffffff;"><b>No Telepon:</b> ${person.telp}</p>
          <p class="fw-bold fs-5" style="color: #ffffff;"><b>Kelas:</b> ${person.kelas}</p>
        </div>
      </div>
    `;

    const card = div.querySelector(".card");
    const infoDiv = div.querySelector(".info");

    card.onclick = () => {
      if (infoDiv.style.display === "block") {
        infoDiv.style.opacity = "0";
        setTimeout(() => (infoDiv.style.display = "none"), 400);
      } else {
        infoDiv.style.display = "block";
        setTimeout(() => (infoDiv.style.opacity = "1"), 10);
      }
    };

    container.appendChild(div);
  });
}
