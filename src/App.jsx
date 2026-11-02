import React from "react";
import KartuProfil from "./KartuProfil";
import PortoMini from "./PortoMini";

function App() {
  // 1. Data daftar mata kuliah praktikum
  const daftarPraktikum = [
    {
      id: 101,
      kode: "IF211",
      nama: "Pemrograman Web (React & Laravel)",
      sks: 3,
      hari: "Senin",
    },
    {
      id: 102,
      kode: "IF212",
      nama: "Sistem Basis Data (PostgreSQL)",
      sks: 3,
      hari: "Rabu",
    },
    {
      id: 103,
      kode: "IF213",
      nama: "Rekayasa Perangkat Lunak Terapan",
      sks: 3,
      hari: "Kamis",
    },
    {
      id: 104,
      kode: "IF214",
      nama: "Arsitektur Sistem Terdistribusi",
      sks: 2,
      hari: "Jumat",
    },
  ];

  // 2. Fungsi tombol interaktivitas
  const notifikasiSapaan = () => {
    alert(
      "Selamat datang di Modul 1! Anda berhasil menguasai fondasi arsitektur React JS."
    );
  };

  // 3. Data daftar proyek portofolio
  const daftarProyek = [
    {
      id: 1,
      judul: "Website Warmindo 21",
      deskripsi:
        "Website pemesanan dan informasi menu makanan serta minuman pada Warmindo 21.",
      teknologi: ["HTML", "CSS", "PHP", "MySQL"],
      github:
        "https://github.com/banyubiankca/pw2025_tubes_243040085.git",
    },
    {
      id: 2,
      judul: "Website Company Profile",
      deskripsi:
        "Website profil perusahaan yang menampilkan informasi tentang perusahaan, layanan, dan tim.",
      teknologi: ["CSS", "HTML"],
      github:
        "https://github.com/banyubiankca/ITW2024_Project2_243040085.git",
    },
    {
      id: 3,
      judul: "Website Portofolio",
      deskripsi:
        "Website pribadi yang menampilkan profil, kemampuan, dan kumpulan proyek yang telah dibuat.",
      teknologi: ["Script JS", "HTML", "CSS"],
      github:
        "https://github.com/banyubiankca/ITW2024_Project1_243040085.git",
    },
    {
      id: 4,
      judul: "Showcase Portofolio Mini",
      deskripsi:
        "Website yang menampilkan kumpulan proyek dan kemampuan dalam bidang pemrograman web.",
      teknologi: ["React JS", "HTML", "CSS"],
      github:
        "https://github.com/banyubiankca/PrakWeb2026-C-NPM.git",
    },
  ];

  // 4. Fungsi tombol GitHub
  const bukaGithub = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  // 5. Tampilan utama
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "0 24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "32px" }}>
        <h1 style={{ color: "#1B365D", margin: "0 0 8px 0" }}>
          Praktikum Pemrograman Web
        </h1>
        <p style={{ color: "#666", fontSize: "15px" }}>
          Laboratorium Informatika - Modul 1: Pengenalan React JS & Vite
        </p>
      </header>

      {/* Profil Mahasiswa */}
      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ color: "#2C3E50" }}>
          Profil Mahasiswa Praktikan
        </h2>

        <KartuProfil
          nama="Mahasiswa Informatika"
          npm="233040000"
          kelas="IF - Praktikum"
          status="Aktif"
          fotoUrl="https://via.placeholder.com/80"
        />
      </section>

      {/* Daftar Praktikum */}
      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ color: "#2C3E50" }}>
          Daftar Rencana Praktikum Semester (List Rendering)
        </h2>

        <div style={{ display: "grid", gap: "12px" }}>
          {daftarPraktikum.map((matkul) => (
            <div
              key={matkul.id}
              style={{
                padding: "14px 18px",
                backgroundColor: "#F8F9FA",
                borderLeft: "5px solid #1B365D",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <span style={{ fontWeight: "bold", color: "#1B365D" }}>
                  {matkul.kode}
                </span>{" "}
                - {matkul.nama}

                <div style={{ fontSize: "12px", color: "#777", marginTop: "4px" }}>
                  Jadwal Sesi: {matkul.hari}
                </div>
              </div>

              <span
                style={{
                  backgroundColor: "#E1E4E8",
                  padding: "4px 10px",
                  borderRadius: "12px",
                  fontSize: "13px",
                }}
              >
                {matkul.sks} SKS
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Tombol Interaktivitas */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button
          onClick={notifikasiSapaan}
          style={{
            backgroundColor: "#1B365D",
            color: "#FFFFFF",
            padding: "12px 24px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          Uji Interaktivitas Event (Klik Disini)
        </button>
      </div>

      {/* Showcase Portofolio Mini */}
      <PortoMini
        daftarProyek={daftarProyek}
        bukaGithub={bukaGithub}
      />
    </div>
  );
}

export default App;
