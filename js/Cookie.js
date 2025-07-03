export function cookies() {
    const cookieConsent = document.querySelector("#cookieConsent");
    const cookieAccept = document.querySelector("#cookieAccept");
    const cookieClose = document.querySelector("#cookieClose");

    // Check if cookie consent was already given
    if (!localStorage.getItem("cookieConsent")) {
        cookieConsent.classList.remove("cookie-hidden"); // Show the consent banner
    } else {
        cookieConsent.classList.add("cookie-hidden"); // Hide the consent banner if already accepted
    }

    // Handle accept button click
    cookieAccept.addEventListener("click", function () {
        localStorage.setItem("cookieConsent", "true");
        cookieConsent.classList.add("cookie-hidden"); // Hide the consent banner after acceptance
    });

    // Handle close button click
    cookieClose.addEventListener("click", function () {
        cookieConsent.classList.add("cookie-hidden"); // Hide the consent banner when closed
    });
}
