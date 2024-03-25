# STONE HMI

Le HMI (Human Machine Interface) de la marque STONE permet d'être utilisé comme interface pour l'Arduino.

::: info
Pour établir la communication entre le HMI et l'Arduino, on utilise une [porte logique 4069](/composants/4069).
:::

::: danger
Le protocole de communication entre le HMI et l'[arduino](/composants/arduino) ne sont pas le même !
:::

## Oscilloscope
### Trame envoyé vers l'arduino
Les valeurs situé après les octets ``0xE7 A0`` ne sont pas à prendre en compte et ne serve qu'à vérifier que le message possède aucune erreur.
![trame hmi](https://src.ks-infinite.fr/bras/oscillo_trame_hmi_hex.png)

### Trame d'un bouton <Badge type="info" text="Documentation" />
![trame hmi doc](https://src.ks-infinite.fr/bras/hmi_instruction_button_trame.png)

## json
Lors de l'envoie d'une trame sur le HMI depuis une [Arduino](/composants/arduino), cela se fait par un message qui passe par le port série (chez nous le numéro 3) et reçu par le HMI via le format JSON.

Le mesage envoyé est composé en 3 partie.
1. Le début de la trame qui permet d'indiquer sont début au HMI. Il commence toujours par ``ST<``
2. Le message composé en JSON
3. La fin de la trame qui permet d'indiquer la fin de cette dernière ``>ET`` 

### Exemple de code
#### Code JSON
Code JSON qui sera envoyé. Ici le code permet de changer la couleur d'arrière plan d'un widget (un élément) de l'écran.
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
Pour changer les couleurs sur le HMI il suffit d'appliquer la même logique que le code précédent. Néanmoins il y a une règle à respecter. Le code couleur doit être de format ARGB et doit également être en Décimal. Cette décimal doit également être la valeur total du format ARGB qui est-elle en Hexadécimal.

#### Exemple :
Prenons un exemple ou nous souhaitons convertir une couleur bleu précise. ici : #0046a1ff => rgba(0, 70, 161, 1). Peut importe le format de la couleur, convertisser la en Hexadécimal pour plus de facilité.

- Tout d'abords récupérer la couleur en Hex, ici ``0046a1ff`` (ou #0046a1 sans la tranparence).
::: tip Rappel
Nous savons que dans la valeur #0046a1, Que ``0x00`` est la valeur Rouge, ``0x46`` la valeur vert, ``0xa1`` en bleu.
:::
- Il suffit de rajouter le niveau de transparence devant le nombre. donc ``FF0046a1``. ``FF`` étant la valeur maximum qui nous permet de ne pas avoir de transparence. (``0x00`` étant le niveau invisible).
- Une fois votre valeur récupéré, il suffit de convertir ***toute la valeur*** en ARGB. Ce qui vas nous donnez ``4278208161``.
- Il suffit d'intégrer votre couleur ARGB dans la chaine de massage.

:::warning attention
Une fois la trame récupéré par le HMI la valeur est convertie à nouveau en Hex.
:::

### Activer ou Désactiver
Vous pouvez également activer ou désactiver des éléments pour intéragir avec. Pour cela, quelque valeur change. Comme celle du ``cmd_code`` ainsi que la dernière information. Ou la valeur color est complètement remplacé par ``enable`` suivis de son état. et la suppression de la valeur ``color_object``.

| true  | Autorise l'intéraction     |
|-------|----------------------------|
| false | Autorise pas l'intéraction |


### Code JSON
Ici on indique l'état du button1 soit désactivé donc impossible d'intéragir avec.
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
- [DATASHEET](https://src.ks-infinite.fr/bras/stone-hmi-Instruction-Sets-V2.5RC-20240105-datasheet.pdf)
