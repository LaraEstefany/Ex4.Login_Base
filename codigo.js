function Submeter() {

    var email = document.getElementById("email").value
    email = email.toLowerCase()
    var senha = document.getElementById("senha").value

    emailCerto = "base@social.com"
    senhaCerta = "abc123"

    if (email == emailCerto && senha == senhaCerta) {
        alert("Muito bem seu login e senha estão corretíssimos pena que não adianta nada.")

    } else {
        alert("Sinto muito não vais acessar com esse e-mail ou senha aí não mlk.")
    }
}
