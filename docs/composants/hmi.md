# STONE HMI
![Stone](https://img.shields.io/badge/stone-blue?style=for-the-badge&logo=stone&logoColor=fff)

Le HMI (Human Machine Interface) de la marque STONE permet d'être utilisé comme interface pour l'Arduino.

::: info
Pour établir la communication entre le HMI et l'Arduino, on utilise une [porte logique 4069](/composants/4069).
:::

::: danger
Le protocole de communication entre le HMI et l'[Arduino](/composants/arduino) ne sont pas les mêmes !
:::

## Communication
La communication du HMI se fait en liaison série ainsi qu'avec le protocole UART RS-232.

Ce qui est différent du HMI. Pour en savoir plus, aller voir la page du [HMI](/composants/hmi) et la page du [4069](/composants/4069)

## Oscilloscope

### Trame envoyée vers l'Arduino
Les valeurs situées après les octets `0xE7 A0` ne sont pas à prendre en compte et servent uniquement à vérifier que le message ne comporte aucune erreur.
![trame hmi](https://raw.githubusercontent.com/kerogs/bras/refs/heads/main/assets/oscillo_trame_hmi_hex.png)

### Trame d'un bouton <Badge type="info" text="Documentation" />
![trame hmi doc](https://raw.githubusercontent.com/kerogs/bras/refs/heads/main/assets/hmi_instruction_button_trame.png)

## JSON
Lors de l'envoi d'une trame sur le HMI depuis une [Arduino](/composants/arduino), cela se fait par un message qui passe par le port série (chez nous le numéro 3) et est reçu par le HMI via le format JSON.

Le message envoyé est composé de trois parties :
1. Le début de la trame qui permet d'indiquer son début au HMI. Il commence toujours par `ST<`.
2. Le message composé en JSON.
3. La fin de la trame qui permet d'indiquer la fin de cette dernière `>ET`.

### Exemple de code

#### Code JSON
Code JSON qui sera envoyé. Ici, le code permet de changer la couleur d'arrière-plan d'un widget (un élément) de l'écran.
```JSON:line-numbers=1
{
    "cmd_code":"set_color",
    "type":"widget",
    "widget":"dialog",
    "color_object":"bg_color",
    "color":4294901760
}
```
### Code arduino
```c++:line-numbers=1
Serial3.println("ST<{\"cmd_code\":\"set_color\",\"type\":\"widget\",\"widget\":\"dialog\",\"color_object\":\"bg_color\", \"color\":4294901760}>ET");
```

### Changement de couleur
Pour changer les couleurs sur le HMI, il suffit d'appliquer la même logique que le code précédent. Néanmoins, il y a une règle à respecter : le code couleur doit être au format ARGB et doit également être en décimal. Ce décimal doit être la valeur totale du format ARGB qui est en hexadé

#### Exemple :
Prenons un exemple où nous souhaitons convertir une couleur bleue précise, ici : #0046a1ff => rgba(0, 70, 161, 1). Peu importe le format de la couleur, convertissez-la en hexadécimal pour plus de facilité.

- Tout d'abord, récupérez la couleur en hex, ici ``0046a1ff`` (ou #0046a1 sans la transparence).
::: tip Rappel
Nous savons que dans la valeur #0046a1, 0x00 est la valeur rouge, 0x46 la valeur verte, 0xa1 la valeur bleue.
:::
- Il suffit de rajouter le niveau de transparence devant le nombre, donc ``FF0046a1``. FF étant la valeur maximum qui nous permet de ne pas avoir de transparence (0x00 étant le niveau invisible).
- Une fois votre valeur récupérée, il suffit de convertir toute la valeur en ARGB. Ce qui va nous donner ``4278208161``.
- Il suffit d'intégrer votre couleur ARGB dans la chaîne de message.

:::warning attention
Une fois la trame récupérée par le HMI, la valeur est convertie à nouveau en hexadécimal.
:::

### Activer ou Désactiver
Vous pouvez également activer ou désactiver des éléments pour interagir avec eux. Pour cela, quelques valeurs changent. Par exemple, le ``cmd_code`` ainsi que la dernière information. La valeur color est complètement remplacée par ``enable`` suivi de son état, et la valeur ``color_object`` est supprimée.

| true  | Autorise l'intéraction       |
|-------|------------------------------|
| false | N'autorise pas l'interaction |


### Code JSON
Ici, on indique l'état du button1, désactivé, donc impossible d'interagir avec.
```JSON:line-numbers=1
{
    "cmd_code":"set_enable",
    "type":"widget",
    "widget":"button1",
    "enable":false
}
```

### Code arduino
```c++:line-numbers=1
Serial3.println("ST<{\"cmd_code\":\"set_enable\",\"type\":\"widget\",\"widget\":\"button1\", \"enable\":false}>ET");
```


## Lien utile
- [DATASHEET](https://raw.githubusercontent.com/kerogs/bras/refs/heads/main/assets/stone-hmi-Instruction-Sets-V2.5RC-20240105-datasheet.pdf)
