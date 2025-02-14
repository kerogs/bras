# Présentation d'une trame

Une trame se présente sous la forme d'un code **JSON**.

La communication utilisée repose sur l'[UART](https://fr.wikipedia.org/wiki/UART), celle de l'[Arduino](/composants/arduino) et celle du [HMI](/composants/hmi).

::: tip
Il est important de noter que la communication **UART** doit être inversée.
:::

::: details En savoir plus
Pour plus de détails, consultez la page de présentation du [4069](/composants/4069).
:::


## Baud

Le débit configuré pour le **HMI** et l'**Arduino** est de **9600 bauds**.

### Visualisation

L'image ci-dessous illustre que **1/ΔX = 9.6 kHz**, soit **9600 bauds**.

![preview](/temp/DS2_2024619201855.png)


## Configuration du décodage

Nous utilisons un oscilloscope **RIGOL** pour visualiser les messages, mais la configuration reste similaire avec d'autres modèles.

| Paramètre   | Valeur                                                    |
|-------------|-----------------------------------------------------------|
| **Décodage**  | RS232                                                     |
| **État BUS**  | Activé                                                    |
| **TX**        | CH1 (**DO**)                                              |
| **RX**        | CH2 (**DI**)                                              |
| **Baud**      | 9600                                                      |
| **Polarité**  | Normale (ou inversée si connecté sur TX3 de l'Arduino)   |


## Capture des trames à l'oscilloscope

Pour capturer une trame, deux options s'offrent à vous :  
- **Depuis l'Arduino**  
- **Depuis le HMI**  

Le choix dépend de votre préférence et de votre configuration.

::: danger Attention
La conversion des données binaires varie selon que vous effectuez la mesure avant ou après le [4069](/composants/4069).

Par exemple, si la mesure est prise directement sur les entrées du **HMI**, une inversion du signal sera nécessaire.
:::

### Visualisation

![Visualisation](/temp/DS2_2024619201331.png)

## Bit de start

L’image suivante montre que le **bit de start** est bien présent et **ne doit pas être pris en compte**.

::: tip
Les trois premières valeurs seront toujours **`ST<`** et les trois dernières toujours **`>ET`**. (Se référer au [PDF d'instruction du HMI](https://www.src.ks-infinite.fr/bras/stone-hmi-Instruction-Sets-V2.5RC-20240105-datasheet.pdf))
:::

![visualisation bit de start](/temp/start.png)
