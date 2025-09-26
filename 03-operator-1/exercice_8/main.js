// Exercice 8
// Écrivez votre code ici

// 1. Déclaration du salaire mensuel
let salaireMensuel = 500;

// 2-4. Calcul des dépenses principales
let loyer = salaireMensuel * 0.30;
let nourriture = salaireMensuel * 0.20;
let transport = salaireMensuel * 0.10;

// 5. Dépenses supplémentaires
let autresDepenses = 50;
autresDepenses += 25; // équivalent à : autresDepenses = autresDepenses + 25

// 6. Total des dépenses
let totalDepenses = loyer + nourriture + transport + autresDepenses;

// 7. Calcul du reste
let reste = salaireMensuel - totalDepenses;

// 8. Vérification du budget
if (reste >= 100) {
    console.log("Budget bien géré");
} else {
    console.log("Attention, budget serré");
}

// 9. Ajout des loisirs
let loisirs = salaireMensuel * 0.15;
totalDepenses += loisirs;
reste = salaireMensuel - totalDepenses;

// 10. Pourcentages (ils sont déjà connus car basés sur le salaire)
console.log("Pourcentage du loyer : " + (loyer / salaireMensuel * 100) + "%");
console.log("Pourcentage de la nourriture : " + (nourriture / salaireMensuel * 100) + "%");
console.log("Pourcentage du transport : " + (transport / salaireMensuel * 100) + "%");
console.log("Pourcentage des autres dépenses : " + (autresDepenses / salaireMensuel * 100) + "%");
console.log("Pourcentage des loisirs : " + (loisirs / salaireMensuel * 100) + "%");

// 11. Augmentation du salaire de 10%
salaireMensuel *= 1.10;

// Recalcul des dépenses après augmentation
loyer = salaireMensuel * 0.30;
nourriture = salaireMensuel * 0.20;
transport = salaireMensuel * 0.10;
loisirs = salaireMensuel * 0.15;
autresDepenses = 50 + 25; // Réinitialisation à la bonne valeur
totalDepenses = loyer + nourriture + transport + autresDepenses + loisirs;
reste = salaireMensuel - totalDepenses;

// 12. Alerte si les dépenses dépassent 90%
if (totalDepenses > salaireMensuel * 0.90) {
    console.log("Dépenses trop élevées, réduisez vos charges");
}

// Résumé final
console.log("Salaire mensuel après augmentation : " + salaireMensuel + "€");
console.log("Total des dépenses : " + totalDepenses + "€");
console.log("Reste après dépenses : " + reste + "€");
