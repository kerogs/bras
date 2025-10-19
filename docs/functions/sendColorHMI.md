# sendColorHMI() <Badge type="tip" text="^1.1.31-alpha" />
Permet d'envoyer une trame de manière plus simple vers le HMI. Possède un mini convertisseur des couleurs utilisé dans le HMI.

::: info
Pour en savoir plus sur l'envoie d'un code couleur sur le HMI [cliquez-ici](/composants/hmi#json)
:::

## Créateur
kerogs
## Dernière version mise à jour
1.1.31-alpha
## Paramètres
| I/O | Type | Valeur       | Description                                                                              |
|-----|------|--------------|------------------------------------------------------------------------------------------|
| IN  | char | widget       | nom du widget sur le quel effectuer une action                                           |
| IN  | char | color_object | nom de l'objet que l'on veut changer (peut être l'arrière plan, le texte, ou la bordure) |
| IN  | char | color        | Couleur à envoyer. [Lire docs](/composants/hmi#json)                                     |

##  Exemple d'utilisation
La valeur pour le ``widget`` peut être une valeur de 1 à 6 pour directement changer la valeur d'un bouton présent sur le HMI. Mais il peut comporter un nom précis pour changer la couleur d'un élément précis. Egalement, la valeur ``color`` peut être nommé directement d'une couleur utilisé (voir ci-dessous) ou alors envoyer une couleur personnalisé.

::: danger
La couleur personnalisé doit être automatiquement convertie rn ARGB. pour en savoir plus : [Lire docs](/composants/hmi#json)
:::

```c++
sendColorHMI(casierActionNumber, "bg_color", "red");
```
## code
```c++
void sendColorHMI(char widget[], char color_object[], char color[]) {
  color == "white" ? color = "4294967295" : color = color;
  color == "black" ? color = "4278190080" : color = color;
  color == "green" ? color = "4279163174" : color = color;
  color == "red" ? color = "4293602631" : color = color;

  widget == 1 ? widget = "Casier1" : widget = widget;
  widget == 2 ? widget = "Casier2" : widget = widget;
  widget == 3 ? widget = "Casier3" : widget = widget;
  widget == 4 ? widget = "Casier4" : widget = widget;
  widget == 5 ? widget = "Casier5" : widget = widget;
  widget == 6 ? widget = "Casier6" : widget = widget;

  String widgetStr = widget;
  String color_objectStr = color_object;
  String colorStr = color;

  Serial3.println("ST<{\"cmd_code\":\"set_color\",\"type\":\"widget\",\"widget\":\"" + widgetStr + "\",\"color_object\":\"" + color_objectStr + "\", \"color\":" + colorStr + "}>ET");
  Serial.println("[ENVOIE HMI] ST<{\"cmd_code\":\"set_color\",\"type\":\"widget\",\"widget\":\"" + widgetStr + "\",\"color_object\":\"" + color_objectStr + "\", \"color\":" + colorStr + "}>ET");
}
```