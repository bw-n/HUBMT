// DONNÉES DES MEMBRES
window.members = [
   {
    nom: "JoweL Homeskillz",
    role: ["Dev", "creative 360", "musique", "founder"],
    image: "https://www.jow-l.com/uploads/9/7/1/8/9718598/published/homeskillz-450px-2017-discogs.jpg?1716919812",
    website: "https://www.jow-l.com/",
    metier: ["creative 360", "musique"]
  },
  
  {
    nom: "Your Name",
    role: "Crypto-Artist",
    image: "https://github.com/bw-n/HP/blob/main/images/logo_BW_WEB_200x200.jpg?raw=true",
    fiche: "https://www.blockchain-workers.com/exemple-profil-premium.html",
    metier: "NFT Artist",
    elite: true
  },
  {
    nom: "Your Name",
    role: "Designer d’environnements virtuels",
    image: "https://github.com/bw-n/HP/blob/main/images/logo_BW_WEB_200x200.jpg?raw=true",
    fiche: "https://www.blockchain-workers.com/exemple-profil-premium.html",
    metier: "Metaverse Architect"
  },
  {
    nom: "Your Name",
    role: "UI/UX Designer",
    image: "https://github.com/bw-n/HP/blob/main/images/logo_BW_WEB_200x200.jpg?raw=true",
    fiche: "https://www.blockchain-workers.com/exemple-profil-premium.html",
    metier: "UI/UX Designer"
  },
  {
    nom: "Your Name",
    role: "3D Designer",
    image: "https://github.com/bw-n/HP/blob/main/images/logo_BW_WEB_200x200.jpg?raw=true",
    fiche: "https://www.blockchain-workers.com/exemple-profil-premium.html",
    metier: "3D Designer"
  },
  {
    nom: "Your Name",
    role: "Wearable Designer",
    image: "https://github.com/bw-n/HP/blob/main/images/logo_BW_WEB_200x200.jpg?raw=true",
    fiche: "https://www.blockchain-workers.com/exemple-profil-premium.html",
    metier: "Wearable Designer"
  },
  {
    nom: "Your Name",
    role: "Storyteller / Lore Designer",
    image: "https://github.com/bw-n/HP/blob/main/images/logo_BW_WEB_200x200.jpg?raw=true",
    fiche: "https://www.blockchain-workers.com/exemple-profil-premium.html",
    metier: "Storyteller / Lore Designer"
  },
  {
    nom: "Your Name",
    role: "Blockchain Architect",
    image: "https://github.com/bw-n/HP/blob/main/images/logo_BW_WEB_200x200.jpg?raw=true",
    fiche: "https://www.blockchain-workers.com/exemple-profil-premium.html",
    metier: "Blockchain & Smart Contract"
  },
  {
    nom: "Your Name",
    role: "Content Creator",
    image: "https://github.com/bw-n/HP/blob/main/images/logo_BW_WEB_200x200.jpg?raw=true",
    fiche: "https://www.blockchain-workers.com/exemple-profil-premium.html",
    metier: "Content Creator"
  },
  {
    nom: "Your Name",
    role: "Community Builder",
    image: "https://github.com/bw-n/HP/blob/main/images/logo_BW_WEB_200x200.jpg?raw=true",
    fiche: "https://www.blockchain-workers.com/exemple-profil-premium.html",
    metier: "Communication & Community"
  },
  {
    nom: "Your Name",
    role: "Copywriter NFT",
    image: "https://github.com/bw-n/HP/blob/main/images/logo_BW_WEB_200x200.jpg?raw=true",
    fiche: "https://www.blockchain-workers.com/exemple-profil-premium.html",
    metier: "Copywriter NFT"
  },
  {
    nom: "Your Name",
    role: " Meme Creator",
    image: "https://github.com/bw-n/HP/blob/main/images/logo_BW_WEB_200x200.jpg?raw=true",
    fiche: "https://www.blockchain-workers.com/exemple-profil-premium.html",
    metier: "Meme Creator"
  },
  {
    nom: "Your Name",
    role: "VR/AR Designer",
    image: "https://github.com/bw-n/HP/blob/main/images/logo_BW_WEB_200x200.jpg?raw=true",
    fiche: "https://www.blockchain-workers.com/exemple-profil-premium.html",
    metier: "VR/AR Designer"
  },
  {
    nom: "Your Name",
    role: "Game Designer",
    image: "https://github.com/bw-n/HP/blob/main/images/logo_BW_WEB_200x200.jpg?raw=true",
    fiche: "https://www.blockchain-workers.com/exemple-profil-premium.html",
    metier: "Game Designer"
  },
  {
    nom: "Your Name",
    role: "Audio NFT Creator / Sound Designer",
    image: "https://github.com/bw-n/HP/blob/main/images/logo_BW_WEB_200x200.jpg?raw=true",
    fiche: "https://www.blockchain-workers.com/exemple-profil-premium.html",
    metier: "Audio NFT Creator - Sound Designer"
  },
  {
    nom: "Your Name",
    role: "AI + Web3 creator",
    image: "https://github.com/bw-n/HP/blob/main/images/logo_BW_WEB_200x200.jpg?raw=true",
    fiche: "https://www.blockchain-workers.com/exemple-profil-premium.html",
    metier: "AI + Web3 creator"
  },
  {
    nom: "Your Name",
    role: "Game Developer",
    image: "https://github.com/bw-n/HP/blob/main/images/logo_BW_WEB_200x200.jpg?raw=true",
    fiche: "https://www.blockchain-workers.com/exemple-profil-premium.html",
    metier: "Design & Création Visuelle"
  },
  {
    nom: "Your Name",
    role: "Beatmaker",
    image: "https://github.com/bw-n/HP/blob/main/images/logo_BW_WEB_200x200.jpg?raw=true",
    fiche: "https://www.blockchain-workers.com/exemple-profil-premium.html",
    metier: "Beatmaker"
  },
  {
    nom: "Your Name",
    role: "Creative Coder",
    image: "https://github.com/bw-n/HP/blob/main/images/logo_BW_WEB_200x200.jpg?raw=true",
    fiche: "https://www.blockchain-workers.com/exemple-profil-premium.html",
    metier: "Creative Coder"
  }
];

// Logique du Hub
document.addEventListener("DOMContentLoaded", function () {
  const membersData = window.members;

  const allMetiers = membersData.flatMap(m =>
    Array.isArray(m.metier) ? m.metier : [m.metier]
  );

  // Ajouter "ELITE" comme filtre si au moins un membre est elite
  const hasElite = membersData.some(m => m.elite);
  if (hasElite) allMetiers.push("ELITE");

  const uniqueFilters = [...new Set(allMetiers)].sort();

  const filtersDiv = document.getElementById("filters");
  const memberGrid = document.getElementById("member-grid");
  const backButton = document.getElementById("backButton");

  if (!filtersDiv || !memberGrid || !backButton) {
    console.warn("Certains éléments HTML manquent : vérifie l'existence des IDs filters, member-grid et backButton.");
    return;
  }

  function renderMembers(list) {
    memberGrid.innerHTML = "";
    if (list.length === 0) {
      memberGrid.innerHTML = "<p>Aucun membre trouvé.</p>";
      return;
    }
    list.forEach(m => {
      const card = document.createElement("div");
      card.className = "member-block" + (m.elite ? " elite" : "");
      card.innerHTML =
        '<div class="member-photo" style="background-image:url(' + m.image + ')"></div>' +
        '<div class="member-name">' + m.nom + '</div>' +
        '<div class="member-role">' + m.role + '</div>' +
        '<a class="view-link" href="' + m.fiche + '" target="_blank" rel="noopener noreferrer">Voir la fiche</a>';
      memberGrid.appendChild(card);
    });

    if (window.innerWidth <= 768) {
      const y = memberGrid.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y - 20, behavior: "smooth" });
    }
  }

  function filterBy(metier) {
    const filtered = metier === "ELITE"
      ? membersData.filter(m => m.elite)
      : membersData.filter(m =>
          Array.isArray(m.metier) ? m.metier.includes(metier) : m.metier === metier
        );
    renderMembers(filtered);
  }

  backButton.addEventListener("click", () => {
  const y = filtersDiv.getBoundingClientRect().top + window.scrollY;
  const offset = window.innerWidth > 768 ? 100 : 20;
  window.scrollTo({ top: y - offset, behavior: "smooth" });
});

  uniqueFilters.forEach(metier => {
  const btn = document.createElement("button");
  btn.textContent = metier;
  btn.onclick = () => filterBy(metier);
  if (metier === "ELITE") btn.classList.add("elite-btn");
  filtersDiv.appendChild(btn);
});

  console.log("✅ script-hmw.js chargé avec", membersData.length, "membres");
});
