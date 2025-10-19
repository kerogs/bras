# searchArray() <Badge type="tip" text="^1.1.28" />

searchArray() est une fonction ***nécessaire*** au fonctionne de la communication entre l'[aduino](/composants/arduino) et le [HMI](/composants/hmi)

## Créateur
kerogs
## Dernière version mise à jour
1.1.28-alpha
## Paramètres
| I/O | Type  | Valeur        | Description                                                       |
|-----|-------|---------------|-------------------------------------------------------------------|
| IN  | array | tampon        | Tableau contenant la séquence dans laquelle rechercher            |
| IN  | char  | tamponSearch  | Chaine de charactère contenant la séquence à rechercher           |
| IN  | int   | numberCSearch | Nombre de caractères dans la séquence à rechercher                |
| OUT | bool  | N/A           | Indique si la séquence a été trouvée dans le tableau donné ou non |
##  Exemple d'utilisation
```c++
char tampon[30] = {'S', 'T', '<', '1', '0', '1', '0', '8', 'C', '2', '>', 'E', 'T'};
char tamponSearch = ">ET";
int numberCSearch = 3;

bool returnValue = searchArray(tampon, tamponSearch, numberCSearch);
```

## utilisation pratique

```c++
Serial.println(searchArray(tampon, "ST<", 3) ? "[DEBUT DE TRAME]" : 0);
Serial.println(searchArray(tampon, ">ET", 3) && searchArray(tampon, "ST<", 3)) ? "[FIN DE TRAME]" : "[TRAME EN COURS]");
```

## code

```c++
bool searchArray(char array[], char arraySearch[], int numberCSearch) {
  bool sequenceFound = false;

  for (int i = 0; i < 30 - numberCSearch + 1; i++) {
    bool match = true;
    for (int j = 0; j < numberCSearch; j++) {
      if (tampon[i + j] != arraySearch[j]) {
        match = false;
        break;
      }
    }
    if (match) {
      sequenceFound = true;
      break;
    }
  }

  return sequenceFound;
}
```

## code (simplifié)
```c++
bool searchArray(char array[], char arraySearch[], int numberCSearch) {
  bool sequenceFound = false;

  // NCS 1
  if (numberCSearch == 1) {
    for (int i = 0; i < 30 - 2; i++) {
      if (tampon[i] == arraySearch[0]) {
        sequenceFound = true;
        break;
      }
    }
  }
  // NCS 2
  if (numberCSearch == 2) {
    for (int i = 0; i < 30 - 2; i++) {
      if (tampon[i] == arraySearch[0] && tampon[i + 1] == arraySearch[1]) {
        sequenceFound = true;
        break;
      }
    }
  }
  // NCS 3
  if (numberCSearch == 3) {
    for (int i = 0; i < 30 - 2; i++) {
      if (tampon[i] == arraySearch[0] && tampon[i + 1] == arraySearch[1] && tampon[i + 2] == arraySearch[2]) {
        sequenceFound = true;
        break;
      }
    }
  }
  // NCS 4
  if (numberCSearch == 4) {
    for (int i = 0; i < 30 - 2; i++) {
      if (tampon[i] == arraySearch[0] && tampon[i + 1] == arraySearch[1] && tampon[i + 2] == arraySearch[2] && tampon[i + 3] == arraySearch[3]) {
        sequenceFound = true;
        break;
      }
    }
  }
  // NCS 5
  if (numberCSearch == 5) {
    for (int i = 0; i < 30 - 2; i++) {
      if (tampon[i] == arraySearch[0] && tampon[i + 1] == arraySearch[1] && tampon[i + 2] == arraySearch[2] && tampon[i + 3] == arraySearch[3] && tampon[i + 4] == arraySearch[4]) {
        sequenceFound = true;
        break;
      }
    }
  }
  // NCS 6
  if (numberCSearch == 6) {
    for (int i = 0; i < 30 - 2; i++) {
      if (tampon[i] == arraySearch[0] && tampon[i + 1] == arraySearch[1] && tampon[i + 2] == arraySearch[2] && tampon[i + 3] == arraySearch[3] && tampon[i + 4] == arraySearch[4] && tampon[i + 5] == arraySearch[5]) {
        sequenceFound = true;
        break;
      }
    }
  }
  // ...
  return sequenceFound;
}
```