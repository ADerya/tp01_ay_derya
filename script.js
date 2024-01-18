document.getElementById('inscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (validateForm()) {
        var formData = new FormData(this);

        formData.forEach(function(value, key){
            console.log(key + ": " + value);
        });
    }
});

function validateForm() {
    var codePostal = document.getElementById('codePostal').value;
    var telephone = document.getElementById('telephone').value;
    var email = document.getElementById('email').value;
    var mdp = document.getElementById('mdp').value;
    var confirmerMdp = document.getElementById('confirmerMdp').value;

    var codePostalPattern = /^\d+$/; 
    var telephonePattern = /^\d+$/; 
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (!codePostalPattern.test(codePostal)) {
        alert('Veuillez entrer un code postal valide (chiffres uniquement).');
        return false;
    }

    if (!telephonePattern.test(telephone)) {
        alert('Veuillez entrer un numéro de téléphone valide (chiffres uniquement).');
        return false;
    }

    if (!emailPattern.test(email)) {
        alert('Veuillez entrer une adresse email valide.');
        return false;
    }

   
    if (mdp !== confirmerMdp) {
        alert('Les mots de passe ne correspondent pas.');
        return false;
    }

    return true;
}

