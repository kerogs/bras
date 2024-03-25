# Liste des fonctions
Une fonction est une séquence d’instructions réalisant un calcul ou une tâche. Une fonction peut posséder des paramètres d’entrée (des arguments) et peut également retourner des valeurs de sortie. [en savoir plus](https://arduino.blaisepascal.fr/les-fonctions/#:~:text=Une%20fonction%20est%20une%20s%C3%A9quence,peut%20%C3%AAtre%20appel%C3%A9e%20plusieurs%20fois.)

Une fonction doit être déclarée une seule fois, et peut être appelée plusieurs fois.

### Exemple d'utilisation
Voici un exemple simple d'une fonction pour additionner 2 valeurs. (en c++)
```cpp
float calculFonction(float valeurA, float valeurB){
    if(valeurA == "" || valeurB == "" ){
        Serial.println("Aucune valeur.");
        break;
    }

    float calcul = valeurA + valeurB;
    return calcul;
}
```

## Liste des versions

- [configset()](/functions/configset) <Badge type="tip" text="^1.1.8" />
- [logsPc()](/functions/logspc) <Badge type="danger" text="< 1.1.24-alpha" />
- [searchArray()](/functions/searchArray) <Badge type="tip" text="^1.1.28" />
- [tamponReset()](/functions/tamponReset) <Badge type="tip" text="^1.1.30" />
- [sendColorHMI()](/functions/sendColorHMI) <Badge type="tip" text="^1.1.31" />
- [getValue()](/functions/getValue) <Badge type="tip" text="^1.1.31" />
- [numDigits()](/functions/numDigits) <Badge type="tip" text="^1.1.31" />