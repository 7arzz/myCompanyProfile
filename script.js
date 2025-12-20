window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 3000); // scroll ke atas 3 detik setelah halaman siap
});
const teams = [
  {
    role: "CEO",
    nama: "Alfina Amoerita Anggraini",
    kelas: "X Digital business 1",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "DIRECTOR OF PRODUCTION",
    nama: "Ardina Mozarella",
    kelas: "X office management 2",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "DIRECTOR OF MARKETING",
    nama: "Rimarcha Dwi Fellysia",
    kelas: "X business digital 2",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "DIRECTOR OF PUBLIC RELATIONS",
    nama: "Arika Rahmasari",
    kelas: "X Business Digital 1",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "DIRECTOR OF HRD",
    nama: "Salma Bunga Amelia",
    kelas: "X Accounting 3",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "DIRECTOR OF FINANCE",
    nama: "Shiva Shavira",
    kelas: "X Accounting 3",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "MANAGER RESEARCH AND DEVELOPMENT ",
    nama: "Shafa Aliyah Renata",
    kelas: "X Business Digital 2",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "MANAGER PRODUCTION",
    nama: "Rina Anggraini",
    kelas: "X Business Digital 2",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "PURCHASING MANAGER",
    nama: "Wilujeng Naisilah Chusnul Pratama",
    kelas: "X Accounting 2",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "QUALITY CONTROL MANAGER",
    nama: "Abimanyu Yoga Perdana",
    kelas: "X Business Digital 2",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "MANAGER MARKETING",
    nama: "Andaru Ilham Amerta",
    kelas: "X Software Engineering ",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "SALES MARKETING",
    nama: "Della Savira Damayanti",
    kelas: "X Business Digital 1",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "SALES MARKETING",
    nama: "Khansa Aisya Zhafira",
    kelas: "X Accounting 1",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "MARKETING RESEARCH",
    nama: "Geisya Odelia Bagus",
    kelas: "X Visual Communication Design 2",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "CREATIVE DESIGN",
    nama: "Audrey Zahra Amaura",
    kelas: "X Visual Communication Design 3",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "PUBLIC RELATIONS MANAGER",
    nama: "Mayumi Rahayu Wahyu N",
    kelas: "X Business Digital 1",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "PUBLIC RELATIONS MANAGER",
    nama: "Dhiny Ayuningtyas",
    kelas: "X Business Digital 1",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "COMMUNITY MANAGER",
    nama: "Dian Maulida",
    kelas: "X Business Digital 2",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "TRAINING DEVELOPMENT MANAGER",
    nama: "Widya Pramundita Putri",
    kelas: "X Accounting 2",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "ATTANDACE AND PAYROLL",
    nama: "Nayra Salsabilla",
    kelas: "X Office Management 1",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "MANAGER FINANCE 1",
    nama: "Keyla Nur Azizah Putriani",
    kelas: "X Accounting 1",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "MANAGER FINANCE 2",
    nama: "Cinta Azzahra Putri L",
    kelas: "X Accounting 3",
    foto: "assets/7arzz.jpg",
  },
  {
    role: "SECRETARY",
    nama: "Wahyu Siva Ayuningtyas",
    kelas: "X Business Digital 1",
    foto: "assets/7arzz.jpg",
  },
];

const container = document.getElementById("teamContainer");

teams.forEach((person) => {
  const div = document.createElement("div");
  div.className = "col-md-4 col-sm-6 mb-4";

  div.innerHTML = `
    <div class="card team-card p-3 shadow-sm data-aos="zoom-out-down"">
      <img src="${person.foto}" class="mx-auto mb-3 img-fluid rounded-circle" width="120" height="120" alt="${person.role}">
      <h5 class="fw-bold fs-3">${person.role}</h5>
      <div class="info">
        <p><strong>Nama:</strong> ${person.nama}</p>
        <p><strong>Kelas:</strong> ${person.kelas}</p>
      </div>
    </div>
  `;

  const card = div.querySelector(".card");
  const infoDiv = div.querySelector(".info");

  infoDiv.style.transition = "all 0.5s ease";
  infoDiv.style.maxHeight = "0";
  infoDiv.style.opacity = "0";
  infoDiv.style.overflow = "hidden";

  card.addEventListener("click", () => {
    const isOpen = infoDiv.classList.contains("open");

    if (isOpen) {
      infoDiv.classList.remove("open");
      infoDiv.style.maxHeight = "0";
      infoDiv.style.opacity = "0";
    } else {
      infoDiv.classList.add("open");
      infoDiv.style.maxHeight = infoDiv.scrollHeight + "px";
      infoDiv.style.opacity = "1";
    }
  });

  container.appendChild(div);
});

// Scroll animation
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
});

const texts = [
  "Initializing system...",
  "Connecting AI...",
  "Optimizing data...",
  "Welcome to Artheva!",
];

window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  const loadingText = document.querySelector("#loading p");
  let index = 0;
  let charIndex = 0;

  function typeText() {
    if (charIndex < texts[index].length) {
      loadingText.textContent += texts[index].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, 40); // kecepatan ketik halus
    } else {
      // jeda antar kalimat biar lebih natural
      setTimeout(() => {
        loadingText.style.transition = "opacity 0.6s ease";
        loadingText.style.opacity = "0";

        setTimeout(() => {
          charIndex = 0;
          index++;

          if (index < texts.length) {
            // lanjut ke kalimat berikut
            loadingText.textContent = "";
            loadingText.style.opacity = "1";
            setTimeout(typeText, 350); // delay dikit biar smooth
          } else {
            // animasi keluar dari loading
            loading.style.transition = "opacity 1s ease, transform 1s ease";
            loading.style.opacity = "0";
            loading.style.transform = "scale(1.05)";
            setTimeout(() => {
              loading.style.display = "none";
              window.scrollTo({ top: 0, behavior: "smooth" });
            }, 1000);
          }
        }, 600);
      }, 900);
    }
  }

  typeText();
});

AOS.init();
