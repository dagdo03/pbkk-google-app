const form = document.getElementById("registrationForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbysvtnSvzBVt0mXrTQbbdUFQfLVrq7IKZUO6IyaByVxTSLahFb8jGg4p24rP5cBNcu_/exec",
      {
        method: "POST",
        headers: {
            "content-Type": "text/plain;charset=utf-8"
        },
        body: new FormData(form),
      }
    );

    const data = await response.json();

    if (data.result === "success") {
      alert("Anda telah berhasil berlanganan.");
      window.location.reload();
    } else {
      throw new Error(data.error);
    }
  } catch (error) {
    console.error("Error! Something's wrong", error.message);
    alert("Langanan Gagal! Silahkan coba lagi.");
  }
});