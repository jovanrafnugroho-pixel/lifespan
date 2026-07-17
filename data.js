// =========================================================================
// PETA NAVIGASI GAME:
// - root (Menu Utama)
//    ├── path_menu (Jalur Pilihan Hidup) -> eksistensial, pragmatis
//    ├── skills_menu (Stasiun Keahlian) -> tech_stack, soft_skills
//    └── rpg_root (Menu RPG)
//         ├── rpg_human (Ras Manusia)
//         │    ├── rpg_human_knight -> spec_human_longsword, spec_human_shield
//         │    └── rpg_human_mage   -> spec_human_pyro, spec_human_chrono
//         └── rpg_monster (Ras Monster)
//              ├── rpg_monster_orc  -> spec_orc_berserker, spec_orc_warlord
//              └── rpg_monster_vamp -> spec_vamp_blood, spec_vamp_shadow
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

    // =========================================================================
    // SECTION: JALUR PILIHAN HIDUP (THE PATH)
    // =========================================================================
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
        description: "Kamu memilih untuk terus memperbarui ilmu dan membaca semesta. Hidup tanpa pembelajaran adalah kehilangan makna terbesar bagimu. Risiko: Rentan mengalami kecemasan eksistensial (*existential dread*), namun jiwamu penuh.",
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

    // =========================================================================
    // SECTION: STASIUN KEAHLIAN & TEKNOLOGI
    // =========================================================================
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
        title: "TECHNICAL STACK",
        subtitle: "Penguasaan Logika Mesin",
        description: "Daftar teknologi yang dikuasai meliputi HTML5, CSS3 Modern, JavaScript (ES6+), Manajemen Repositori Git/GitHub, dan dasar-dasar arsitektur logika modular.",
        pathString: "Arsip > Keahlian > Teknologi",
        parent: "skills_menu",
        choices: []
    },

    skills_soft: {
        title: "SOFT SKILLS",
        subtitle: "Logika Manusia & Adaptasi",
        description: "Kemampuan penalaran kritis (*critical thinking*), analisis data makro, penulisan laporan ilmiah terstruktur, serta kemampuan adaptasi modular dalam memecahkan masalah kompleks.",
        pathString: "Arsip > Keahlian > Soft Skills",
        parent: "skills_menu",
        choices: []
    },

    // =========================================================================
    // SECTION: MULAI GAME RPG KEHIDUPAN (MAIN RPG MENU)
    // =========================================================================
    rpg_root: {
        title: "CHARACTER CREATION",
        subtitle: "Fase 1 - Pilih Ras Jiwamu",
        description: "Di dunia fantasi ini, takdirmu ditentukan dari bentuk fisik awal. Pilih dengan bijak!",
        pathString: "Arsip > RPG Game",
        parent: "root",
        choices: [
            { text: "🧑 Ras Manusia (Human)", target: "rpg_human" },
            { text: "👹 Ras Monster (Beast)", target: "rpg_monster" }
        ]
    },

    // =========================================================================
    // SUB-SECTION: RAS MANUSIA & CABANGNYA
    // =========================================================================
    rpg_human: {
        title: "RAS MANUSIA",
        subtitle: "Fase 2 - Pilih Kelas",
        description: "Ras yang paling adaptif dengan pertumbuhan tercepat dan fleksibilitas taktik tertinggi di semesta.",
        pathString: "Arsip > RPG Game > Manusia",
        parent: "rpg_root",
        choices: [
            { text: "⚔️ Kesatria Pedang (Knight)", target: "rpg_human_knight" },
            { text: "🔮 Penyihir Agung (Mage)", target: "rpg_human_mage" }
        ]
    },

    // --- KELAS: KESATRIA ---
    rpg_human_knight: {
        title: "SPESIALISASI KESATRIA",
        subtitle: "Fase 3 - Pilih Gaya Bertarung",
        description: "Bagaimana caramu mengayunkan besi dan melindungi sekutu di medan perang?",
        pathString: "Arsip > RPG Game > Manusia > Kesatria",
        parent: "rpg_human",
        choices: [
            { text: "🗡️ Longsword (Pedang Panjang)", target: "spec_human_longsword" },
            { text: "🛡️ Tower Shield (Benteng Berjalan)", target: "spec_human_shield" }
        ]
    },

    spec_human_longsword: {
        title: "KESATRIA PEDANG PANJANG (LONGSWORD)",
        subtitle: "Spesifikasi Karakter Final",
        description: `
            <strong>[ STATUS DASAR ]</strong><br>
            ❤️ TOTAL HP : 850 / 850<br>
            💧 TOTAL MP : 150 / 150<br><br>
            <strong>[ KEUNGGULAN ]</strong><br>
            + Keseimbangan yang sangat baik antara daya serang dan pertahanan.<br>
            + Kemampuan *counter-attack* setelah menangkis.<br><br>
            <strong>[ KEKURANGAN ]</strong><br>
            - Kecepatan serang tergolong sedang karena bobot pedang dua tangan.
        `,
        pathString: "Arsip > RPG > Manusia > Kesatria > Longsword",
        parent: "rpg_human_knight",
        choices: []
    },

    spec_human_shield: {
        title: "PELINDUNG SUCI (TOWER SHIELD)",
        subtitle: "Spesifikasi Karakter Final",
        description: `
            <strong>[ STATUS DASAR ]</strong><br>
            ❤️ TOTAL HP : 1200 / 1200<br>
            💧 TOTAL MP : 100 / 100<br><br>
            <strong>[ KEUNGGULAN ]</strong><br>
            + Pertahanan fisik mutlak, kebal terhadap efek *stun* musuh.<br>
            + Memiliki aura pelindung untuk anggota partai.<br><br>
            <strong>[ KEKURANGAN ]</strong><br>
            - Daya serang sangat rendah, sangat bergantung pada *damage* serangan balik.
        `,
        pathString: "Arsip > RPG > Manusia > Kesatria > Tower Shield",
        parent: "rpg_human_knight",
        choices: []
    },

    // --- KELAS: PENYIHIR (MAGE) ---
    rpg_human_mage: {
        title: "SEKTE PENYIHIR AGUNG",
        subtitle: "Fase 3 - Pilih Aliran Mana",
        description: "Manipulasi energi alam di sekitarmu. Apakah kamu ingin membakar dunia atau mengendalikan waktu?",
        pathString: "Arsip > RPG Game > Manusia > Mage",
        parent: "rpg_human",
        choices: [
            { text: "🔥 Aliran Api (Pyromancer)", target: "spec_human_pyro" },
            { text: "⏳ Aliran Waktu (Chronomancer)", target: "spec_human_chrono" }
        ]
    },

    spec_human_pyro: {
        title: "PENYIHIR API (PYROMANCER)",
        subtitle: "Spesifikasi Karakter Final",
        description: `
            <strong>[ STATUS DASAR ]</strong><br>
            ❤️ TOTAL HP : 450 / 450<br>
            💧 TOTAL MP : 600 / 600<br><br>
            <strong>[ KEUNGGULAN ]</strong><br>
            + *Damage* area (AoE) ledakan api yang luar biasa masif.<br>
            + Memberikan efek *Burn* (daya rusak berkala) pada target.<br><br>
            <strong>[ KEKURANGAN ]</strong><br>
            - Pertahanan fisik sangat rapuh (*Glass Cannon*), mudah tumbang jika didekati musuh.
        `,
        pathString: "Arsip > RPG > Manusia > Mage > Pyromancer",
        parent: "rpg_human_mage",
        choices: []
    },

    spec_human_chrono: {
        title: "PENGENDALI WAKTU (CHRONOMANCER)",
        subtitle: "Spesifikasi Karakter Final",
        description: `
            <strong>[ STATUS DASAR ]</strong><br>
            ❤️ TOTAL HP : 550 / 550<br>
            💧 TOTAL MP : 500 / 500<br><br>
            <strong>[ KEUNGGULAN ]</strong><br>
            + Dapat memperlambat gerakan musuh secara radikal.<br>
            + Memiliki kemampuan memutar balik waktu untuk memulihkan HP 3 detik lalu.<br><br>
            <strong>[ KEKURANGAN ]</strong><br>
            - Konsumsi Mana (MP) sangat boros, membutuhkan kalkulasi matang saat bertarung.
        `,
        pathString: "Arsip > RPG > Manusia > Mage > Chronomancer",
        parent: "rpg_human_mage",
        choices: []
    },

    // =========================================================================
    // SUB-SECTION: RAS MONSTER & CABANGNYA
    // =========================================================================
    rpg_monster: {
        title: "KERAJAAN MONSTER",
        subtitle: "Fase 2 - Pilih Keturunan Darah",
        description: "Menolak batasan moral manusia. Mengandalkan evolusi biologis brutal atau kutukan sihir kuno.",
        pathString: "Arsip > RPG Game > Monster",
        parent: "rpg_root",
        choices: [
            { text: "🐗 Suku Orc (Brute Force)", target: "rpg_monster_orc" },
            { text: "🦇 Bangsawan Vampir (Undead)", target: "rpg_monster_vamp" }
        ]
    },

    // --- KELAS: ORC ---
    rpg_monster_orc: {
        title: "SUKU ORC",
        subtitle: "Fase 3 - Tentukan Kasta Tempur",
        description: "Ras berdarah hijau yang memuja kekuatan fisik mentah dan dominasi medan perang.",
        pathString: "Arsip > RPG Game > Monster > Orc",
        parent: "rpg_monster",
        choices: [
            { text: "🪓 Orc Berserker", target: "spec_orc_berserker" },
            { text: "👑 Orc Warlord", target: "spec_orc_warlord" }
        ]
    },

    spec_orc_berserker: {
        title: "ORC BERSERKER (AMUK MASSAL)",
        subtitle: "Spesifikasi Karakter Final",
        description: `
            <strong>[ STATUS DASAR ]</strong><br>
            ❤️ TOTAL HP : 1400 / 1400<br>
            💧 TOTAL MP : 40 / 40<br><br>
            <strong>[ KEUNGGULAN ]</strong><br>
            + Semakin tipis HP karakter, semakin berlipat ganda daya serang fisiknya (*Rage Mode*).<br>
            + HP dasar tertinggi di antara semua kelas.<br><br>
            <strong>[ KEKURANGAN ]</strong><br>
            - Akurasi serangan rendah dan tidak memiliki pertahanan sihir sama sekali.
        `,
        pathString: "Arsip > RPG > Monster > Orc > Berserker",
        parent: "rpg_monster_orc",
        choices: []
    },

    spec_orc_warlord: {
        title: "ORC WARLORD (PANGLIMA PERANG)",
        subtitle: "Spesifikasi Karakter Final",
        description: `
            <strong>[ STATUS DASAR ]</strong><br>
            ❤️ TOTAL HP : 1100 / 1100<br>
            💧 TOTAL MP : 120 / 120<br><br>
            <strong>[ KEUNGGULAN ]</strong><br>
            + Mampu memanggil 2 prajurit Orc tambahan untuk bertarung di sisinya.<br>
            + Memberikan *buff* serangan ke seluruh anggota tim.<br><br>
            <strong>[ KEKURANGAN ]</strong><br>
            - Kemampuan bertarung satu lawan satu (1v1) kurang efektif tanpa pasukan bantuan.
        `,
        pathString: "Arsip > RPG > Monster > Orc > Warlord",
        parent: "rpg_monster_orc",
        choices: []
    },

    // --- KELAS: VAMPIR ---
    rpg_monster_vamp: {
        title: "BANGSAWAN VAMPIR",
        subtitle: "Fase 3 - Pilih Manifestasi Kutukan",
        description: "Makhluk malam abadi yang memanipulasi esensi kehidupan makhluk hidup lain.",
        pathString: "Arsip > RPG Game > Monster > Vampir",
        parent: "rpg_monster",
        choices: [
            { text: "🩸 Blood Mage (Penyedot Kehidupan)", target: "spec_vamp_blood" },
            { text: "👤 Shadow Assassin (Penyusup Bayangan)", target: "spec_vamp_shadow" }
        ]
    },

    spec_vamp_blood: {
        title: "VAMPIR BLOOD MAGE",
        subtitle: "Spesifikasi Karakter Final",
        description: `
            <strong>[ STATUS DASAR ]</strong><br>
            ❤️ TOTAL HP : 700 / 700<br>
            💧 TOTAL MP : 400 / 400<br><br>
            <strong>[ KEUNGGULAN ]</strong><br>
            + *Lifesteal* ekstrem — setiap serangan sihirnya menyerap HP musuh untuk memulihkan diri sendiri.<br>
            + Kebal terhadap racun fisik.<br><br>
            <strong>[ KEKURANGAN ]</strong><br>
            - Menerima kerusakan ganda (2x lipat) jika terkena sihir berelemen Cahaya/Api.
        `,
        pathString: "Arsip > RPG > Monster > Vampir > Blood Mage",
        parent: "rpg_monster_vamp",
        choices: []
    },

    spec_vamp_shadow: {
        title: "VAMPIR SHADOW ASSASSIN",
        subtitle: "Spesifikasi Karakter Final",
        description: `
            <strong>[ STATUS DASAR ]</strong><br>
            ❤️ TOTAL HP : 600 / 600<br>
            💧 TOTAL MP : 250 / 250<br><br>
            <strong>[ KEUNGGULAN ]</strong><br>
            + Dapat menghilang di kegelapan (*Stealth Mode*) dan menembus fisik benda padat.<br>
            + Jaminan serangan kritis (*Critical Hit*) saat menyerang musuh dari belakang.<br><br>
            <strong>[ KEKURANGAN ]</strong><br>
            - Sangat lemah jika terjebak di area terbuka yang terang atau terkena deteksi musuh.
        `,
        pathString: "Arsip > RPG > Monster > Vampir > Shadow Assassin",
        parent: "rpg_monster_vamp",
        choices: []
    }
};
