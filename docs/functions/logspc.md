# logspc() <Badge type="danger" text="< 1.1.24-alpha" />
Permet de voir ce qu'il se passe en temps réel depuis un moniteur (Ex : PC)

## Créateur
Lucas W.
## Dernière version mise à jour
1.1.24-alpha
## Paramètres
| I/O       | Valeur                                                  | Description |
| --- | --------- | ------------------------------------------------------- |
| IN     | data               | Les octets reçu (peut être sous n'importe quel format.)                                                        |
| IN     | tramePos           | Position de l'octets dans la trame reçu                                                                        |
| IN     | tamponPos          | Position de l'octets dans le tampon                                                                            |
##  Exemple d'utilisation
```c++
logsPC(data, tramePos, tamponPos);
```
## code
```c++
void logsPC(char data, int tramePos, int tamponPos) {
  // Serial.println(hexdata);
  Serial.print("[TramePos : ");
  Serial.print(tamponPos);
  Serial.print("] ");
 
  Serial.print("[TamponPos : ");
  Serial.print(tramePos);
  Serial.print("] ");
 
  Serial.print("[HEX: ");
  Serial.print(data, HEX);
  Serial.print("] [ASCII : ");
  Serial.print(data);
  Serial.print("] [");
 
  // Check
  if (data == 0x00) {
    Serial.println("N/A]");  // Si 0x00
  } else {
    Serial.println("]");
  }
 
  digitalWrite(led, HIGH);
}
```