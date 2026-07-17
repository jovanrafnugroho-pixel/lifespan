// =========================================================================
// PETA NAVIGASI GAME MASIF (15+ Cabang Spesialisasi per Kelas):
// - root (Menu Utama)
//    ├── path_menu -> eksistensial, pragmatis
//    ├── skills_menu -> tech_stack, soft_skills
//    └── rpg_root (Menu RPG)
//         ├── rpg_human (Ras Manusia)
//         │    ├── rpg_human_knight -> [15 Spesialisasi Ksatria]
//         │    └── rpg_human_mage   -> [15 Spesialisasi Penyihir]
//         └── rpg_monster (Ras Monster)
//              ├── rpg_monster_orc  -> [15 Spesialisasi Orc]
//              └── rpg_monster_vamp -> [15 Spesialisasi Vampir]
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
        description: "Kemampuan penalaran kritis, analisis data makro, penulisan laporan ilmiah terstruktur, serta kemampuan adaptasi modular dalam memecahkan masalah kompleks.",
        pathString: "Arsip > Keahlian > Soft Skills",
        parent: "skills_menu",
        choices: []
    },

    // === MAIN RPG MENU ===
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
    // BRANCH: RAS MANUSIA
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

    // --- KELAS KESATRIA (15 PILIHAN SPESIALISASI) ---
    rpg_human_knight: {
        title: "ORDO KESATRIA",
        subtitle: "Fase 3 - Pilih 1 dari 15 Doktrin Tempur",
        description: "Disiplin militer besi. Tentukan spesialisasi fisik dan pertahanan karaktermu.",
        pathString: "Arsip > RPG Game > Manusia > Knight",
        parent: "rpg_human",
        choices: [
            { text: "🗡️ 01. Longsword Vanguard", target: "hk_01" },
            { text: "🛡️ 02. Tower Shield Fortress", target: "hk_02" },
            { text: "🔱 03. Halberd Phalanx", target: "hk_03" },
            { text: "🐎 04. Holy Winged Dragoon", target: "hk_04" },
            { text: "📿 05. Templar Inquisitor", target: "hk_05" },
            { text: "🩸 06. Blood Knight Defiler", target: "hk_06" },
            { text: "⚡ 07. Thunderclap Fencer", target: "hk_07" },
            { text: "❄️ 08. Frostborn Bulwark", target: "hk_08" },
            { text: "🟢 09. Guardian of the Grove", target: "hk_09" },
            { text: "⚔️ 10. Dual-Wield Gladiator", target: "hk_10" },
            { text: "🏹 11. Greatbow Sentinel", target: "hk_11" },
            { text: "⛓️ 12. Iron Chain Executioner", target: "hk_12" },
            { text: "🌌 13. Void Mirror Deflector", target: "hk_13" },
            { text: "👑 14. Royal Banner Warlord", target: "hk_14" },
            { text: "🪨 15. Mountain Titan Juggernaut", target: "hk_15" }
        ]
    },

    // DETAIL DATA 15 KESATRIA MANUSIA
    hk_01: { title: "LONGSWORD VANGUARD", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 850 | MP: 150<br><strong>[INFO]</strong> Ahli tebasan seimbang antara serang dan bertahan.", pathString: "Arsip > RPG > Manusia > Knight > 01", parent: "rpg_human_knight", choices: [] },
    hk_02: { title: "TOWER SHIELD FORTRESS", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 1300 | MP: 90<br><strong>[INFO]</strong> Benteng berjalan dengan pertahanan fisik mutlak.", pathString: "Arsip > RPG > Manusia > Knight > 02", parent: "rpg_human_knight", choices: [] },
    hk_03: { title: "HALBERD PHALANX", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 900 | MP: 120<br><strong>[INFO]</strong> Unggul menjaga jarak tempur dan menghancurkan armor lawan.", pathString: "Arsip > RPG > Manusia > Knight > 03", parent: "rpg_human_knight", choices: [] },
    hk_04: { title: "HOLY WINGED DRAGOON", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 800 | MP: 250<br><strong>[INFO]</strong> Ksatria tombak penunggang makhluk terbang dengan mobilitas tinggi.", pathString: "Arsip > RPG > Manusia > Knight > 04", parent: "rpg_human_knight", choices: [] },
    hk_05: { title: "TEMPLAR INQUISITOR", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 950 | MP: 300<br><strong>[INFO]</strong> Mengombinasikan pedang berat dengan sihir suci anti-sihir.", pathString: "Arsip > RPG > Manusia > Knight > 05", parent: "rpg_human_knight", choices: [] },
    hk_06: { title: "BLOOD KNIGHT DEFILER", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 1100 | MP: 100<br><strong>[INFO]</strong> Mengorbankan HP sendiri untuk memicu serangan destruktif.", pathString: "Arsip > RPG > Manusia > Knight > 06", parent: "rpg_human_knight", choices: [] },
    hk_07: { title: "THUNDERCLAP FENCER", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 700 | MP: 200<br><strong>[INFO]</strong> Ksatria lincah bersenjata Rapier dengan elemen petir kilat.", pathString: "Arsip > RPG > Manusia > Knight > 07", parent: "rpg_human_knight", choices: [] },
    hk_08: { title: "FROSTBORN BULWARK", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 1200 | MP: 150<br><strong>[INFO]</strong> Membekukan musuh yang menyerang tameng es miliknya.", pathString: "Arsip > RPG > Manusia > Knight > 08", parent: "rpg_human_knight", choices: [] },
    hk_09: { title: "GUARDIAN OF THE GROVE", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 1000 | MP: 220<br><strong>[INFO]</strong> Memiliki regenerasi HP tinggi berkat restu tanaman hutan.", pathString: "Arsip > RPG > Manusia > Knight > 09", parent: "rpg_human_knight", choices: [] },
    hk_10: { title: "DUAL-WIELD GLADIATOR", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 750 | MP: 110<br><strong>[INFO]</strong> Menyerang tanpa henti dengan dua pedang pendek.", pathString: "Arsip > RPG > Manusia > Knight > 10", parent: "rpg_human_knight", choices: [] },
    hk_11: { title: "GREATBOW SENTINEL", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 700 | MP: 140<br><strong>[INFO]</strong> Ksatria berzirah berat namun bersenjata panah raksasa penembus tembok.", pathString: "Arsip > RPG > Manusia > Knight > 11", parent: "rpg_human_knight", choices: [] },
    hk_12: { title: "IRON CHAIN EXECUTIONER", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 950 | MP: 130<br><strong>[INFO]</strong> Menarik musuh dari jarak jauh menggunakan rantai berduri.", pathString: "Arsip > RPG > Manusia > Knight > 12", parent: "rpg_human_knight", choices: [] },
    hk_13: { title: "VOID MIRROR DEFLECTOR", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 850 | MP: 280<br><strong>[INFO]</strong> Mampu memantulkan kembali serangan sihir musuh 100%.", pathString: "Arsip > RPG > Manusia > Knight > 13", parent: "rpg_human_knight", choices: [] },
    hk_14: { title: "ROYAL BANNER WARLORD", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 1000 | MP: 180<br><strong>[INFO]</strong> Memberikan buff stat pasif masif untuk seluruh anggota party.", pathString: "Arsip > RPG > Manusia > Knight > 14", parent: "rpg_human_knight", choices: [] },
    hk_15: { title: "MOUNTAIN TITAN JUGGERNAUT", subtitle: "Spesifikasi Karakter Final", description: "<strong>[STATUS]</strong> HP: 1500 | MP: 50<br><strong>[INFO]</strong> Zirah terberat di bumi. Tidak bisa digeser atau di-stun.", pathString: "Arsip > RPG > Manusia > Knight > 15", parent: "rpg_human_knight", choices: [] },

    // --- KELAS PENYIHIR (15 PILIHAN SPESIALISASI) ---
    rpg_human_mage: {
        title: "AKADEMI SIHIR AGUNG",
        subtitle: "Fase 3 - Pilih 1 dari 15 Aliran Mana",
        description: "Manipulasi realitas melalui energi arcana elemental.",
        pathString: "Arsip > RPG Game > Manusia > Mage",
        parent: "rpg_human",
        choices: [
            { text: "🔥 01. Pyromancer Cataclysm", target: "hm_01" },
            { text: "⏳ 02. Chronomancer Weaver", target: "hm_02" },
            { text: "⚡ 03. Electromancer Tempest", target: "hm_03" },
            { text: "🌊 04. Hydromancer Tide", target: "hm_04" },
            { text: "🪨 05. Geomancer Core", target: "hm_05" },
            { text: "💨 06. Aeromancer Zephyr", target: "hm_06" },
            { text: "🌟 07. Cosmic Luminary", target: "hm_07" },
            { text: "👁️ 08. Illusionist Phasm", target: "hm_08" },
            { text: "🧪 09. Alchemist Catalyst", target: "hm_09" },
            { text: "🦴 10. Necromancer Ritualist", target: "hm_10" },
            { text: "🌌 11. Gravity Singularity", target: "hm_11" },
            { text: "❄️ 12. Cryomancer Absolute", target: "hm_12" },
            { text: "🎤 13. Sonic Resonance Bard", target: "hm_13" },
            { text: "🌿 14. Biomancer Evolutionary", target: "hm_14" },
            { text: "🎴 15. Runesmith Enchanter", target: "hm_15" }
        ]
    },

    // DETAIL DATA 15 PENYIHIR MANUSIA
    hm_01: { title: "PYROMANCER CATACLYSM", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 450 | MP: 600<br>Daya rusak area dengan ledakan api murni.", pathString: "Arsip > RPG > Manusia > Mage > 01", parent: "rpg_human_mage", choices: [] },
    hm_02: { title: "CHRONOMANCER WEAVER", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 550 | MP: 500<br>Mengendalikan waktu dan merestorasi HP ke kondisi 3 detik lalu.", pathString: "Arsip > RPG > Manusia > Mage > 02", parent: "rpg_human_mage", choices: [] },
    hm_03: { title: "ELECTROMANCER TEMPEST", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 400 | MP: 650<br>Petir berantai dengan kecepatan cast tercepat.", pathString: "Arsip > RPG > Manusia > Mage > 03", parent: "rpg_human_mage", choices: [] },
    hm_04: { title: "HYDROMANCER TIDE", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 600 | MP: 550<br>Spesialis penyembuhan total dan manipulasi ombak penahan musuh.", pathString: "Arsip > RPG > Manusia > Mage > 04", parent: "rpg_human_mage", choices: [] },
    hm_05: { title: "GEOMANCER CORE", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 800 | MP: 400<br>Mendirikan pelindung tanah dan menjatuhkan meteor.", pathString: "Arsip > RPG > Manusia > Mage > 05", parent: "rpg_human_mage", choices: [] },
    hm_06: { title: "AEROMANCER ZEPHYR", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 500 | MP: 520<br>Membuat pusaran angin penghalau anak panah dan menambah speed tim.", pathString: "Arsip > RPG > Manusia > Mage > 06", parent: "rpg_human_mage", choices: [] },
    hm_07: { title: "COSMIC LUMINARY", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 480 | MP: 700<br>Memanggil kekuatan bintang dan galaksi jarak jauh.", pathString: "Arsip > RPG > Manusia > Mage > 07", parent: "rpg_human_mage", choices: [] },
    hm_08: { title: "ILLUSIONIST PHASM", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 420 | MP: 580<br>Membuat klon bayangan palsu untuk menipu target musuh.", pathString: "Arsip > RPG > Manusia > Mage > 08", parent: "rpg_human_mage", choices: [] },
    hm_09: { title: "ALCHEMIST CATALYST", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 620 | MP: 480<br>Melempar ramuan asam korosif dan potion penguat stats.", pathString: "Arsip > RPG > Manusia > Mage > 09", parent: "rpg_human_mage", choices: [] },
    hm_10: { title: "NECROMANCER RITUALIST", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 500 | MP: 620<br>Membangkitkan mayat musuh yang gugur untuk jadi budak petarung.", pathString: "Arsip > RPG > Manusia > Mage > 10", parent: "rpg_human_mage", choices: [] },
    hm_11: { title: "GRAVITY SINGULARITY", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 530 | MP: 640<br>Membuat blackhole kecil yang menarik paksa seluruh posisi musuh.", pathString: "Arsip > RPG > Manusia > Mage > 11", parent: "rpg_human_mage", choices: [] },
    hm_12: { title: "CRYOMANCER ABSOLUTE", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 580 | MP: 540<br>Membekukan total musuh secara permanen dalam hitungan detik.", pathString: "Arsip > RPG > Manusia > Mage > 12", parent: "rpg_human_mage", choices: [] },
    hm_13: { title: "SONIC RESONANCE BARD", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 600 | MP: 500<br>Menggunakan gelombang suara frekuensi tinggi pemecah konsentrasi mantra.", pathString: "Arsip > RPG > Manusia > Mage > 13", parent: "rpg_human_mage", choices: [] },
    hm_14: { title: "BIOMANCER EVOLUTIONARY", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 700 | MP: 450<br>Mengubah organ tubuh sendiri untuk mendapat adaptasi medan ekstrim.", pathString: "Arsip > RPG > Manusia > Mage > 14", parent: "rpg_human_mage", choices: [] },
    hm_15: { title: "RUNESMITH ENCHANTER", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 650 | MP: 550<br>Menanamkan segel sihir pertahanan pada armor secara instan.", pathString: "Arsip > RPG > Manusia > Mage > 15", parent: "rpg_human_mage", choices: [] },


    // =========================================================================
    // BRANCH: RAS MONSTER
    // =========================================================================
    rpg_monster: {
        title: "KERAJAAN MONSTER",
        subtitle: "Fase 2 - Pilih Keturunan Darah",
        description: "Mengandalkan evolusi biologis brutal atau kutukan sihir kuno malam.",
        pathString: "Arsip > RPG Game > Monster",
        parent: "rpg_root",
        choices: [
            { text: "🐗 Suku Orc (Brute Force)", target: "rpg_monster_orc" },
            { text: "🦇 Bangsawan Vampir (Undead Nobles)", target: "rpg_monster_vamp" }
        ]
    },

    // --- KELAS ORC (15 PILIHAN SPESIALISASI) ---
    rpg_monster_orc: {
        title: "KLAN ORC BRUTAL",
        subtitle: "Fase 3 - Tentukan 1 dari 15 Kasta Tempur",
        description: "Ras berdarah hijau yang memuja kekuatan fisik mentah murni.",
        pathString: "Arsip > RPG Game > Monster > Orc",
        parent: "rpg_monster",
        choices: [
            { text: "🪓 01. Ironhide Berserker", target: "mo_01" },
            { text: "👑 02. High Chieftain Warlord", target: "mo_02" },
            { text: "🔥 03. Shaman Elements", target: "mo_03" },
            { text: "🐗 04. Dire-Boar Rider", target: "mo_04" },
            { text: "🧱 05. Siege Breaker Juggernaut", target: "mo_05" },
            { text: "🗡️ 06. Bloodbound Marauder", target: "mo_06" },
            { text: "☣️ 07. Plague-Bearer Brute", target: "mo_07" },
            { text: "⛓️ 08. Chain-Slaver Overseer", target: "mo_08" },
            { text: "🪨 09. Earthshaker Brawler", target: "mo_09" },
            { text: "👣 10. Shadowstalker Scout", target: "mo_10" },
            { text: "🐺 11. Frost-Wolf Alpha", target: "mo_11" },
            { text: "💥 12. Demolition Sapper", target: "mo_12" },
            { text: "⚔️ 13. Dual-Axe Pitfighter", target: "mo_13" },
            { text: "🦴 14. Bone-Crusher Tyrant", target: "mo_14" },
            { text: "⚡ 15. Stormrage Mystic", target: "mo_15" }
        ]
    },

    // DETAIL DATA 15 ORC MONSTER
    mo_01: { title: "IRONHIDE BERSERKER", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 1400 | MP: 40<br>Makin sekarat HP, damage serangan melonjak berlipat ganda.", pathString: "Arsip > RPG > Monster > Orc > 01", parent: "rpg_monster_orc", choices: [] },
    mo_02: { title: "HIGH CHIEFTAIN WARLORD", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 1100 | MP: 120<br>Memanggil bala bantuan prajurit Orc kecil untuk mengeroyok target.", pathString: "Arsip > RPG > Monster > Orc > 02", parent: "rpg_monster_orc", choices: [] },
    mo_03: { title: "SHAMAN ELEMENTS", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 850 | MP: 450<br>Menggunakan totem petir dan penyembuhan spiritual bumi.", pathString: "Arsip > RPG > Monster > Orc > 03", parent: "rpg_monster_orc", choices: [] },
    mo_04: { title: "DIRE-BOAR RIDER", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 1050 | MP: 80<br>Kavaleri berat pembongkar formasi depan barisan musuh.", pathString: "Arsip > RPG > Monster > Orc > 04", parent: "rpg_monster_orc", choices: [] },
    mo_05: { title: "SIEGE BREAKER JUGGERNAUT", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 1600 | MP: 30<br>Penghancur struktur tameng dan gerbang mekanis terkuat.", pathString: "Arsip > RPG > Monster > Orc > 05", parent: "rpg_monster_orc", choices: [] },
    mo_06: { title: "BLOODBOUND MARAUDER", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 1200 | MP: 60<br>Mendapat lifesteal fisik setiap kali membunuh target.", pathString: "Arsip > RPG > Monster > Orc > 06", parent: "rpg_monster_orc", choices: [] },
    mo_07: { title: "PLAGUE-BEARER BRUTE", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 1350 | MP: 70<br>Mengeluarkan kabut racun hijau pembusuk armor secara pasif.", pathString: "Arsip > RPG > Monster > Orc > 07", parent: "rpg_monster_orc", choices: [] },
    mo_08: { title: "CHAIN-SLAVER OVERSEER", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 1000 | MP: 110<br>Mengikat dan menarik musuh lincah agar tidak bisa kabur.", pathString: "Arsip > RPG > Monster > Orc > 08", parent: "rpg_monster_orc", choices: [] },
    mo_09: { title: "EARTHSHAKER BRAWLER", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 1250 | MP: 50<br>Pukulan tanah yang memberikan efek gempa stun area.", pathString: "Arsip > RPG > Monster > Orc > 09", parent: "rpg_monster_orc", choices: [] },
    mo_10: { title: "SHADOWSTALKER SCOUT", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 800 | MP: 150<br>Orc langka yang ahli bersembunyi di semak dan menyergap senyap.", pathString: "Arsip > RPG > Monster > Orc > 10", parent: "rpg_monster_orc", choices: [] },
    mo_11: { title: "FROST-WOLF ALPHA", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 950 | MP: 140<br>Bertarung bersama serigala es besar berstatus membekukan.", pathString: "Arsip > RPG > Monster > Orc > 11", parent: "rpg_monster_orc", choices: [] },
    mo_12: { title: "DEMOLITION SAPPER", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 750 | MP: 200<br>Membawa peledak berbahaya dengan damage bunuh diri masif.", pathString: "Arsip > RPG > Monster > Orc > 12", parent: "rpg_monster_orc", choices: [] },
    mo_13: { title: "DUAL-AXE PITFIGHTER", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 900 | MP: 90<br>Akurasi rendah namun kecepatan tebasan kapak ganda luar biasa gila.", pathString: "Arsip > RPG > Monster > Orc > 13", parent: "rpg_monster_orc", choices: [] },
    mo_14: { title: "BONE-CRUSHER TYRANT", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 1300 | MP: 60<br>Bersenjata gada tulang purba dengan efek critical pukul hancur.", pathString: "Arsip > RPG > Monster > Orc > 14", parent: "rpg_monster_orc", choices: [] },
    mo_15: { title: "STORMRAGE MYSTIC", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 800 | MP: 500<br>Memanggil badai petir magis ke dalam senjata kapaknya.", pathString: "Arsip > RPG > Monster > Orc > 15", parent: "rpg_monster_orc", choices: [] },

    // --- KELAS VAMPIR (15 PILIHAN SPESIALISASI) ---
    rpg_monster_vamp: {
        title: "KASTIL VAMPIR ABADI",
        subtitle: "Fase 3 - Pilih 1 dari 15 Garis Darah Kutukan",
        description: "Bangsawan malam pemanipulasi vitalitas makluk hidup.",
        pathString: "Arsip > RPG Game > Monster > Vampir",
        parent: "rpg_monster",
        choices: [
            { text: "🩸 01. Blood Mage Siphon", target: "mv_01" },
            { text: "👤 02. Shadow Assassin Stalker", target: "mv_02" },
            { text: "🦇 03. Nightstalker Bat Lord", target: "mv_03" },
            { text: "🔮 04. Countess Hypnotic", target: "mv_04" },
            { text: "⚔️ 05. Noble Crimson Fencer", target: "mv_05" },
            { text: "🐺 06. Lycan-Hybrid Abomination", target: "mv_06" },
            { text: "💀 07. Soul-Eater Revenant", target: "mv_07" },
            { text: "❄️ 08. Frost-Grave Lich", target: "mv_08" },
            { text: "🎭 09. Doppelganger Mimic", target: "mv_09" },
            { text: "☣️ 10. Toxic Miasma Nosferatu", target: "mv_10" },
            { text: "🕯️ 11. Ritualist Sanguine", target: "mv_11" },
            { text: "🔗 12. Soul-Chain Binder", target: "mv_12" },
            { text: "🛡️ 13. Gargoyle Stone Ward", target: "mv_13" },
            { text: "🥀 14. Wilting Rose Aristocrat", target: "mv_14" },
            { text: "🌌 15. Eclipse Void Monarch", target: "mv_15" }
        ]
    },

    // DETAIL DATA 15 VAMPIR MONSTER
    mv_01: { title: "BLOOD MAGE SIPHON", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 700 | MP: 400<br>Menyerap vitalitas darah musuh untuk konversi regenerasi HP.", pathString: "Arsip > RPG > Monster > Vampir > 01", parent: "rpg_monster_vamp", choices: [] },
    mv_02: { title: "SHADOW ASSASSIN STALKER", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 600 | MP: 250<br>Menembus bayangan dan memberikan instant critical dari belakang.", pathString: "Arsip > RPG > Monster > Vampir > 02", parent: "rpg_monster_vamp", choices: [] },
    mv_03: { title: "NIGHTSTALKER BAT LORD", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 650 | MP: 300<br>Berubah menjadi kawanan kelelawar untuk menghindari deteksi fisik.", pathString: "Arsip > RPG > Monster > Vampir > 03", parent: "rpg_monster_vamp", choices: [] },
    mv_04: { title: "COUNTESS HYPNOTIC", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 550 | MP: 500<br>Sihir hipnotis mata yang memaksa musuh menyerang temannya sendiri.", pathString: "Arsip > RPG > Monster > Vampir > 04", parent: "rpg_monster_vamp", choices: [] },
    mv_05: { title: "NOBLE CRIMSON FENCER", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 800 | MP: 200<br>Duelis anggun bercelurit darah dengan bonus evasion (hindaran) tinggi.", pathString: "Arsip > RPG > Monster > Vampir > 05", parent: "rpg_monster_vamp", choices: [] },
    mv_06: { title: "LYCAN-HYBRID ABOMINATION", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 1100 | MP: 80<br>Hasil eksperimen tabu. Gabungan cakar serigala dan ketahanan vampir.", pathString: "Arsip > RPG > Monster > Vampir > 06", parent: "rpg_monster_vamp", choices: [] },
    mv_07: { title: "SOUL-EATER REVENANT", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 750 | MP: 450<br>Mencuri cadangan Mana (MP) target pada tiap hit kutukan.", pathString: "Arsip > RPG > Monster > Vampir > 07", parent: "rpg_monster_vamp", choices: [] },
    mv_08: { title: "FROST-GRAVE LICH", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 620 | MP: 550<br>Menurunkan temperatur ruangan untuk mereduksi kecepatan serang lawan.", pathString: "Arsip > RPG > Monster > Vampir > 08", parent: "rpg_monster_vamp", choices: [] },
    mv_09: { title: "DOPPELGANGER MIMIC", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 600 | MP: 400<br>Meniru wujud dan 1 skill aktif musuh terkuat secara instan.", pathString: "Arsip > RPG > Monster > Vampir > 09", parent: "rpg_monster_vamp", choices: [] },
    mv_10: { title: "TOXIC MIASMA NOSFERATU", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 900 | MP: 350<br>Vampir purba buruk rupa pembawa infeksi wabah fatal.", pathString: "Arsip > RPG > Monster > Vampir > 10", parent: "rpg_monster_vamp", choices: [] },
    mv_11: { title: "RITUALIST SANGUINE", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 680 | MP: 480<br>Menggambar lingkaran sihir darah di tanah untuk jebakan massal.", pathString: "Arsip > RPG > Monster > Vampir > 11", parent: "rpg_monster_vamp", choices: [] },
    mv_12: { title: "SOUL-CHAIN BINDER", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 850 | MP: 380<br>Menghubungkan nyawa 2 musuh; jika 1 terluka, yang lain ikut sekarat.", pathString: "Arsip > RPG > Monster > Vampir > 12", parent: "rpg_monster_vamp", choices: [] },
    mv_13: { title: "GARGOYLE STONE WARD", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 1250 | MP: 100<br>Dapat mengeras menjadi patung batu abadi untuk kebal total selama 5 detik.", pathString: "Arsip > RPG > Monster > Vampir > 13", parent: "rpg_monster_vamp", choices: [] },
    mv_14: { title: "WILTING ROSE ARISTOCRAT", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 700 | MP: 420<br>Memberikan debuff yang mengurangi akurasi serangan musuh secara masif.", pathString: "Arsip > RPG > Monster > Vampir > 14", parent: "rpg_monster_vamp", choices: [] },
    mv_15: { title: "ECLIPSE VOID MONARCH", subtitle: "Final Spec", description: "<strong>[STATUS]</strong> HP: 950 | MP: 600<br>Raja tertinggi kegelapan. Mampu menggelapkan total layar navigasi game.", pathString: "Arsip > RPG > Monster > Vampir > 15", parent: "rpg_monster_vamp", choices: [] }
};
