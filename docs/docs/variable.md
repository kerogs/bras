# Liste des variables
Cette partie ne sert qu'à donner une légère aide pour certaine variable du code.

## led
Variable qui permettra d'utiliser une led afin de l'allumer lors d'une transmissions (RX de l'arduino sur le port série 3);
::: danger N'est plus à jours
L'installation d'une LED ne fonctionne plus depuis la version BETA du code.
:::

### Code
```c++
#define led 2
```
### Utilisation
```c++:line-numbers=1 {3}
void serialEvent3() {
  while (Serial3.available() > 0) {
    digitalWrite(led, HIGH);
    incomingByte = Serial3.read();
    tampon[tamponPos] = incomingByte;
    tamponPos++;
  }
  // ...
}
```
## tampon
### Code
```c++
char tampon[30];
```
### Utilisation
Dans ce code on enregistre dans le tampon la valeur [incomingByte](#incomingByte). La valeur est reset à chaque fin d'action.
```c++:line-numbers=1 {5}
void serialEvent3() {
  while (Serial3.available() > 0) {
    digitalWrite(led, HIGH);
    incomingByte = Serial3.read();
    tampon[tamponPos] = incomingByte;
    tamponPos++;
  }
  // ...
}
```

## tamponPos
### Code
```c++
int tamponPos = 0;
```
### Utilisation
On incrémente de ``+1`` à chaque character afin de mettre chaque valeur au bonne endroit dans le [tampon](#tampon). Cette valeur est reset en même temps que le [tampon](#tampon).
```c++:line-numbers=1 {6}
void serialEvent3() {
  while (Serial3.available() > 0) {
    digitalWrite(led, HIGH);
    incomingByte = Serial3.read();
    tampon[tamponPos] = incomingByte;
    tamponPos++;
  }
  // ...
}
```

## incomingByte
### Code
```c++
char incomingByte;
```

### Utilisation 
Permet de stocker un character présent dans le buffer pour plus tard l'enregistrer dans le [tampon](#tampon) 
```c++:line-numbers=1 {4}
void serialEvent3() {
  while (Serial3.available() > 0) {
    digitalWrite(led, HIGH);
    incomingByte = Serial3.read();
    tampon[tamponPos] = incomingByte;
    tamponPos++;
  }
  // ...
}
```
## casierActionNumber
### Code
```c++
int casierActionNumber;
```
### Utilisation
Permet d'enregister le numéro du casier selectionné par l'utilisateur et d'insérer le mot de passe qui correspondra au bon casier
```c++:line-numbers=1 {2}
// Password popup up close
if (casierActionNumber != 0 && searchArray(tampon, "FermerPopup", 11)) {
  Serial.println("[PASSWORD POPUP FERMEE]");
  casierActionNumber = NULL;
}
```
## casier(1-5)Password
### Code
```c++
int casiersPassword[7];
```

### Utilisation
Permet d'enregister les mots de passe pour chaque casier individuellement. Si la valeur du mot de passe du casier est vide, alors le casier  est inutilisé. Si elle est pleine alors cette dernière est utilisé.
```c++:line-numbers=1 {4}
      // Si casier déjà fermer ?
      for (int i = 1; i < 7; i++) {
        if (casierActionNumber == i) {
          if (casiersPassword[i]) {
            Serial3.print("ST<{\"cmd_code\":\"set_enable\",\"type\":\"widget\",\"widget\":\"IC\",\"enable\":false}>ET");
            Serial.println("[CASIER STATUS : DEJA UTILISER]");
            casierUtilisation = true;
          } else {
            Serial3.print("ST<{\"cmd_code\":\"set_enable\",\"type\":\"widget\",\"widget\":\"IC\",\"enable\":true}>ET");
            Serial.println("[CASIER STATUS : PAS UTILISER]");
          }
        }
      }
    }
```

## casierNumber
### Code
```c++
String casierNumber = "Casier" + String(i);
```

### Utilisation
Ici on rajoute un numéro à "Casier" et on vérifie si la valeur combiné au nombre correspond à celle dans la trame. Si oui, alors on enregistre le numéro dans la variable [casierActionNumber](#casieractionnumber) et on sors de la boucle ``for``.
```c++:line-numbers=1 {5,6}
// Bouton Casier appuyer
if (searchArray(tampon, "Casier", 6)) {
  Serial.println("[CASIER]");
  for (int i = 0; i <= 5; i++) {
    String casierNumber = "Casier" + String(i);
    if (searchArray(tampon, casierNumber.c_str(), 7)) {
      Serial.println("[NUMERO " + String(i) + "]");
      casierActionNumber = i;
      break;
    }
  }
}
```

## PasswordTemp
### Code
```c++
int PasswordTemp;
```

### Utilisation
Permet d'enregistrer le mot de passe inscrit temporairement (ex : le temps de la validation)
```c++:line-numbers=1 {5}
if (casierActionNumber != 0 && searchArray(tampon, "PC", 2)) {
  Serial.println("[CASIER PASSWORD [MDP]");
  // if valeur casier === 4
  int tamponLength = sizeof(tampon) / sizeof(tampon[0]);
  PasswordTemp = getValue(tampon, tamponLength);
  Serial.println(PasswordTemp);
}
```

## casierActionNumber
### Code
```c++
int casierActionNumber;
```
###  Utilisation
Permet d'enregistrer temporairement la valeur du casier utilisé.
```c++:line-numbers=1 {7}
if (searchArray(tampon, "Casier", 6)) {
  Serial.println("[CASIER]");
  for (int i = 0; i <= 6; i++) {
    String casierNumber = "Casier" + String(i);
    if (searchArray(tampon, casierNumber.c_str(), 7)) {
      Serial.println("[NUMERO " + String(i) + "]");
      casierActionNumber = i;
      break;
    }
  }
}

## serialSpaceReset
### code
```c++:line-numbers
bool serialSpaceReset = true;
``` 
### Utilisati
Permet de vérifier si l'utilisateur imprime ou non son mot de passe lors de l'utilisation du casier
```c++:line-numbers {3}
// Impression Oui/Non
if(searchArray(tampon, "IC", 2)){
  printAction ? printAction = false : printAction = true;
  Serial.print("Imprimante : ");
  Serial.println(printAction);
}
```