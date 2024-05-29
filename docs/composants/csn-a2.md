# CSN-A2 <Badge type="tip" text="^1.1.35-beta" />
![Adafruit](https://img.shields.io/badge/Adafruit-%23000?style=for-the-badge&logo=adafruit&logoColor=fff)

Le CSN-A2 est une imprimante thermique TTL fonctionnant avec la librairie de chez adafruit.

## Utilisation
### Bibliothèque
```c++
#include "Adafruit_Thermal.h"
#include "SoftwareSerial.h"

#define led 2
#define TX_PIN 47
#define RX_PIN 49

SoftwareSerial printSerial(RX_PIN, TX_PIN);
Adafruit_Thermal printer(&printSerial);
```

### Code
Rendez-vous à la page [des fonctions](/functions/imprimante)

## Illustration
### Illustration depuis le schéma
![Schéma](https://src.ks-infinite.fr/bras/Capture%20d'%C3%A9cran%202024-05-11%20162033.png)
### Illustration depuis la datasheet
![Imprimante image](https://src.ks-infinite.fr/bras/Capture%20d'%C3%A9cran%202024-05-11%20161728.png)

## Lien utile
- [DATASHEET](https://src.ks-infinite.fr/bras/stone-hmi-Instruction-Sets-V2.5RC-20240105-datasheet.pdf)