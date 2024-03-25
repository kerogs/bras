# Code

## a1.1.24

```c++

#define led 2

char tampon[150];
int tamponPos = 0;
char tamponStr;

char incomingByte;

char checkString;

void setup() {
  configset();
}

void loop() {
  // éteint la led à la fin d'une trame
  digitalWrite(led, LOW);

  // si une trame est reçu ! 
  checkString = strstr(tamponStr, "C1");
  if(checkString != NULL){
    Serial.print("-> TRAME RECUPERE :" );
    Serial.println(tamponStr);

    // Reset le tampon après action effectué !
    tamponStr = "";
    tampon[150] = "";
    tamponPos = 0;
  }

    Serial.print("-> TRAME :" );
    Serial.println(tamponStr);

    Serial.print("-> STR :" );
    Serial.println(checkString, HEX);
}

void serialEvent3() {

  for (int i = 0; i < Serial3.available(); i++)
    if (Serial3.available() > 0) {
      incomingByte = Serial3.read();
      tampon[tamponPos] = incomingByte;

      // afficher logs
      logsPC(incomingByte, i, tamponPos);

      // Convertir en String
      tamponStr += tampon[i];

      // déplace la position au prochain.
      tamponPos++;
    }
  Serial.println("+=======================+");
  for (int i = 0; i < sizeof(tampon); i++) {
    Serial.print(tampon[i]);
  }
  Serial.println("");
  Serial.println("+=======================+");
  Serial.println("En attente...");
}

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

// Logs

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

