function showSection(sectionId) {
    // Oculta todas as seções
    document.querySelectorAll(".section").forEach(function (section) {
        section.style.display = "none";
    });
    // Mostra a seção selecionada
    document.getElementById(sectionId).style.display = "block";
}