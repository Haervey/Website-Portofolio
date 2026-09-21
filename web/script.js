/* =========================================================
   KONFIGURASI WARNA & SHADOW (TAILWIND)
   ========================================================= */
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Space Grotesk', 'sans-serif'],
            },
            
            // EDIT DI SINI: Kamu bisa ganti Kode Warna Hex (#...) sesuai selera
            colors: {
                bgDark: '#121212',     // Warna Background Utama
                cardDark: '#1e1e1e',   // Warna Background Kartu
                neoYellow: '#FFE600',  // Aksent Kuning Neon
                neoGreen: '#00FF66',   // Aksent Hijau Neon
                neoPink: '#FF007A',    // Aksent Pink Neon
                neoBlue: '#00E5FF',    // Aksent Biru Neon
                neoPurple: '#9D00FF'   // Aksent Ungu Neon
            },
            
            // EDIT DI SINI: Atur Ukuran Shadow Khas Neubrutalism
            boxShadow: {
                'neo-yellow': '5px 5px 0px 0px #FFE600',
                'neo-green': '5px 5px 0px 0px #00FF66',
                'neo-pink': '5px 5px 0px 0px #FF007A',
                'neo-white': '6px 6px 0px 0px #FFFFFF',
                'neo-white-sm': '3px 3px 0px 0px #FFFFFF',
            }
        }
    }
};

/* =========================================================
   INTERAKSI FORM KONTAK
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // EDIT DI SINI: Pesan konfirmasi saat form dikirim
            alert('Pesan terkirim! Terima kasih sudah menghubungi.');
            contactForm.reset();
        });
    }
});