# configset() <Badge type="tip" text="^1.1.8" />

Configuration de l'arduino lors de son allumage.

::: info
Un délai de 200ms est indiqué à la fin de la fonction afin de laisser le temps à l'arduino de s'allumer correctement (lors d'un redémarage par exemple. En savoir plus sur l'[arduino](/composants/arduino))
:::

Afin d'indiquer sur le port série de base que l'arduino est entrain de charger des points seront envoyé et un message ```Fin``` y sera envoyé.

## Créateur
kerogs
## Dernière version mise à jour
1.1.24-alpha
## Paramètres
Cette fonction ne possède aucun paramètres à rentrer.
##  Exemple d'utilisation
```c++
configset();
```
## code <Badge type="tip" text="^1.1.28" />
```c++
void configset() {
  // PC
  while (!Serial) {
    Serial.print(".");
  }
  Serial.begin(9600);
  Serial.print(".");
 
  // HMI
  while (!Serial3) {
    Serial.print(".");
  }
  Serial3.begin(9600);
  Serial.print(".");
 
  // LED
  pinMode(led, OUTPUT);
  Serial.print(".");
 
  // Fin chargement (ne pas supprimer)
  delay(200);
  Serial.println("Fin");
}
```

## (old) code <Badge type="info" text="< 1.1.28" />
```c++
void configset() {
  // PC
  while (!Serial) {
    Serial.print(".");
  }
  Serial.begin(9600);
  Serial.print(".");
 
  // HMI
  while (!Serial3) {
    Serial.print(".");
  }
  Serial3.begin(9600);
  Serial.print(".");
 
  // LED
  pinMode(led, OUTPUT);
  Serial.print(".");
 
  // Fin chargement (ne pas supprimer)
  delay(200);
  Serial.println("Fin");
}
```