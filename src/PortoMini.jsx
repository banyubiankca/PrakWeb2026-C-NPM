function PortoMini({ daftarProyek, bukaGithub }) {

    return (
        <div
            style={{
                maxWidth: "1000px",
                margin: "40px auto",
                padding: "0 24px",
                fontFamily: "Arial, sans-serif",
            }}
        >
            {/* Header */}
            <header style={{ textAlign: "center", marginBottom: "40px" }}>
                <h1 style={{ color: "#000000" }}>
                    Showcase Portofolio Mini
                </h1>
                <p style={{ color: "#666", fontSize: "15px" }}>
                    Kumpulan Proyek Praktikum Pemrograman Web
                </p>
            </header>

            {/* Daftar Proyek */}
            <section>
                <h2
                    style={{
                        color: "#000000",
                        borderBottom: "2px solid #E1E4E8",
                        paddingBottom: "10px",
                        marginBottom: "24px",
                    }}
                >
                    Daftar Proyek Saya
                </h2>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: "20px",
                    }}
                >
                    {daftarProyek.map((proyek) => (
                        <div
                            key={proyek.id}
                            style={{
                                border: "1px solid #ddd",
                                borderRadius: "10px",
                                padding: "20px",
                                backgroundColor: "#fff",
                                boxShadow: "0 3px 8px rgba(107, 43, 87, 0.08)",
                            }}
                        >
                            <h3 style={{ color: "#0b0a0b" }}>
                                {proyek.judul}
                            </h3>

                            <p
                                style={{
                                    color: "#555",
                                    fontSize: "14px",
                                    lineHeight: "1.6",
                                }}
                            >
                                {proyek.deskripsi}
                            </p>

                            {/* Teknologi */}
                            <div style={{ marginBottom: "20px" }}>
                                {proyek.teknologi.map((tech, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            display: "inline-block",
                                            backgroundColor: "#da61f2",
                                            color: "#000000",
                                            padding: "5px 10px",
                                            borderRadius: "15px",
                                            fontSize: "12px",
                                            margin: "4px",
                                        }}
                                    >
                                        #{tech}
                                    </span>
                                ))}
                            </div>

                            {/* Tombol GitHub */}
                            <button
                                onClick={() => bukaGithub(proyek.github)}
                                style={{
                                    backgroundColor: "#ac31c4",
                                    color: "#000000",
                                    padding: "10px 16px",
                                    border: "none",
                                    borderRadius: "6px",
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                }}
                            >
                                Lihat Repository GitHub
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer
                style={{
                    textAlign: "center",
                    marginTop: "40px",
                    color: "#777",
                    fontSize: "13px",
                }}
            >
                <p>Showcase Portofolio Mini - Praktikum Pemrograman Web</p>
            </footer>
        </div>
    );
}

export default PortoMini;
