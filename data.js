// =========================================================================
// PETA NAVIGASI GAME EKSTRIM (Manusia, Monster, Elf, Dwarf)
// - root (Menu Utama)
//    ├── path_menu -> Eksistensial, Pragmatis
//    ├── skills_menu -> Teknologi, Soft Skills
//    └── rpg_root (Menu RPG)
//         ├── rpg_human (Ras Manusia) -> Knight, Mage
//         ├── rpg_monster (Ras Monster) -> Orc, Vampir
//         ├── rpg_elf (Ras Elf) -> Archer, Druid
//         └── rpg_dwarf (Ras Dwarf) -> Blacksmith, Engineer
// =========================================================================

export const treeData = {
    // === PILIHAN UTAMA ===
    root: {
        title: "ARSIP EKSISTENSI",
        subtitle: "Sistem Navigasi Utama",
        description: "Selamat datang di ruang kendali eksistensi. Dari sini, kamu bisa melacak percabangan keputusan hidup, keahlian portofolio, atau masuk ke dalam simulator RPG Realitas.",
        pathString: "Arsip",
        choices: [
            { text: "🌈 Jalur Pilihan Hidup (The Path)", target: "path_menu" },
            { text: "🛠️ Stasiun Keahlian & Teknologi", target: "skills_menu" },
            { text: "🎮 Mulai Game RPG Kehidupan", target: "rpg_root" }
        ],
        isRoot: true
    },

    // === SECTION: JALUR PILIHAN HIDUP ===
    path_menu: {
        title: "JALUR PILIHAN HIDUP",
        subtitle: "Pencarian Makna vs Realitas",
        description: "Setiap jiwa dihadapkan pada persimpangan besar. Apakah kamu mengejar kedalaman makna intelektual, atau kestabilan duniawi?",
        pathString: "Arsip > Pilihan Hidup",
        parent: "root",
        choices: [
            { text: "🌌 Jalur Eksistensial (Ilmu & Makna)", target: "path_existential" },
            { text: "💰 Jalur Pragmatis (Skill Masa Depan)", target: "path_pragmatic" }
        ]
    },
    path_existential: {
        title: "JALUR EKSISTENSIAL",
        subtitle: "Filosofi Jiwa Pembelajar",
        description: "Kamu memilih untuk terus memperbarui ilmu dan membaca semesta. Hidup tanpa pembelajaran adalah kehilangan makna terbesar bagimu. Risiko: Rentan mengalami kecemasan eksistensial, namun jiwamu penuh.",
        pathString: "Arsip > Pilihan Hidup > Eksistensial",
        parent: "path_menu",
        choices: []
    },
    path_pragmatic: {
        title: "JALUR PRAGMATIS",
        subtitle: "Fokus Kestabilan Finansial",
        description: "Kamu memilih untuk fokus pada keahlian praktis yang menghasilkan nilai ekonomi tinggi demi mengamankan masa depan. Risiko: Rentan terjebak dalam rutinitas mekanis, namun kebutuhan fisikmu sangat terpenuhi.",
        pathString: "Arsip > Pilihan Hidup > Pragmatis",
        parent: "path_menu",
        choices: []
    },

    // === SECTION: STASIUN KEAHLIAN ===
    skills_menu: {
        title: "STASIUN KEAHLIAN",
        subtitle: "Gudang Senjata Intelektual",
        description: "Pilih kategori kemampuan yang ingin kamu inspeksi dalam portofolio eksistensi ini.",
        pathString: "Arsip > Keahlian",
        parent: "root",
        choices: [
            { text: "💻 Tech Stack & Koding", target: "skills_tech" },
            { text: "🗣️ Soft Skills & Manajemen", target: "skills_soft" }
        ]
    },
    skills_tech: {
        title: "TECHNICAL STACK (Keahlian Teknologi)",
        subtitle: "Penguasaan Logika Mesin",
        description: "Daftar teknologi yang dikuasai meliputi HTML5, CSS3 Modern, JavaScript (ES6+), Keahlian Repositori Git/GitHub, dan dasar-dasar arsitektur logika modular.",
        pathString: "Arsip > Keahlian > Teknologi",
        parent: "skills_menu",
        choices: []
    },
    skills_soft: {
        title: "SOFT SKILLS (Keahlian Interpersonal)",
        subtitle: "Logika Manusia & Adaptasi",
        description: "Kemampuan penalaran kritis, analisis data makro, penulisan laporan ilmiah terstruktur, serta kemampuan adaptasi modular dalam memecahkan masalah kompleks.",
        pathString: "Arsip > Keahlian > Soft Skills",
        parent: "skills_menu",
        choices: []
    },

    // === MAIN RPG MENU (4 RAS BESAR FANTASY) ===
    rpg_root: {
        title: "CHARACTER CREATION (Pembuatan Karakter)",
        subtitle: "Fase 1 - Pilih Ras Jiwamu",
        description: "Di dunia fantasi ini, takdirmu ditentukan dari bentuk fisik awal dan garis darah leluhur. Pilih dengan bijak!",
        pathString: "Arsip > RPG Game",
        parent: "root",
        choices: [
            { text: "🧑 Ras Manusia (Human)", target: "rpg_human" },
            { text: "👹 Ras Monster (Beast/Monster)", target: "rpg_monster" },
            { text: "🧝 Ras Elf (Peri Hutan)", target: "rpg_elf" },
            { text: "🛡️ Ras Dwarf (Kurcaci Penempa)", target: "rpg_dwarf" }
        ]
    },

    // =========================================================================
    // BRANCH: RAS ELF
    // =========================================================================
    rpg_elf: {
        title: "RAS ELF (Peri)",
        subtitle: "Fase 2 - Pilih Aliran Kehidupan Elf",
        description: "Makhluk abadi yang diberkahi umur panjang, ketepatan sensorik tinggi, dan kedekatan magis dengan alam semesta.",
        pathString: "Arsip > RPG Game > Elf",
        parent: "rpg_root",
        choices: [
            { text: "🏹 Pemanah Senyap (Archer/Ranger)", target: "rpg_elf_archer" },
            { text: "🌿 Penyatu Alam (Druid/Shaman)", target: "rpg_elf_druid" }
        ]
    },

    // =========================================================================
    // BRANCH: RAS DWARF
    // =========================================================================
    rpg_dwarf: {
        title: "RAS DWARF (Kurcaci)",
        subtitle: "Fase 2 - Pilih Kasta Kerajaan Bawah Tanah",
        description: "Ras bertubuh pendek namun kekar, terkenal dengan ketahanan fisik luar biasa, keahlian metalurgi, dan teknologi mesiu.",
        pathString: "Arsip > RPG Game > Dwarf",
        parent: "rpg_root",
        choices: [
            { text: "🔨 Penempa Besi Besi (Blacksmith/Vanguard)", target: "rpg_dwarf_smith" },
            { text: "⚙️ Teknisi Mesiu (Engineer/Mechanic)", target: "rpg_dwarf_engineer" }
        ]
    }
};
