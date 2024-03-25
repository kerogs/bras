# getValue() <Badge type="tip" text="^1.1.31-alpha" />
Permet de récupérer la valeur d'une trame par rapport à son input reçu

## Créateur
Lucas W.
## Dernière version mise à jour
1.1.31-alpha
## Paramètres
| I/O | Type | Valeur | Description                                     |
|-----|------|--------|-------------------------------------------------|
| IN  | char | array  | ici on rentre le tampon afin de le scanner      |
| IN  | int  | length | la longueur du tompon (utile pour la création)  |
| OUT | int  | N/A    | valeur qui retourne la longueur du mot de passe |


##  Exemple d'utilisation

::: danger
La réception du mot de passe est particulière : [Lire docs](/composants/hmi#json)
:::

```c++
PasswordTemp = getValue(tampon, tamponLength);
```
## code

```c++
// Récupérer password
int getValue(char array[], int length) {
  char arraySearchStart[] = "\"PC\":";
  char arraySearchEnd[] = ">ET";
  int numberCSearchStart = sizeof(arraySearchStart) - 1;  // -1 pour ne pas compter le caractère de fin de chaîne '\0'
  int numberCSearchEnd = sizeof(arraySearchEnd) - 1;

  bool sequenceFound = false;
  int startIndex = -1;

  for (int i = 0; i < length - numberCSearchStart + 1; i++) {
    bool match = true;
    for (int j = 0; j < numberCSearchStart; j++) {
      if (array[i + j] != arraySearchStart[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      sequenceFound = true;
      startIndex = i + numberCSearchStart;
      break;
    }
  }

  if (!sequenceFound) {
    Serial.println("Start sequence not found");
    return -1;
  }

  sequenceFound = false;
  int endIndex = -1;

  for (int i = startIndex; i < length - numberCSearchEnd + 1; i++) {
    bool match = true;
    for (int j = 0; j < numberCSearchEnd; j++) {
      if (array[i + j] != arraySearchEnd[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      sequenceFound = true;
      endIndex = i;
      break;
    }
  }

  if (!sequenceFound) {
    Serial.println("End sequence not found");
    return -1;
  }

  String pcValue = "";
  for (int i = startIndex; i < endIndex; i++) {
    pcValue += array[i];
  }

  return pcValue.toInt();
}
```