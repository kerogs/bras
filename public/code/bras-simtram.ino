const int delayTime = 3000;
int i;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  Serial3.begin(9600);

  delay(1000);
}

void loop() {
  // put your main code here, to run repeatedly:
  Serial3.print("ST<\"tr_num ");
  Serial3.print(i);
  Serial3.println("\">ET");
  Serial.print("Trame envoyé : Num ");
  Serial.println(i);
  i++;
  
  delay(delayTime);
}