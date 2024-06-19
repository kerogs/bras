# Installation du materiel
Communication entre l'afficheur STONE HMI, Arduino MEGA et action des casiers du B.R.A.S.

::: warning
Le branchement pour les versions ``>1.1.40`` est disponible sur la [page suivante](/docs/old-installation) 
:::

### Equipement :
Liste des équipements nécessaire pour le bon fonctionnement.
- Arduino Mega 2560 [DATASHEET](/composants/arduino)
- STONE [HMI](/composants/hmi)
- Porte logique inverseur - [4069](/composants/4069)
- Régulateur 12v -> 9v - [L7809CV](/composants/L7809CV)
- Imprimante thermique TTL - [csn-a2](/composants/csn-a2)
- Shield Arduino - [ASMI1-19](/composants/ASMI1-19)

## Schéma branchement shield
::: tip EXPLICATION
- l'écran est situé en haut à droite
- L'imprimante est situé en bas à droite
- le moteur est situé à gauche
:::
![branchement shield](https://src.ks-infinite.fr/bras/preview1.png)

## Moteur
Il est important de noter que les commandes moteurs sont au total branché sur le shield [ASMI1-19](/composants/ASMI1-19) et le [dri0023](/composants/dri0023)
### ASMI1-19
- Led vert/rouge
- bouton ouverture/fermeture
### dri0023
- Moteur

## Résultat montage
![Resultat montage](/temp/resultat_montage.jpg)