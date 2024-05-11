# Bibliothèque
## Adafruit Thermal Printer Library
Bibliothèque qui permettra de faire fonctionner l'imprimante [CSN-A2](/composants/csn-a2)
- [Github](https://github.com/adafruit/Adafruit-Thermal-Printer-Library)
```c++
#include "Adafruit_Thermal.h"
#include "SoftwareSerial.h"

#define led 2
#define TX_PIN 47
#define RX_PIN 49

SoftwareSerial printSerial(RX_PIN, TX_PIN);
Adafruit_Thermal printer(&printSerial);
```