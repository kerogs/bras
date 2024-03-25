# Installation du materiel
Communication entre l'afficheur STONE HMI, Arduino MEGA et action des casiers du B.R.A.S.

::: tip
Il est important de respecter cette étape. Sauf si vous savez ce que vous faites.
:::

### Equipement :
Liste des équipements nécessaire pour le bon fonctionnement.
- Arduino Mega 2560 [DATASHEET](/composants/arduino)
- STONE [HMI](/composants/hmi)
- Porte logique inverseur - [4069](/composants/4069)

## Branchement
Ceci est le branchement entre les différents composants

::: details
Pour avoir plus d'informations sur le [**4069**](/composants/4069) vous pouvez alors simplement [**Cliquez ici**](/composants/4069)
:::

### Arduino -> 4069
- [15] Arduino <- [2] 4069
- [14] Arduino -> [3] 4069
- [GND] Arduino -> [7] 4069
- [5V] Arduino -> [14] 4069

### HMI -> 4069
Le STONE HMI est alimenté en 7.5 volt [voir plus bas](#schema-de-cablage)
- [DI] HMI <- [4] 4069 
- [DO] HMI -> [1] 4069

### HMI -> Arduino
- [GND] HMI - [GND] Arduino

### Moteur -> Arduino
- A venir...

### Arduion -> LED
La valeur de la résistance pour la LED dépant du modèle utiliser. Mais il est courant d'utiliser une résistance de 220 Ohms.
::: details Information
L'installation d'une LED n'est pas obligatoire. Si une LED est placé, elle ne servira qu'à indiquer visuellement qu'une trame est reçu par l'arduino.
:::

- [2] ARDUINO -> LED

## Rendu

### Rendu visuel 
Branchement de l'[arduino mega](../composants/arduino.md) avec le [HMI](../composants/hmi.md) avec entre le [4069](../composants/4069.md) 
![Rendu image](https://src.ks-infinite.fr/bras/Cablage_photo.jpg)

### Schéma de cablage <Badge type="info" text="easyEDA" />
![Rendu image](https://src.ks-infinite.fr/bras/Schematic_brashmi_2024-03-13.svg) 