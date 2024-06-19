# Présentation d'une trame
Une trame se présente donc sous un code JSON.

La communication utilisé est l'UART, étant celle de l'[l'arduino](/composants/arduino) et celle du [HMI](/composants/hmi).

::: tip
Il est important de savoir que la communication UART doit être inversé.

::: details En savoir plus
Pour en savoir plus, rendez-vous sur la page de présentation du [4069](/composants/4069)
:::

## Baud
Le nombre de baud est configuré pour le **HMI** et l'**arduino** est de ``9600``.

### Visualisation
On peut voir sur l'image ci-dessous que 1/deltaX = 9.6kHz soit 9600 baud

![preview](/temp/DS2_2024619201855.png)

## Configuration Décodage
A savoir, nous utilisons un osciloscope de la marque RIGOL pour visualiser nos messages. Mais la configuration ne devrait pas changer avec les autres oscilloscope.

|Paramètre|Valeur|
|---------|------|
|Décodage|RS232|
|Etat BUS|On|
|TX|CH1 (DO)|
|RX|CH2 (DI)|
|Baud|9600|
|Polarité|Normal (Ou inverse si branché sur TX3 de l'arduino)|

## Passage à l'oscilloscope.
Pour récupérer le passage d'une trame, la récupération peut se faire sur 2 partie. A vous de choisir si vous préférez récupérer vos trames depuis l'arduino ou depuis le HMI.

::: danger Attention
L'opération de conversation des donnés binaires ne se font pas de la même manière en fonction de si vous la prenez avant ou après le [4069](/composants/4069).

Par exemple, si vous effectuez votre mesure directement sur les entrés du HMI, vous devrez passez par une inversion du signal.
:::

### Visualisation
![Visualisation](/temp/DS2_2024619201331.png)

## Bit de start
Vous pouvez voir sur l'image suivante, que le bit de start existe belle est bien, et qu'il n'est pas à prendre en compte.

::: tip
Les 3 premières valeurs seront toujours ``ST<`` et les 3 dernières seront toujours ``>ET``
:::

![visualisation bit de start](/temp/start.png)