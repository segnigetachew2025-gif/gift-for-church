const translations = {
  en: {
    dashboardTitle: "Church Dashboard",
    about: "About Us",
    members: "Members",
	assetManagement: "Asset Management",
    programs: "Programs",
    calendar: "Calendar",
    dailyVerse: "Daily Verse",
    choir: "Choir",
    class: "Class",
    elder: "Elders",
    project: "Projects",
    media: "Media",
    attendance: "Attendance",
    donation: "Donation",
    total: "Total",
    logout: "Logout",
    footerText: "© 2025 Gift for Church"
  },

  am: {
    dashboardTitle: "የቤተክርስቲያን ዳሽቦርድ",
    about: "ስለ እኛ",
    members: "አባላት",
	assetManagement: "የንብረት አስተዳደር",
    programs: "ፕሮግራሞች",
    calendar: "የቀን መቁጠሪያ",
    dailyVerse: "ዕለታዊ መዝገብ",
    choir: "ኮዋየር",
    class: "ክፍል",
    elder: "አባቶች",
    project: "ፕሮጀክቶች",
    media: "ሚዲያ",
    attendance: "መገኘት",
    donation: "ስጦታ",
    total: "ጠቅላላ",
    logout: "ውጣ",
    footerText: "© 2025 ስጦታ ለቤተክርስቲያን"
  },

  om: {
    dashboardTitle: "Daashibooridii Waldaa",
    about: "Waa'ee Keenya",
    members: "Miseensota",
	assetManagement: "Bulchiinsa Qabeenya",
    programs: "Sagantaalee",
    calendar: "Kaalendara",
    dailyVerse: "Kutaa Kitaaba Guyyaa",
    choir: "Koorii",
    class: "Kutaa",
    elder: "Jaalattoota",
    project: "Projektoota",
    media: "Miidiyaa",
    attendance: "Argamuu",
    donation: "Kennaa",
    total: "Guutuu",
    logout: "Ba'i",
    footerText: "© 2025 Galii Fayyadamaa Waldaa"
  }
};

// Apply translations
function setLanguage(lang) {
  if (!translations[lang]) return;
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
  localStorage.setItem("selectedLang", lang);
}

