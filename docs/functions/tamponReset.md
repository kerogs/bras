# tamponReset() <Badge type="tip" text="^1.1.30-alpha" />
Permet de vider le [tampon](/docs/variable#tampon) et [tamponPos](/docs/variable#tamponpos). Cette fonction à été conçu pour être utilisé à la fin d'une trame.

## Créateur
Lucas W.
## Dernière version mise à jour
1.1.30-alpha
## Paramètres
Cette fonction ne possède aucun paramètres à rentrer.
##  Exemple d'utilisation
```c++
tamponReset() 
```
## code
```c++
void tamponReset() {
  // fin de trame
  if (searchArray(tampon, ">ET", 3)) {
    Serial.println("[FIN DE TRAME]");
    for (int i = 0; i < sizeof(tampon); i++) {
      tampon[i] = 0;
    }
    tamponPos = 0;
  }
}
```