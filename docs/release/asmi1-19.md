# ASMI1-19 <Badge type="tip" text="release" />
Présentation complète du ASMI1-19. ***Il est nécessaire de connaitre le projet B.R.A.S. pour comprendre un minimum à l'intérêt du ASMI1-19 étant donné que ce dernier est dépendant du projet B.R.A.S.***

## Définition
Tout d'abords, le ***ASMI1-19*** signifie ceci:
- ``AS``: Arduino shield
- ``M``: Moteur
- ``I``: Imprimante
- ``1``: version 1
- ``-19`` Numéro de révision

## Caractéristiques
- -> Connecteur embase 4 pin pour imprimante
- -> Connecteur embase 4 pin pour HMI
- -> Connecteur embase 8 pin pour section moteur
- -> shield 1:1 arduino
- -> compatible avec d'autre shield
- -> convertisseur 12V -> 9V
- -> Capable d'alimenter par le connecteur embase 4 HMI

![pcb](https://raw.githubusercontent.com/kerogs/bras/refs/heads/main/assets/preview1.png)

## Explication
Le shield reçoit donc 3 connexions complètement différente les unes des autres. Tout d'abords, la connexion à 8 pins (J3) va simplement permettre d'alimenter la partie casier, Les pins 3-6 allimenté en 5V. Connecté directement depuis l'arduino (sortie de l'arduino : 5V). Les pins 3-4 sont destiné aux boutons et les 5-6 possède déjà des ressistances 220ohms pour les leds. les 7-8 ne sont pas utilisé. le pin 2, celui-ci est connecté directement au GND. Le pin 1 lui est lui relié au 12V.

Le connecteur J2 est destiné à l'imprimante. Le pin 1 est destiné au +9V, le pin 2 au GND et le 3-4 à la communication

Le connecteur J1 possède le pin 1 pour le +12 volts (directement depuis l'alimentation du HMI). Le pin 2 est au GND et le pin 3 et 4 est destiné au transmission.

![schéma](https://raw.githubusercontent.com/kerogs/bras/refs/heads/main/assets/preview2.png)

## Avertissement
Si vous souhaitez prendre des mesures avant que les données soit convertie en protocole TTL pour l'arduino. Vous devrez prendre la mesure coté HMI. Attention, car les mesures après convertion pour le protocole TTL sont en 5V. un faux contact peut rapidement arrivé (parler en connaissance de cause)

## Vu réel

### Vue dessus
![Rendu](https://raw.githubusercontent.com/kerogs/bras/refs/heads/main/assets/1-asmi1-19.jpg)

### Vue dessous
![Rendu](https://raw.githubusercontent.com/kerogs/bras/refs/heads/main/assets/2-asmi1-19.jpg)

### Fabrication
![Rendu](https://raw.githubusercontent.com/kerogs/bras/refs/heads/main/assets/fab1-asmi1-19.jpg)
![Rendu](https://raw.githubusercontent.com/kerogs/bras/refs/heads/main/assets/fab2-asmi1-19.jpg)