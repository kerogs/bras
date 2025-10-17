# Installation du matériel

Communication entre l'afficheur STONE HMI, Arduino MEGA et action des casiers du B.R.A.S.

::: warning
Le branchement pour les versions `<1.1.40` est disponible sur la [page "old-installation"](/docs/old-installation).
:::

### Équipement
Liste des équipements nécessaires pour le bon fonctionnement :
- Arduino Mega 2560 [DATASHEET](/composants/arduino)
- STONE [HMI](/composants/hmi)
- Porte logique inverseur - [4069](/composants/4069)
- Régulateur 12V -> 9V - [L7809CV](/composants/L7809CV)
- Imprimante thermique TTL - [CSN-A2](/composants/csn-a2)
- Shield Arduino - [ASMI1-19](/composants/ASMI1-19)

## Schéma de branchement du shield
::: tip EXPLICATION
- L'écran est situé en haut à droite.
- L'imprimante est située en bas à droite.
- Le moteur est situé à gauche.
:::
![branchement shield](https://raw.githubusercontent.com/kerogs/bras/refs/heads/main/assets/preview1.png)

## Moteur
Il est important de noter que les commandes des moteurs sont toutes branchées sur le shield [ASMI1-19](/composants/ASMI1-19) et le [DRI0023](/composants/dri0023).

### ASMI1-19
- LED vert/rouge
- Bouton ouverture/fermeture

### DRI0023
- Shield moteur

## Résultat du montage
![Résultat du montage](/temp/resultat_montage.jpg)

![Résultat du montage](https://raw.githubusercontent.com/kerogs/bras/refs/heads/main/assets/rf2.jpg)

::: details Première visualisation
Si vous le souhaitez, vous pouvez voir à quoi ressembler le schéma réaliser. C'est ce qui a était imaginer vers le tout début du projet. Ne le prenez donc pas comme acquis mais comme annecdote

![Résultat du montage](https://raw.githubusercontent.com/kerogs/bras/refs/heads/main/assets/schema_base.jpg)

:::
