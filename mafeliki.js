


// 3️⃣ Message visuel lors de l’envoi du formulaire
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Récupère les valeurs du formulaire
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const email = document.getElementById("email").value;
    const village = document.getElementById("village").value;
    const produit = document.getElementById("produits").value;

    // Affiche un message personnalisé avec alert
    alert(
        `Bonjour ${prenom} ${nom} ! 🌿\n` +
        `Votre demande pour "${produit}" a bien été reçue.\n` +
        `Nous vous contacterons bientôt à l'adresse : ${email}` +
        (village ? `, Village : ${village}` : '') +
        `.`
    );

    // Réinitialise le formulaire
    form.reset();
});

