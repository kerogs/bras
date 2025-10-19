# numDigits() <Badge type="tip" text="^1.1.31-alpha" />
Petite fonction pour compter le nombre de numéro

## Créateur
kerogs
## Dernière version mise à jour
1.1.31-alpha
## Paramètres
| I/O | Type | Valeur | Description                             |
|-----|------|--------|-----------------------------------------|
| IN  | int  | number | envoyer une chaine de nombrer           |
| OUT | int  | N/A    | permet de recevoir le nombre de numéro. |



##  Exemple d'utilisation

::: danger
La réception du mot de passe est particulière : [Lire docs](/composants/hmi#json)
:::

```c++
if (numDigits(PasswordTemp) == 4) {
  // ...
}
```
## code

```c++
// Récupérer password
int numDigits(int number) {
  if (number == 0) {
    return 1;
  }

  int digits = 0;
  if (number < 0) digits = 1;  // compte le signe moins pour les nombres négatifs
  while (number) {
    number /= 10;
    digits++;
  }
  return digits;
}
```