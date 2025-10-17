# ASMI1-19
![img](https://img.shields.io/badge/Kerogs-fd4e2b.svg?style=for-the-badge)


::: warning
Le Shield n'est pas disponible sur internet. C'est un shield conçu spécialement pour l'arduino et le projet B.R.A.S. Il est également compatible pour être utilisé en dessous du [DRI0023](/composants/dri0023)
:::

## Description
Ce shield permet de simplifier les connections entre les différents éléments du B.R.A.S. Il est composé également de composants nécessaire au bon fonctionnement du projet.

Le ASMI1 fonctionne sur une tension VIN de ``12V``. Il possède un régulateur de tension afin de la convertir de 12V -> 9V afin d'être compatible pour l'utilisation du [csn-a2](/composants/csn-a2)

## Composant utilisé
- [4069](/composants/4069)
- Régulateur 12v -> 9v

## Equipement supporté
|Equipement|Sortie|Testé|
|----------|------|-----|
|[STONE HMI](/composants/hmi)|J1 STONE (1-4)|✅|
|[Imprimante](/composants/csn-a2)|J2 PRINT (1-4)|✅|
|Moteur|J3 CASIER (1-8)|✅|
|[DRI0023](/composants/dri0023)|Shield|✅|


## Schéma

### Schéma PCB
![Rendu](https://raw.githubusercontent.com/kerogs/bras/refs/heads/main/assets/preview1.png)

### Vue dessus
![Rendu](https://raw.githubusercontent.com/kerogs/bras/refs/heads/main/assets/1-asmi1-19.jpg)

### Vue dessous
![Rendu](https://raw.githubusercontent.com/kerogs/bras/refs/heads/main/assets/2-asmi1-19.jpg)

### Fabrication
![Rendu](https://raw.githubusercontent.com/kerogs/bras/refs/heads/main/assets/fab1-asmi1-19.jpg)
![Rendu](https://raw.githubusercontent.com/kerogs/bras/refs/heads/main/assets/fab2-asmi1-19.jpg)