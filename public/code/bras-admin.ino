/**
   * @file bras.cpp
   * @brief Communication entre l'afficheur STONE HMI, Arduino MEGA et action des casiers du B.R.A.S
   * documentation : https://docs.ks-infinite.fr/bras/
   * github : https://github.com/kerogs/bras/
   * @author Lucas W.
   * @author Florian V.
   * @author Jessy K.
   * @version 1.2.1-admin
   * @date 07/02/2024
   * @copyright Copyright - B.R.A.S, Kerogs Infinite, Lycée Condorcet - Stiring-Wendel
   */

#include "Adafruit_Thermal.h"
#include "SoftwareSerial.h"

#define led 2
#define TX_PIN 46
#define RX_PIN 48

SoftwareSerial printSerial(RX_PIN, TX_PIN);
Adafruit_Thermal printer(&printSerial);

char tampon[30];
int tamponPos = 0;
String tamponStr;

char incomingByte;

// Casier Action
int casierActionNumber;
char casierActionName;

int casiersPassword[7];

int PasswordTemp;

int M1dirpin = 7; 
int M1steppin = 6;
const int BP1 = 30;
const int BP2 = 31;
const int BPfdc = 32;
const int BPfdc2 = 33;
const int LedR = 40;
const int LedG = 41;

bool casierUtilisation = false;  // true ? casiser utilisé : casier non utilisé
bool modeAdmin = false;

void setup() {
  configset();

  // sendColorHMI("Casier1", "bg_color", "white");
  // Serial3.print("ST<{\"cmd_code\":\"set_buzzer\",\"type\":\"system\",\"time\":10000}>ET");
  // Serial3.print("ST<{\"cmd_code\":\"set_color\",\"type\":\"widget\",\"widget\":\"Casier1\",\"color_object\":\"bg_color\", \"color\":4293602631}>ET");
}



void loop() {

  // Début de trame
  if (searchArray(tampon, "ks:", 3)) {
    Serial.println("[ks:]");
    if (searchArray(tampon, "open.casier", 11) || searchArray(tampon, "test.all", 8)) {
      Serial.println("[ks:open.casier]");
      // Ouvrir la porte.
      while (digitalRead(BPfdc) != HIGH) {
        rotation_montre();
        digitalWrite(LedG, HIGH);
        digitalWrite(LedR, LOW);
      }
      Serial.println("[return:fin]");
    }
    if (searchArray(tampon, "close.casier", 11) || searchArray(tampon, "test.all", 8)) {
      Serial.println("[ks:close.casier]");
      // Fermer la porte
      while (digitalRead(BPfdc2) != HIGH) {
        rotation_inverse();
        digitalWrite(LedG, LOW);
        digitalWrite(LedR, HIGH);
      }
      Serial.println("[return:fin]");
    }

    if (searchArray(tampon, "print.printer", 11) || searchArray(tampon, "test.all", 8)) {
      Serial.println("[ks:print.printer]");
      imprimante();
      Serial.println("[return:fin]");
    }

    if (searchArray(tampon, "red.ccolor.hmi", 11) || searchArray(tampon, "test.all", 8)) {
      Serial.println("[ks:red.ccolor.hmi]");
      sendColorHMI(1, "bg_color", "red");
      Serial.println("[return:fin]");
      delay(1000);
    }

    if (searchArray(tampon, "white.ccolor.hmi", 11) || searchArray(tampon, "test.all", 8)) {
      Serial.println("[ks:white.ccolor.hmi]");
      sendColorHMI(1, "bg_color", "white");
      Serial.println("[return:fin]");
      delay(1000);
    }

    if (searchArray(tampon, "black.ccolor.hmi", 11) || searchArray(tampon, "test.all", 8)) {
      Serial.println("[ks:black.ccolor.hmi]");
      sendColorHMI(1, "bg_color", "black");
      Serial.println("[return:fin]");
      delay(1000);
    }

    if (searchArray(tampon, "green.ccolor.hmi", 11) || searchArray(tampon, "test.all", 8)) {
      Serial.println("[ks:green.ccolor.hmi]");
      sendColorHMI(1, "bg_color", "green");
      Serial.println("[return:fin]");
      delay(1000);
    }

    if (searchArray(tampon, "red.led.casier", 11) || searchArray(tampon, "test.all", 8)) {
      Serial.println("[ks:red.led.casier]");
      digitalWrite(LedR, HIGH);
      digitalWrite(LedG, LOW);
      Serial.println("[return:fin]");
      delay(1000);
    }

    if (searchArray(tampon, "green.led.casier", 11) || searchArray(tampon, "test.all", 8)) {
      Serial.println("[ks:green.led.casier]");
      digitalWrite(LedR, LOW);
      digitalWrite(LedG, HIGH);
      Serial.println("[return:fin]");
      delay(1000);
    }

    tamponReset();
  }
}




















void serialEvent() {
  while (Serial.available() > 0) {
    digitalWrite(led, HIGH);
    incomingByte = Serial.read();
    tampon[tamponPos] = incomingByte;
    tamponPos++;
  }

  // Afficher la trame en ASCII
  Serial.println("+=======================+");
  Serial.print("|> ASCII : ");
  for (int i = 0; i < tamponPos; i++) {
    Serial.print(tampon[i]);
  }
  Serial.println("");

  // Afficher la trame en HEX
  Serial.print("|> HEX : ");
  for (int i = 0; i < tamponPos; i++) {
    Serial.print(tampon[i], HEX);
    Serial.print(" ");
  }
  Serial.println("");

  Serial.println("+=======================+");

  // En attente d'un autre
  Serial.println("En attente...");
}


// configset
void configset() {
  // PC
  while (!Serial) Serial.print(".");
  Serial.begin(9600);
  Serial.print(".");

  // HMI
  while (!Serial3) Serial.print(".");
  Serial3.begin(9600);
  Serial.print(".");

  // Imprimante
  while (!printSerial) Serial.print(".");
  printSerial.begin(19200);
  Serial.print(".");
  printer.begin();
  Serial.print(".");

  // LED
  pinMode(led, OUTPUT);
  Serial.print(".");

  pinMode(M1dirpin, OUTPUT);
  Serial.print(".");
  pinMode(M1steppin, OUTPUT);
  Serial.print(".");
  pinMode(BP1, INPUT);
  Serial.print(".");
  pinMode(BP2, INPUT);
  Serial.print(".");
  pinMode(BPfdc, INPUT);
  Serial.print(".");
  pinMode(BPfdc2, INPUT);
  Serial.print(".");
  pinMode(LedR, OUTPUT);
  Serial.print(".");
  pinMode(LedG, OUTPUT);
  Serial.print(".");


  // Fin chargement (ne pas supprimer)
  delay(500);
  Serial.println("Fin");
}

// Fonction pour rechercher une chaîne de caractères dans un tableau
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

void tamponReset() {
  // fin de trame
  if (searchArray(tampon, "ks:", 3)) {
    Serial.println("==============>");
    for (int i = 0; i < sizeof(tampon); i++) {
      tampon[i] = 0;
    }
    tamponPos = 0;
  }
}

void sendColorHMI(char widget[], char color_object[], char color[]) {
  // Vert : rgba(14, 217, 38, 1) = 4279163174
  // Rouge : rgba(235, 45, 71, 1) = 4293602631
  // Blanc : rgba(255, 255, 255, 1)= 4294967295
  // Serial3.print("ST<{\"cmd_code\":\"set_buzzer\",\"type\":\"system\",\"time\":200}>ET");
  // Serial3.print("ST<{\"cmd_code\":\"set_color\",\"type\":\"widget\",\"widget\":\"Casier1\",\"color_object\":\"bg_color\", \"color\":4293602631}>ET");
  // Serial3.print("ST<{\"cmd_code\":\"set_color\",\"type\":\"widget\",\"widget\":\"Casier1\",\"color_object\":\"text_color\", \"color\":4294967295}>ET");
  // Serial3.print("ST<{\"cmd_code\":\"set_color\",\"type\":\"widget\",\"widget\":\"Casier1\",\"color_object\":\"border_color\", \"color\":4294967295}>ET");

  color == "white" ? color = "4294967295" : color = color;
  color == "black" ? color = "4278190080" : color = color;
  color == "green" ? color = "4279163174" : color = color;
  color == "red" ? color = "4293602631" : color = color;

  widget == 1 ? widget = "Casier1" : widget = widget;
  widget == 2 ? widget = "Casier2" : widget = widget;
  widget == 3 ? widget = "Casier3" : widget = widget;
  widget == 4 ? widget = "Casier4" : widget = widget;
  widget == 5 ? widget = "Casier5" : widget = widget;
  widget == 6 ? widget = "Casier6" : widget = widget;

  String widgetStr = widget;
  String color_objectStr = color_object;
  String colorStr = color;

  Serial3.println("ST<{\"cmd_code\":\"set_color\",\"type\":\"widget\",\"widget\":\"" + widgetStr + "\",\"color_object\":\"" + color_objectStr + "\", \"color\":" + colorStr + "}>ET");
  Serial.println("[ENVOIE HMI] ST<{\"cmd_code\":\"set_color\",\"type\":\"widget\",\"widget\":\"" + widgetStr + "\",\"color_object\":\"" + color_objectStr + "\", \"color\":" + colorStr + "}>ET");
}

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
    return -1;
  }

  String pcValue = "";
  for (int i = startIndex; i < endIndex; i++) {
    pcValue += array[i];
  }

  return pcValue.toInt();
}

// Récupérer password
int getValueAdmin(char array[], int length) {
  char arraySearchStart[] = "\"AP\":";
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
    return -1;
  }

  String pcValue = "";
  for (int i = startIndex; i < endIndex; i++) {
    pcValue += array[i];
  }

  return pcValue.toInt();
}

// Nombre de chiffre int
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

void rotation_montre() {
  digitalWrite(M1dirpin, LOW);
  digitalWrite(M1steppin, LOW);
  delayMicroseconds(2);
  digitalWrite(M1steppin, HIGH);
  delayMicroseconds(750);
}

void rotation_inverse() {
  digitalWrite(M1dirpin, HIGH);
  digitalWrite(M1steppin, LOW);
  delayMicroseconds(2);
  digitalWrite(M1steppin, HIGH);
  delayMicroseconds(750);
}

void imprimante() {
  printer.underlineOn();
  printer.justify('C');
  printer.setSize('M');
  printer.println("-------------------------");
  printer.println(F("KEROGS INFINITE - BRAS"));
  printer.println("-------------------------");
  printer.println(F("ks:print.printer"));
  printer.println("-------------------");
  printer.boldOff();
  printer.print(F("\n"));
  printer.print(F("\n"));
  printer.setSize('S');
  printer.feed(2);
  printer.setDefault();  // Restore printer to defaults
}