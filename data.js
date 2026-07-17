// =========================================================================
// PETA NAVIGASI GAME EKSTRIM (Manusia, Monster, Elf, Dwarf) - BAGIAN 1
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

    // === MAIN RPG MENU ===
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
    // BRANCH: RAS MANUSIA
    // =========================================================================
    rpg_human: {
        title: "RAS MANUSIA (Human)",
        subtitle: "Fase 2 - Pilih Kelas",
        description: "Ras yang paling adaptif dengan pertumbuhan tercepat dan fleksibilitas taktik tertinggi di semesta.",
        pathString: "Arsip > RPG Game > Manusia",
        parent: "rpg_root",
        choices: [
            { text: "⚔️ Kesatria Pedang (Knight)", target: "rpg_human_knight" },
            { text: "🔮 Penyihir Agung (Mage)", target: "rpg_human_mage" }
        ]
    },

    // --- KELAS KESATRIA MANUSIA (15 PILIHAN SPESIALISASI) ---
    rpg_human_knight: {
        title: "ORDO KESATRIA (Knight Order)",
        subtitle: "Fase 3 - Pilih 1 dari 15 Doktrin Tempur",
        description: "Disiplin militer besi. Tentukan spesialisasi fisik dan pertahanan karaktermu.",
        pathString: "Arsip > RPG Game > Manusia > Knight",
        parent: "rpg_human",
        choices: [
            { text: "🗡️ 01. Longsword Vanguard (Garda Depan Pedang Panjang)", target: "hk_01" },
            { text: "🛡️ 02. Tower Shield Fortress (Benteng Perisai Menara)", target: "hk_02" },
            { text: "🔱 03. Halberd Phalanx (Pasukan Tombak Berat)", target: "hk_03" },
            { text: "🐎 04. Holy Winged Dragoon (Ksatria Penunggang Suci)", target: "hk_04" },
            { text: "📿 05. Templar Inquisitor (Inkuisitor Kuil Suci)", target: "hk_05" },
            { text: "⚔️ 06. Crimson Oath Justiciar (Penegak Keadilan Sumpah Merah)", target: "hk_06" },
            { text: "⚡ 07. Thunderclap Fencer (Anggar Kilat Petir)", target: "hk_07" },
            { text: "❄️ 08. Frostborn Bulwark (Tembok Pertahanan Es)", target: "hk_08" },
            { text: "🟢 09. Guardian of the Grove (Penjaga Taman Suci)", target: "hk_09" },
            { text: "⚔️ 10. Dual-Wield Gladiator (Gladiator Dua Pedang)", target: "hk_10" },
            { text: "🏹 11. Greatbow Sentinel (Penjaga Panah Raksasa)", target: "hk_11" },
            { text: "⛓️ 12. Iron Chain Executioner (Algojo Rantai Besi)", target: "hk_12" },
            { text: "🌌 13. Void Mirror Deflector (Pemantul Cermin Hampa)", target: "hk_13" },
            { text: "👑 14. Royal Banner Warlord (Panglima Panji Kerajaan)", target: "hk_14" },
            { text: "🪨 15. Mountain Titan Juggernaut (Raksasa Gunung Penabrak)", target: "hk_15" }
        ]
    },

    hk_01: { title: "LONGSWORD VANGUARD (Garda Depan Pedang Panjang)", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 850 | MP: 150<br><strong>[INFO]</strong> Ahli tebasan seimbang antara serang dan bertahan.", imageUrl: "", pathString: "Arsip > RPG > Manusia > Knight > 01", parent: "rpg_human_knight", choices: [] },
    hk_02: { title: "TOWER SHIELD FORTRESS (Benteng Perisai Menara)", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 1300 | MP: 90<br><strong>[INFO]</strong> Benteng berjalan dengan pertahanan fisik mutlak.", imageUrl: "", pathString: "Arsip > RPG > Manusia > Knight > 02", parent: "rpg_human_knight", choices: [] },
    hk_03: { title: "HALBERD PHALANX (Pasukan Tombak Berat)", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 900 | MP: 120<br><strong>[INFO]</strong> Unggul menjaga jarak tempur dan menghancurkan zirah besi lawan.", imageUrl: "", pathString: "Arsip > RPG > Manusia > Knight > 03", parent: "rpg_human_knight", choices: [] },
    hk_04: { title: "HOLY WINGED DRAGOON (Ksatria Penunggang Suci)", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 800 | MP: 250<br><strong>[INFO]</strong> Ksatria tombak penunggang makhluk terbang dengan mobilitas tinggi.", imageUrl: "", pathString: "Arsip > RPG > Manusia > Knight > 04", parent: "rpg_human_knight", choices: [] },
    hk_05: { title: "TEMPLAR INQUISITOR (Inkuisitor Kuil Suci)", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 950 | MP: 300<br><strong>[INFO]</strong> Mengombinasikan pedang berat dengan sihir suci penangkal kutukan.", imageUrl: "", pathString: "Arsip > RPG > Manusia > Knight > 05", parent: "rpg_human_knight", choices: [] },
    hk_06: { title: "CRIMSON OATH JUSTICIAR (Penegak Keadilan Sumpah Merah)", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 1100 | MP: 100<br><strong>[INFO]</strong> Memperkuat daya serang berlipat ganda melalui tekad sumpah ksatria.", imageUrl: "", pathString: "Arsip > RPG > Manusia > Knight > 06", parent: "rpg_human_knight", choices: [] },
    hk_07: { title: "THUNDERCLAP FENCER (Anggar Kilat Petir)", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 700 | MP: 200<br><strong>[INFO]</strong> Ksatria lincah bersenjata Rapier dengan kecepatan elemen petir kilat.", imageUrl: "", pathString: "Arsip > RPG > Manusia > Knight > 07", parent: "rpg_human_knight", choices: [] },
    hk_08: { title: "FROSTBORN BULWARK (Tembok Pertahanan Es)", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 1200 | MP: 150<br><strong>[INFO]</strong> Membekukan gerakan musuh yang nekat menyerang tameng es miliknya.", imageUrl: "", pathString: "Arsip > RPG > Manusia > Knight > 08", parent: "rpg_human_knight", choices: [] },
    hk_09: { title: "GUARDIAN OF THE GROVE (Penjaga Taman Suci)", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 1000 | MP: 220<br><strong>[INFO]</strong> Memiliki pemulihan kesehatan tinggi berkat restu tanaman pelindung.", imageUrl: "", pathString: "Arsip > RPG > Manusia > Knight > 09", parent: "rpg_human_knight", choices: [] },
    hk_10: { title: "DUAL-WIELD GLADIATOR (Gladiator Dua Pedang)", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 750 | MP: 110<br><strong>[INFO]</strong> Menyerang secara agresif tanpa henti menggunakan dua pedang pendek.", imageUrl: "", pathString: "Arsip > RPG > Manusia > Knight > 10", parent: "rpg_human_knight", choices: [] },
    hk_11: { title: "GREATBOW SENTINEL (Penjaga Panah Raksasa)", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 700 | MP: 140<br><strong>[INFO]</strong> Ksatria berzirah berat namun bersenjata panah raksasa penembus perisai.", imageUrl: "", pathString: "Arsip > RPG > Manusia > Knight > 11", parent: "rpg_human_knight", choices: [] },
    hk_12: { title: "IRON CHAIN EXECUTIONER (Algojo Rantai Besi)", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 950 | MP: 130<br><strong>[INFO]</strong> Menarik paksa musuh dari jarak jauh menggunakan rantai pengikat baja.", imageUrl: "", pathString: "Arsip > RPG > Manusia > Knight > 12", parent: "rpg_human_knight", choices: [] },
    hk_13: { title: "VOID MIRROR DEFLECTOR (Pemantul Cermin Hampa)", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 850 | MP: 280<br><strong>[INFO]</strong> Mampu membalikkan kembali serangan sihir proyektil musuh sepenuhnya.", imageUrl: "", pathString: "Arsip > RPG > Manusia > Knight > 13", parent: "rpg_human_knight", choices: [] },
    hk_14: { title: "ROYAL BANNER WARLORD (Panglima Panji Kerajaan)", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 1000 | MP: 180<br><strong>[INFO]</strong> Memberikan penguatan atribut pasif secara masif untuk seluruh rekan tim.", imageUrl: "", pathString: "Arsip > RPG > Manusia > Knight > 14", parent: "rpg_human_knight", choices: [] },
    hk_15: { title: "MOUNTAIN TITAN JUGGERNAUT (Raksasa Gunung Penabrak)", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 1500 | MP: 50<br><strong>[INFO]</strong> Zirah terberat di bumi. Kebal terhadap efek dorongan mundur atau pingsan.", imageUrl: "", pathString: "Arsip > RPG > Manusia > Knight > 15", parent: "rpg_human_knight", choices: [] },

    // --- KELAS PENYIHIR MANUSIA (15 PILIHAN SPESIALISASI) ---
    rpg_human_mage: {
        title: "AKADEMI SIHIR AGUNG (Grand Mage Academy)",
        subtitle: "Fase 3 - Pilih 1 dari 15 Aliran Mana",
        description: "Manipulasi realitas melalui konsentrasi energi elemen magis.",
        pathString: "Arsip > RPG Game > Manusia > Mage",
        parent: "rpg_human",
        choices: [
            { text: "🔥 01. Pyromancer Cataclysm (Penyihir Api Katastrofe)", target: "hm_01" },
            { text: "⏳ 02. Chronomancer Weaver (Pengendali Jalinan Waktu)", target: "hm_02" },
            { text: "⚡ 03. Electromancer Tempest (Penyihir Badai Petir)", target: "hm_03" },
            { text: "🌊 04. Hydromancer Tide (Penyihir Pasang Samudra)", target: "hm_04" },
            { text: "🪨 05. Geomancer Core (Penyihir Inti Bumi)", target: "hm_05" },
            { text: "💨 06. Aeromancer Zephyr (Penyihir Pusaran Angin)", target: "hm_06" },
            { text: "🌟 07. Cosmic Luminary (Penyihir Cahaya Kosmik)", target: "hm_07" },
            { text: "👁️ 08. Illusionist Phasm (Ahli Ilusi Bayangan)", target: "hm_08" },
            { text: "🧪 09. Alchemist Catalyst (Katalisator Alkimia)", target: "hm_09" },
            { text: "🔮 10. Soul Weaver Ritualist (Ritualis Jalinan Jiwa)", target: "hm_10" },
            { text: "🌌 11. Gravity Singularity (Penyihir Singularitas Gravitasi)", target: "hm_11" },
            { text: "❄️ 12. Cryomancer Absolute (Penyihir Pembekuan Absolut)", target: "hm_12" },
            { text: "🎤 13. Sonic Resonance Bard (Penyair Resonansi Suara)", target: "hm_13" },
            { text: "🌿 14. Biomancer Evolutionary (Penyihir Evolusi Biologis)", target: "hm_14" },
            { text: "🎴 15. Runesmith Enchanter (Ahli Segel Mantra Rune)", target: "hm_15" }
        ]
    },

    hm_01: { title: "PYROMANCER CATACLYSM (Penyihir Api Katastrofe)", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 450 | MP: 600<br><strong>[INFO]</strong> Daya rusak area sangat luas dengan ledakan api murni.", imageUrl: "", pathString: "Arsip > RPG > Manusia > Mage > 01", parent: "rpg_human_mage", choices: [] },
    hm_02: { title: "CHRONOMANCER WEAVER (Pengendali Jalinan Waktu)", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 550 | MP: 500<br><strong>[INFO]</strong> Mengendalikan waktu dan merestorasi status tubuh ke kondisi 3 detik lalu.", imageUrl: "", pathString: "Arsip > RPG > Manusia > Mage > 02", parent: "rpg_human_mage", choices: [] },
    hm_03: { title: "ELECTROMANCER TEMPEST (Penyihir Badai Petir)", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 400 | MP: 650<br><strong>[INFO]</strong> Serangan kilat berantai dengan kecepatan rapalan mantra tertinggi.", imageUrl: "", pathString: "Arsip > RPG > Manusia > Mage > 03", parent: "rpg_human_mage", choices: [] },
    hm_04: { title: "HYDROMANCER TIDE (Penyihir Pasang Samudra)", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 600 | MP: 550<br><strong>[INFO]</strong> Spesialis penyembuhan total dan manipulasi pusaran air penahan musuh.", imageUrl: "", pathString: "Arsip > RPG > Manusia > Mage > 04", parent: "rpg_human_mage", choices: [] },
    hm_05: { title: "GEOMANCER CORE (Penyihir Inti Bumi)", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 800 | MP: 400<br><strong>[INFO]</strong> Mendirikan perisai batuan kokoh dan menjatuhkan meteor pelumpuh.", imageUrl: "", pathString: "Arsip > RPG > Manusia > Mage > 05", parent: "rpg_human_mage", choices: [] },
    hm_06: { title: "AEROMANCER ZEPHYR (Penyihir Pusaran Angin)", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 500 | MP: 520<br><strong>[INFO]</strong> Membuat badai penghalau anak panah dan meningkatkan kecepatan tim.", imageUrl: "", pathString: "Arsip > RPG > Manusia > Mage > 06", parent: "rpg_human_mage", choices: [] },
    hm_07: { title: "COSMIC LUMINARY (Penyihir Cahaya Kosmik)", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 480 | MP: 700<br><strong>[INFO]</strong> Memanggil kekuatan gugusan bintang untuk serangan jarak jauh.", imageUrl: "", pathString: "Arsip > RPG > Manusia > Mage > 07", parent: "rpg_human_mage", choices: [] },
    hm_08: { title: "ILLUSIONIST PHASM (Ahli Ilusi Bayangan)", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 420 | MP: 580<br><strong>[INFO]</strong> Menciptakan klon bayangan palsu untuk mengecoh fokus serangan target.", imageUrl: "", pathString: "Arsip > RPG > Manusia > Mage > 08", parent: "rpg_human_mage", choices: [] },
    hm_09: { title: "ALCHEMIST CATALYST (Katalisator Alkimia)", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 620 | MP: 480<br><strong>[INFO]</strong> Melempar ramuan asam korosif serta ramuan penguat stat sekutu.", imageUrl: "", pathString: "Arsip > RPG > Manusia > Mage > 09", parent: "rpg_human_mage", choices: [] },
    hm_10: { title: "SOUL WEAVER RITUALIST (Ritualis Jalinan Jiwa)", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 500 | MP: 620<br><strong>[INFO]</strong> Memanfaatkan energi sisa pertempuran untuk memulihkan mana tim.", imageUrl: "", pathString: "Arsip > RPG > Manusia > Mage > 10", parent: "rpg_human_mage", choices: [] },
    hm_11: { title: "GRAVITY SINGULARITY (Penyihir Singularitas Gravitasi)", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 530 | MP: 640<br><strong>[INFO]</strong> Menciptakan medan gravitasi pekat yang menarik paksa posisi musuh.", imageUrl: "", pathString: "Arsip > RPG > Manusia > Mage > 11", parent: "rpg_human_mage", choices: [] },
    hm_12: { title: "CRYOMANCER ABSOLUTE (Penyihir Pembekuan Absolut)", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 580 | MP: 540<br><strong>[INFO]</strong> Menurunkan suhu area secara ekstrem guna melambatkan pergerakan lawan.", imageUrl: "", pathString: "Arsip > RPG > Manusia > Mage > 12", parent: "rpg_human_mage", choices: [] },
    hm_13: { title: "SONIC RESONANCE BARD (Penyair Resonansi Suara)", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 600 | MP: 500<br><strong>[INFO]</strong> Menggunakan gelombang suara frekuensi tinggi pemecah fokus konsentrasi mantra.", imageUrl: "", pathString: "Arsip > RPG > Manusia > Mage > 13", parent: "rpg_human_mage", choices: [] },
    hm_14: { title: "BIOMANCER EVOLUTIONARY (Penyihir Evolusi Biologis)", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 700 | MP: 450<br><strong>[INFO]</strong> Merekayasa kapasitas tubuh untuk mendapatkan kekebalan medan ekstrem.", imageUrl: "", pathString: "Arsip > RPG > Manusia > Mage > 14", parent: "rpg_human_mage", choices: [] },
    hm_15: { title: "RUNESMITH ENCHANTER (Ahli Segel Mantra Rune)", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 650 | MP: 550<br><strong>[INFO]</strong> Menanamkan segel sihir penguat perlindungan pada perlengkapan secara instan.", imageUrl: "", pathString: "Arsip > RPG > Manusia > Mage > 15", parent: "rpg_human_mage", choices: [] },
};
