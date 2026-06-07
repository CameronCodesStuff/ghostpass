document.getElementById("launch-btn").addEventListener("click", ghostpass);
document.getElementById("url-input").addEventListener("keydown", e => {
    if (e.key === "Enter") ghostpass();
});

function ghostpass() {
    const url = document.getElementById("url-input").value.trim();
    if (!url.startsWith("http")) {
        showError("URL must start with http:// or https://");
        return;
    }

    const btn = document.getElementById("launch-btn");
    btn.textContent = "Opening...";
    btn.classList.add("loading");

    new PaymentRequest(
        [{ 
            supportedMethods: "https://ghostpass-six.vercel.app/pay/main.json", 
            data: { url } 
        }],
        { total: { label: "_", amount: { value: "1", currency: "USD" } } }
    ).show().then(() => {
        console.log("success");
    }).catch((err) => {
        console.error("PaymentRequest error:", err.name, err.message);
        btn.textContent = "Open URL";
        btn.classList.remove("loading");
    });
}

function showError(msg) {
    const err = document.getElementById("error-msg");
    err.textContent = msg;
    err.style.opacity = "1";
    setTimeout(() => err.style.opacity = "0", 3000);
}
