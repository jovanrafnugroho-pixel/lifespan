// data.js
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

    // === MENU UTAMA RPG ===
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

    // === DETAIL RAS MANUSIA ===
    rpg_human: {
        title: "RAS MANUSIA",
        subtitle: "Fase 2 - Pilih Kelas",
        description: "Ras yang paling adaptif dengan pertumbuhan tercepat di dunia.",
        pathString: "Arsip > RPG Game > Manusia",
        parent: "rpg_root",
        choices: [
            { text: "⚔️ Kesatria Pedang (Knight)", target: "rpg_human_knight" }
        ]
    },

    rpg_human_knight: {
        title: "SPESIALISASI KESATRIA",
        subtitle: "Fase 3 - Pilih Gaya Bertarung",
        description: "Bagaimana caramu mengayunkan besi di medan perang?",
        pathString: "Arsip > RPG Game > Manusia > Kesatria",
        parent: "rpg_human",
        choices: [
            { text: "🗡️ Longsword (Pedang Panjang)", target: "spec_human_longsword" }
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
            + Keseimbangan yang sangat baik antara daya serang dan pertahanan.<br><br>
            <strong>[ KEKURANGAN ]</strong><br>
            - Kecepatan serang tergolong lambat karena bobot pedang.
        `,
        pathString: "Arsip > RPG > Manusia > Kesatria > Longsword",
        parent: "rpg_human_knight",
        choices: []
    }

    // Nanti data Monster, Elf, Dwarf, dll tinggal disambung di bawah sini...
};
