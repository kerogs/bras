# Imprimante <Badge type="tip" text="^1.1.35-beta" />
permet d'imprimer le casier et le code du casier correspondant.

## Créateur
kerogs
## Dernière version mise à jour
1.1.36-beta
## Paramètres
|I/O|Type|Valeur|Description|
|:-:|:---|:-----|:----------|
|IN|int|codeCasierNumber|Numéro du casier|
|IN|int|codeCasier|Mot de passe du casier|
##  Exemple d'utilisation
```c++
imprimante("2", "5809");
```
## code
```c++
void imprimante(int codeCasierNumber, int codeCasier) {
  printer.underlineOn();
  printer.justify('C');
  printer.setSize('M');
  printer.println("-------------------------");
  printer.println(F("Kerogs - BRAS"));
  printer.println("-------------------------");
  printer.print(F("Casier Numero "));
  printer.print(codeCasierNumber);
  printer.print(F("\n"));
  printer.setSize('L');
  printer.boldOn();
  printer.println(F("CODE"));
  printer.println(codeCasier);
  printer.setSize('M');
  printer.justify('C');
  printer.println("-------------------");
  printer.boldOff();
  printer.print(F("\n"));
  printer.print(F("\n"));
  printer.setSize('S');
  printer.feed(2);
  printer.setDefault();  // Restore printer to defaults
}
```