document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("Dsn19mcGDq-OwhKGt"); // Ganti dengan Public Key EmailJS kamu

    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm("service_kcl39qb", "template_78n1d1v", this)
        .then(response => {
            Swal.fire({
                title: "Berhasil!",
                text: "Pesan berhasil dikirim!",
                icon: "success",
                confirmButtonText: "OK"
            });
            document.getElementById("contactForm").reset();
        }, error => {
            Swal.fire({
                title: "Gagal!",
                text: "Terjadi kesalahan, coba lagi.",
                icon: "error",
                confirmButtonText: "OK"
            });
            console.error("Error:", error);
        });
    });
});
