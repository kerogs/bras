# Arduino
![Arduino Mega](https://img.shields.io/badge/Arduino%20Mega-%2300878F?style=for-the-badge&logo=arduino&logoColor=fff&logoSize=fff)

La arduino mega 2560 est une carte qui servira de controleur.

::: tip
Pour faire la communication entre le HMI et l'arduino on utilise une [porte logique 4069](/composants/4069)
:::

::: warning
Lors du démarrage d'une arduino ou d'un reset il y'a un léger délai ou l'arduino va lancer le programme puis se relancer. Il est donc conseillé d'y mettre au début du programme dans le setup un délai compris entre 100 et 300ms (selon la carte). Dans le code de la carte il est situé dans la fonction [configset()](/functions/configset.md)
:::

## Description <Badge type="info" text="Extrait" />
- ATmega2560 Processor
    + Up to 16 MIPS Throughput at 16MHz
    + 256k bytes (of which 8k is used for the bootloader)
    + 4k bytes EEPROM
    + 8k bytes Internal SRAM
    + 32 × 8 General Purpose Working Registers
    + Real Time Counter with Separate Oscillator
    + Four 8-bit PWM Channels
    + Four Programmable Serial USART
    + Controller/Peripheral SPI Serial Interface
- ATmega16U2
    + Up to 16 MIPS Throughput at 16 MHz
    + 16k bytes ISP Flash Memory
    + 512 bytes EEPROM
    + 512 bytes SRAM
    + USART with SPI master only mode and hardware flow control (RTS/CTS)
    + Master/Slave SPI Serial Interface
- Sleep Modes
    + Idle
    + ADC Noise Reduction
    + Power-save
    + Power-down
    + Standby
    + Extended Standby
- Power
    + USB Connection
    + External AC/DC Adapter
- I/O
    + 54 Digital
    + 16 Analog
    + 15 PWM Output

## Communication
La communication des arduinos se fait en liaison série ainsi qu'avec le protocole UART TTL.

Ce qui est différent du HMI. Pour en savoir plus, aller voir la page du [HMI](/composants/hmi) et la page du [4069](/composants/4069)

## Image
![Arduion image](https://raw.githubusercontent.com/kerogs/bras/refs/heads/main/assets/arduino-mega.png)

## Oscilloscope

### Trame (RX)
![Trame RX arduino](https://raw.githubusercontent.com/kerogs/bras/refs/heads/main/assets/oscillo_trame_arduino_hex.png)

### Trame HMI + LED arduino
Led qui s'allume au passage d'une trame envoyé par le HMI
::: details Code
Morceau de code utilisé dans la version ``v1.1.26-alpha``

```c++
#define led 2

/// Reste du code

void loop() {
      // éteint la led à la fin d'une trame
    digitalWrite(led, LOW);
}

/// Reste du code

void serialEvent3() {
    for (int i = 0; i < Serial3.available(); i++) {
        while (Serial3.available() > 0) {
            digitalWrite(led, HIGH);
            /// Reste du code
        }
        /// Reste du code
    }
    /// Reste du code
}
```
:::

![trame HMI + led arduino](https://raw.githubusercontent.com/kerogs/bras/refs/heads/main/assets/oscillo_trame_led.png)

## Lien utile
- [DATASHEET](https://raw.githubusercontent.com/kerogs/bras/refs/heads/main/assets/Arduino-mega-A000067-datasheet.pdf)