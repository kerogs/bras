# Présentation d'une trame

Une trame se présente sous la forme d'un code JSON.

La communication utilisée est l'UART, celle de l'[Arduino](/composants/arduino) et celle du [HMI](/composants/hmi).

::: tip
Il est important de savoir que la communication UART doit être inversée.
:::

::: details En savoir plus
Pour en savoir plus, rendez-vous sur la page de présentation du [4069](/composants/4069).
:::

## Baud

Le nombre de bauds configuré pour le **HMI** et l'**Arduino** est de `9600`.

### Visualisation

On peut voir sur l'image ci-dessous que 1/deltaX = 9.6kHz, soit 9600 bauds.

![preview](/temp/DS2_2024619201855.png)

## Configuration du décodage

Nous utilisons un oscilloscope de la marque RIGOL pour visualiser nos messages, mais la configuration ne devrait pas changer avec d'autres oscilloscopes.

| Paramètre   | Valeur                               |
|-------------|--------------------------------------|
| Décodage    | RS232                                |
| État BUS    | On                                   |
| TX          | CH1 (DO)                             |
| RX          | CH2 (DI)                             |
| Baud        | 9600                                 |
| Polarité    | Normale (ou inversée si branché sur TX3 de l'Arduino) |

## Passage à l'oscilloscope

Pour récupérer le passage d'une trame, vous pouvez le faire de deux manières. À vous de choisir si vous préférez récupérer vos trames depuis l'Arduino ou depuis le HMI.

::: danger Attention
L'opération de conversion des données binaires ne se fait pas de la même manière en fonction de si vous prenez la mesure avant ou après le [4069](/composants/4069).

Par exemple, si vous effectuez votre mesure directement sur les entrées du HMI, vous devrez passer par une inversion du signal.
:::

### Visualisation

![Visualisation](/temp/DS2_2024619201331.png)

## Bit de start

Vous pouvez voir sur l'image suivante que le bit de start existe bien et qu'il n'est pas à prendre en compte.

::: tip
Les trois premières valeurs seront toujours `ST<` et les trois dernières seront toujours `>ET`.
:::

![visualisation bit de start](/temp/start.png)
