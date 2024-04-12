import{_ as n,c as s,o as a,a4 as p}from"./chunks/framework.5uudwu_m.js";const d=JSON.parse('{"title":"Version 1.1.35-beta","description":"","frontmatter":{},"headers":[],"relativePath":"ADR/1.1.35-beta.md","filePath":"ADR/1.1.35-beta.md"}'),l={name:"ADR/1.1.35-beta.md"},e=p(`<h1 id="version-1-1-35-beta" tabindex="-1">Version 1.1.35-beta <a class="header-anchor" href="#version-1-1-35-beta" aria-label="Permalink to &quot;Version 1.1.35-beta&quot;">​</a></h1><h2 id="note" tabindex="-1">Note <a class="header-anchor" href="#note" aria-label="Permalink to &quot;Note&quot;">​</a></h2><p>Ajout fonctionnel</p><h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;Code&quot;">​</a></h2><div class="language-c+++ vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c+++</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span>   * @file bras.cpp</span></span>
<span class="line"><span>   * @brief Communication entre l&#39;afficheur STONE HMI, Arduino MEGA et action des casiers du B.R.A.S</span></span>
<span class="line"><span>   * documentation : https://docs.ks-infinite.fr/bras/</span></span>
<span class="line"><span>   * github : https://github.com/kerogs/bras/</span></span>
<span class="line"><span>   * @author Lucas W.</span></span>
<span class="line"><span>   * @author Florian V.</span></span>
<span class="line"><span>   * @author Jessy K.</span></span>
<span class="line"><span>   * @version b1.1.34</span></span>
<span class="line"><span>   * @date 07/02/2024</span></span>
<span class="line"><span>   * @copyright Copyright - B.R.A.S, Kerogs Infinite, Lycée Condorcet - Stiring-Wendel</span></span>
<span class="line"><span>   */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#include &quot;Adafruit_Thermal.h&quot;</span></span>
<span class="line"><span>#include &quot;SoftwareSerial.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#define led 2</span></span>
<span class="line"><span>#define TX_PIN 47</span></span>
<span class="line"><span>#define RX_PIN 49</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SoftwareSerial printSerial(RX_PIN, TX_PIN);</span></span>
<span class="line"><span>Adafruit_Thermal printer(&amp;printSerial);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>char tampon[30];</span></span>
<span class="line"><span>int tamponPos = 0;</span></span>
<span class="line"><span>String tamponStr;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>char incomingByte;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Casier Action</span></span>
<span class="line"><span>int casierActionNumber;</span></span>
<span class="line"><span>char casierActionName;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int casiersPassword[7];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int PasswordTemp;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int M1dirpin = 7;</span></span>
<span class="line"><span>int M1steppin = 6;</span></span>
<span class="line"><span>const int BP1 = 30;</span></span>
<span class="line"><span>const int BP2 = 31;</span></span>
<span class="line"><span>const int BPfdc = 32;</span></span>
<span class="line"><span>const int BPfdc2 = 33;</span></span>
<span class="line"><span>const int LedR = 40;</span></span>
<span class="line"><span>const int LedG = 41;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bool casierUtilisation = false;  // true ? casiser utilisé : casier non utilisé</span></span>
<span class="line"><span>bool modeAdmin = false;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void setup() {</span></span>
<span class="line"><span>  configset();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // sendColorHMI(&quot;Casier1&quot;, &quot;bg_color&quot;, &quot;white&quot;);</span></span>
<span class="line"><span>  // Serial3.print(&quot;ST&lt;{\\&quot;cmd_code\\&quot;:\\&quot;set_buzzer\\&quot;,\\&quot;type\\&quot;:\\&quot;system\\&quot;,\\&quot;time\\&quot;:10000}&gt;ET&quot;);</span></span>
<span class="line"><span>  // Serial3.print(&quot;ST&lt;{\\&quot;cmd_code\\&quot;:\\&quot;set_color\\&quot;,\\&quot;type\\&quot;:\\&quot;widget\\&quot;,\\&quot;widget\\&quot;:\\&quot;Casier1\\&quot;,\\&quot;color_object\\&quot;:\\&quot;bg_color\\&quot;, \\&quot;color\\&quot;:4293602631}&gt;ET&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>void loop() {</span></span>
<span class="line"><span>  // éteint la led à la fin d&#39;une trame</span></span>
<span class="line"><span>  digitalWrite(led, LOW);</span></span>
<span class="line"><span>  // if (digitalRead(BP1) == HIGH) /*Si le bouton 1 est appuyer*/</span></span>
<span class="line"><span>  // {</span></span>
<span class="line"><span>  //   while (digitalRead(BPfdc2) != HIGH) /*Tant que le bouton de find de course est différent de l&#39;état haut*/</span></span>
<span class="line"><span>  //   {</span></span>
<span class="line"><span>  //     rotation_inverse();      /*Lance la rotation du sens des aiguilles d&#39;une montres*/</span></span>
<span class="line"><span>  //     digitalWrite(LedR, LOW); /*Eteint la led Rouge*/</span></span>
<span class="line"><span>  //   }</span></span>
<span class="line"><span>  // } else if (digitalRead(BP2) == HIGH) /*Autrement, pendant que le bouton 2 est appyer*/</span></span>
<span class="line"><span>  // {</span></span>
<span class="line"><span>  //   while (digitalRead(BPfdc) != HIGH) /*Tant que le bouton 2 de fin de course est différent de l&#39;état haut*/</span></span>
<span class="line"><span>  //   {</span></span>
<span class="line"><span>  //     rotation_montre();       /*Lance la rotation du sens inverse des aiguilles d&#39;une montres*/</span></span>
<span class="line"><span>  //     digitalWrite(LedR, LOW); /*Eteint la led Rouge*/</span></span>
<span class="line"><span>  //   }</span></span>
<span class="line"><span>  // }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Début de trame</span></span>
<span class="line"><span>  if (searchArray(tampon, &quot;ST&lt;&quot;, 3)) {</span></span>
<span class="line"><span>    Serial.println(&quot;[DEBUT DE TRAME]&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (searchArray(tampon, &quot;MA&quot;, 2) || modeAdmin) {</span></span>
<span class="line"><span>      modeAdmin = true;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      if (searchArray(tampon, &quot;AP&quot;, 2)) {</span></span>
<span class="line"><span>        Serial.println(&quot;[MODE ADMIN [???]]&quot;);</span></span>
<span class="line"><span>        // if valeur casier == 4</span></span>
<span class="line"><span>        int tamponLength = sizeof(tampon) / sizeof(tampon[0]);</span></span>
<span class="line"><span>        PasswordTemp = getValueAdmin(tampon, tamponLength);</span></span>
<span class="line"><span>        Serial.println(PasswordTemp);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        if (PasswordTemp == &quot;160524&quot;) {</span></span>
<span class="line"><span>          Serial.println(&quot;[MODE ADMIN [CONFIRMATION]]&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Bouton Casier appuyer</span></span>
<span class="line"><span>    if (searchArray(tampon, &quot;Casier&quot;, 6)) {</span></span>
<span class="line"><span>      Serial.println(&quot;[CASIER]&quot;);</span></span>
<span class="line"><span>      for (int i = 0; i &lt;= 6; i++) {</span></span>
<span class="line"><span>        String casierNumber = &quot;Casier&quot; + String(i);</span></span>
<span class="line"><span>        if (searchArray(tampon, casierNumber.c_str(), 7)) {</span></span>
<span class="line"><span>          Serial.println(&quot;[NUMERO &quot; + String(i) + &quot;]&quot;);</span></span>
<span class="line"><span>          casierActionNumber = i;</span></span>
<span class="line"><span>          break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // TODO EVITER LA REPETITION POUR PAS DESACTIVER AUTOMATIQUEMENT</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // Si casier déjà fermer ?</span></span>
<span class="line"><span>      for (int i = 1; i &lt; 7; i++) {</span></span>
<span class="line"><span>        if (casierActionNumber == i) {</span></span>
<span class="line"><span>          if (casiersPassword[i]) {</span></span>
<span class="line"><span>            Serial3.print(&quot;ST&lt;{\\&quot;cmd_code\\&quot;:\\&quot;set_enable\\&quot;,\\&quot;type\\&quot;:\\&quot;widget\\&quot;,\\&quot;widget\\&quot;:\\&quot;IC\\&quot;,\\&quot;enable\\&quot;:false}&gt;ET&quot;);</span></span>
<span class="line"><span>            Serial.println(&quot;[CASIER STATUS : DEJA UTILISER]&quot;);</span></span>
<span class="line"><span>            casierUtilisation = true;</span></span>
<span class="line"><span>          } else {</span></span>
<span class="line"><span>            Serial3.print(&quot;ST&lt;{\\&quot;cmd_code\\&quot;:\\&quot;set_enable\\&quot;,\\&quot;type\\&quot;:\\&quot;widget\\&quot;,\\&quot;widget\\&quot;:\\&quot;IC\\&quot;,\\&quot;enable\\&quot;:true}&gt;ET&quot;);</span></span>
<span class="line"><span>            Serial.println(&quot;[CASIER STATUS : PAS UTILISER]&quot;);</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // MDP set Casier</span></span>
<span class="line"><span>    if (casierActionNumber != 0 &amp;&amp; searchArray(tampon, &quot;PC&quot;, 2)) {</span></span>
<span class="line"><span>      Serial.println(&quot;[CASIER PASSWORD [MDP]&quot;);</span></span>
<span class="line"><span>      // if valeur casier === 4</span></span>
<span class="line"><span>      int tamponLength = sizeof(tampon) / sizeof(tampon[0]);</span></span>
<span class="line"><span>      PasswordTemp = getValue(tampon, tamponLength);</span></span>
<span class="line"><span>      Serial.println(PasswordTemp);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      if (!casierUtilisation) {</span></span>
<span class="line"><span>        for (int i = 1; i &lt; 7; i++) {</span></span>
<span class="line"><span>          if (casierActionNumber == i) {</span></span>
<span class="line"><span>            casiersPassword[i] = PasswordTemp;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      if (numDigits(PasswordTemp) == 4) {</span></span>
<span class="line"><span>        Serial3.println(&quot;ST&lt;{\\&quot;cmd_code\\&quot;:\\&quot;set_enable\\&quot;,\\&quot;type\\&quot;:\\&quot;widget\\&quot;,\\&quot;widget\\&quot;:\\&quot;CC\\&quot;,\\&quot;enable\\&quot;:true}&gt;ET&quot;);</span></span>
<span class="line"><span>        Serial.println(&quot;ST&lt;{\\&quot;cmd_code\\&quot;:\\&quot;set_enable\\&quot;,\\&quot;type\\&quot;:\\&quot;widget\\&quot;,\\&quot;widget\\&quot;:\\&quot;CC\\&quot;,\\&quot;enable\\&quot;:true}&gt;ET&quot;);</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        Serial3.println(&quot;ST&lt;{\\&quot;cmd_code\\&quot;:\\&quot;set_enable\\&quot;,\\&quot;type\\&quot;:\\&quot;widget\\&quot;,\\&quot;widget\\&quot;:\\&quot;CC\\&quot;,\\&quot;enable\\&quot;:false}&gt;ET&quot;);</span></span>
<span class="line"><span>        Serial.println(&quot;ST&lt;{\\&quot;cmd_code\\&quot;:\\&quot;set_enable\\&quot;,\\&quot;type\\&quot;:\\&quot;widget\\&quot;,\\&quot;widget\\&quot;:\\&quot;CC\\&quot;,\\&quot;enable\\&quot;:false}&gt;ET&quot;);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      Serial.println(numDigits(PasswordTemp));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Confirmer Client (CC)</span></span>
<span class="line"><span>    if (casierActionNumber != 0 &amp;&amp; searchArray(tampon, &quot;CC&quot;, 2)) {</span></span>
<span class="line"><span>      Serial.println(&quot;[CONFIRMATION CLIENT]&quot;);</span></span>
<span class="line"><span>      Serial.println(casierActionNumber);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      Serial.println(casierActionNumber);</span></span>
<span class="line"><span>      Serial.println(PasswordTemp);</span></span>
<span class="line"><span>      // Serial.println(casier1Password);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      for (int i = 1; i &lt; 7; i++) {</span></span>
<span class="line"><span>        Serial.print(i);</span></span>
<span class="line"><span>        Serial.print(&quot; : &quot;);</span></span>
<span class="line"><span>        Serial.println(casiersPassword[i]);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      Serial3.println(&quot;ST&lt;{\\&quot;cmd_code\\&quot;:\\&quot;set_enable\\&quot;,\\&quot;type\\&quot;:\\&quot;widget\\&quot;,\\&quot;widget\\&quot;:\\&quot;CC\\&quot;,\\&quot;enable\\&quot;:false}&gt;ET&quot;);</span></span>
<span class="line"><span>      Serial.println(&quot;ST&lt;{\\&quot;cmd_code\\&quot;:\\&quot;set_enable\\&quot;,\\&quot;type\\&quot;:\\&quot;widget\\&quot;,\\&quot;widget\\&quot;:\\&quot;CC\\&quot;,\\&quot;enable\\&quot;:false}&gt;ET&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // si casier utilisé</span></span>
<span class="line"><span>      if (casierUtilisation) {</span></span>
<span class="line"><span>        // Check bon MDP</span></span>
<span class="line"><span>        Serial.println(casierActionNumber);</span></span>
<span class="line"><span>        Serial.println(casiersPassword[casierActionNumber]);</span></span>
<span class="line"><span>        Serial.println(PasswordTemp);</span></span>
<span class="line"><span>        if (casiersPassword[casierActionNumber] == PasswordTemp) {</span></span>
<span class="line"><span>          sendColorHMI(casierActionNumber, &quot;bg_color&quot;, &quot;green&quot;);</span></span>
<span class="line"><span>          Serial.println(&quot;[OUVERTURE PORTE]&quot;);</span></span>
<span class="line"><span>          casiersPassword[casierActionNumber] = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          // Ouvrir la porte.</span></span>
<span class="line"><span>          while (digitalRead(BPfdc) != HIGH) {</span></span>
<span class="line"><span>            rotation_montre();</span></span>
<span class="line"><span>            digitalWrite(LedG, HIGH);</span></span>
<span class="line"><span>            digitalWrite(LedR, LOW);</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>          Serial.println(&quot;[ERREUR : FAUX MDP]&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        sendColorHMI(casierActionNumber, &quot;bg_color&quot;, &quot;red&quot;);</span></span>
<span class="line"><span>        Serial.println(&quot;[FERMETURE PORTE]&quot;);</span></span>
<span class="line"><span>        // Fermer la porte</span></span>
<span class="line"><span>        while (digitalRead(BPfdc2) != HIGH) {</span></span>
<span class="line"><span>          rotation_inverse();</span></span>
<span class="line"><span>          digitalWrite(LedG, LOW);</span></span>
<span class="line"><span>          digitalWrite(LedR, HIGH);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        imprimante(casierActionNumber, PasswordTemp);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // Ouvrir la porte.</span></span>
<span class="line"><span>        // while (digitalRead(BPfdc) != HIGH) {</span></span>
<span class="line"><span>        //   rotation_montre();</span></span>
<span class="line"><span>        // }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      casierActionNumber = NULL;</span></span>
<span class="line"><span>      casierUtilisation = false;</span></span>
<span class="line"><span>      PasswordTemp = 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // Password popup up close</span></span>
<span class="line"><span>    if (casierActionNumber != 0 &amp;&amp; searchArray(tampon, &quot;FermerPopup&quot;, 11)) {</span></span>
<span class="line"><span>      Serial.println(&quot;[PASSWORD POPUP FERME]&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      casierActionNumber = NULL;</span></span>
<span class="line"><span>      casierUtilisation = false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  tamponReset();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>void serialEvent3() {</span></span>
<span class="line"><span>  while (Serial3.available() &gt; 0) {</span></span>
<span class="line"><span>    digitalWrite(led, HIGH);</span></span>
<span class="line"><span>    incomingByte = Serial3.read();</span></span>
<span class="line"><span>    tampon[tamponPos] = incomingByte;</span></span>
<span class="line"><span>    tamponPos++;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Afficher la trame en ASCII</span></span>
<span class="line"><span>  Serial.println(&quot;+=======================+&quot;);</span></span>
<span class="line"><span>  Serial.print(&quot;|&gt; ASCII : &quot;);</span></span>
<span class="line"><span>  for (int i = 0; i &lt; tamponPos; i++) {</span></span>
<span class="line"><span>    Serial.print(tampon[i]);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  Serial.println(&quot;&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Afficher la trame en HEX</span></span>
<span class="line"><span>  Serial.print(&quot;|&gt; HEX : &quot;);</span></span>
<span class="line"><span>  for (int i = 0; i &lt; tamponPos; i++) {</span></span>
<span class="line"><span>    Serial.print(tampon[i], HEX);</span></span>
<span class="line"><span>    Serial.print(&quot; &quot;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  Serial.println(&quot;&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Serial.println(&quot;+=======================+&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // En attente d&#39;un autre</span></span>
<span class="line"><span>  Serial.println(&quot;En attente...&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// configset</span></span>
<span class="line"><span>void configset() {</span></span>
<span class="line"><span>  // PC</span></span>
<span class="line"><span>  while (!Serial) Serial.print(&quot;.&quot;);</span></span>
<span class="line"><span>  Serial.begin(9600);</span></span>
<span class="line"><span>  Serial.print(&quot;.&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // HMI</span></span>
<span class="line"><span>  while (!Serial3) Serial.print(&quot;.&quot;);</span></span>
<span class="line"><span>  Serial3.begin(9600);</span></span>
<span class="line"><span>  Serial.print(&quot;.&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Imprimante</span></span>
<span class="line"><span>  while (!printSerial) Serial.print(&quot;.&quot;);</span></span>
<span class="line"><span>  printSerial.begin(19200);</span></span>
<span class="line"><span>  Serial.print(&quot;.&quot;);</span></span>
<span class="line"><span>  printer.begin();</span></span>
<span class="line"><span>  Serial.print(&quot;.&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // LED</span></span>
<span class="line"><span>  pinMode(led, OUTPUT);</span></span>
<span class="line"><span>  Serial.print(&quot;.&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  pinMode(M1dirpin, OUTPUT);</span></span>
<span class="line"><span>  Serial.print(&quot;.&quot;);</span></span>
<span class="line"><span>  pinMode(M1steppin, OUTPUT);</span></span>
<span class="line"><span>  Serial.print(&quot;.&quot;);</span></span>
<span class="line"><span>  pinMode(BP1, INPUT);</span></span>
<span class="line"><span>  Serial.print(&quot;.&quot;);</span></span>
<span class="line"><span>  pinMode(BP2, INPUT);</span></span>
<span class="line"><span>  Serial.print(&quot;.&quot;);</span></span>
<span class="line"><span>  pinMode(BPfdc, INPUT);</span></span>
<span class="line"><span>  Serial.print(&quot;.&quot;);</span></span>
<span class="line"><span>  pinMode(BPfdc2, INPUT);</span></span>
<span class="line"><span>  Serial.print(&quot;.&quot;);</span></span>
<span class="line"><span>  pinMode(LedR, OUTPUT);</span></span>
<span class="line"><span>  Serial.print(&quot;.&quot;);</span></span>
<span class="line"><span>  pinMode(LedG, OUTPUT);</span></span>
<span class="line"><span>  Serial.print(&quot;.&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Fin chargement (ne pas supprimer)</span></span>
<span class="line"><span>  delay(500);</span></span>
<span class="line"><span>  Serial.println(&quot;Fin&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Fonction pour rechercher une chaîne de caractères dans un tableau</span></span>
<span class="line"><span>bool searchArray(char array[], char arraySearch[], int numberCSearch) {</span></span>
<span class="line"><span>  bool sequenceFound = false;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for (int i = 0; i &lt; 30 - numberCSearch + 1; i++) {</span></span>
<span class="line"><span>    bool match = true;</span></span>
<span class="line"><span>    for (int j = 0; j &lt; numberCSearch; j++) {</span></span>
<span class="line"><span>      if (tampon[i + j] != arraySearch[j]) {</span></span>
<span class="line"><span>        match = false;</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (match) {</span></span>
<span class="line"><span>      sequenceFound = true;</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return sequenceFound;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void tamponReset() {</span></span>
<span class="line"><span>  // fin de trame</span></span>
<span class="line"><span>  if (searchArray(tampon, &quot;&gt;ET&quot;, 3)) {</span></span>
<span class="line"><span>    Serial.println(&quot;[FIN DE TRAME]&quot;);</span></span>
<span class="line"><span>    for (int i = 0; i &lt; sizeof(tampon); i++) {</span></span>
<span class="line"><span>      tampon[i] = 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    tamponPos = 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void sendColorHMI(char widget[], char color_object[], char color[]) {</span></span>
<span class="line"><span>  // Vert : rgba(14, 217, 38, 1) = 4279163174</span></span>
<span class="line"><span>  // Rouge : rgba(235, 45, 71, 1) = 4293602631</span></span>
<span class="line"><span>  // Blanc : rgba(255, 255, 255, 1)= 4294967295</span></span>
<span class="line"><span>  // Serial3.print(&quot;ST&lt;{\\&quot;cmd_code\\&quot;:\\&quot;set_buzzer\\&quot;,\\&quot;type\\&quot;:\\&quot;system\\&quot;,\\&quot;time\\&quot;:200}&gt;ET&quot;);</span></span>
<span class="line"><span>  // Serial3.print(&quot;ST&lt;{\\&quot;cmd_code\\&quot;:\\&quot;set_color\\&quot;,\\&quot;type\\&quot;:\\&quot;widget\\&quot;,\\&quot;widget\\&quot;:\\&quot;Casier1\\&quot;,\\&quot;color_object\\&quot;:\\&quot;bg_color\\&quot;, \\&quot;color\\&quot;:4293602631}&gt;ET&quot;);</span></span>
<span class="line"><span>  // Serial3.print(&quot;ST&lt;{\\&quot;cmd_code\\&quot;:\\&quot;set_color\\&quot;,\\&quot;type\\&quot;:\\&quot;widget\\&quot;,\\&quot;widget\\&quot;:\\&quot;Casier1\\&quot;,\\&quot;color_object\\&quot;:\\&quot;text_color\\&quot;, \\&quot;color\\&quot;:4294967295}&gt;ET&quot;);</span></span>
<span class="line"><span>  // Serial3.print(&quot;ST&lt;{\\&quot;cmd_code\\&quot;:\\&quot;set_color\\&quot;,\\&quot;type\\&quot;:\\&quot;widget\\&quot;,\\&quot;widget\\&quot;:\\&quot;Casier1\\&quot;,\\&quot;color_object\\&quot;:\\&quot;border_color\\&quot;, \\&quot;color\\&quot;:4294967295}&gt;ET&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  color == &quot;white&quot; ? color = &quot;4294967295&quot; : color = color;</span></span>
<span class="line"><span>  color == &quot;black&quot; ? color = &quot;4278190080&quot; : color = color;</span></span>
<span class="line"><span>  color == &quot;green&quot; ? color = &quot;4279163174&quot; : color = color;</span></span>
<span class="line"><span>  color == &quot;red&quot; ? color = &quot;4293602631&quot; : color = color;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  widget == 1 ? widget = &quot;Casier1&quot; : widget = widget;</span></span>
<span class="line"><span>  widget == 2 ? widget = &quot;Casier2&quot; : widget = widget;</span></span>
<span class="line"><span>  widget == 3 ? widget = &quot;Casier3&quot; : widget = widget;</span></span>
<span class="line"><span>  widget == 4 ? widget = &quot;Casier4&quot; : widget = widget;</span></span>
<span class="line"><span>  widget == 5 ? widget = &quot;Casier5&quot; : widget = widget;</span></span>
<span class="line"><span>  widget == 6 ? widget = &quot;Casier6&quot; : widget = widget;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  String widgetStr = widget;</span></span>
<span class="line"><span>  String color_objectStr = color_object;</span></span>
<span class="line"><span>  String colorStr = color;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Serial3.println(&quot;ST&lt;{\\&quot;cmd_code\\&quot;:\\&quot;set_color\\&quot;,\\&quot;type\\&quot;:\\&quot;widget\\&quot;,\\&quot;widget\\&quot;:\\&quot;&quot; + widgetStr + &quot;\\&quot;,\\&quot;color_object\\&quot;:\\&quot;&quot; + color_objectStr + &quot;\\&quot;, \\&quot;color\\&quot;:&quot; + colorStr + &quot;}&gt;ET&quot;);</span></span>
<span class="line"><span>  Serial.println(&quot;[ENVOIE HMI] ST&lt;{\\&quot;cmd_code\\&quot;:\\&quot;set_color\\&quot;,\\&quot;type\\&quot;:\\&quot;widget\\&quot;,\\&quot;widget\\&quot;:\\&quot;&quot; + widgetStr + &quot;\\&quot;,\\&quot;color_object\\&quot;:\\&quot;&quot; + color_objectStr + &quot;\\&quot;, \\&quot;color\\&quot;:&quot; + colorStr + &quot;}&gt;ET&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Récupérer password</span></span>
<span class="line"><span>int getValue(char array[], int length) {</span></span>
<span class="line"><span>  char arraySearchStart[] = &quot;\\&quot;PC\\&quot;:&quot;;</span></span>
<span class="line"><span>  char arraySearchEnd[] = &quot;&gt;ET&quot;;</span></span>
<span class="line"><span>  int numberCSearchStart = sizeof(arraySearchStart) - 1;  // -1 pour ne pas compter le caractère de fin de chaîne &#39;\\0&#39;</span></span>
<span class="line"><span>  int numberCSearchEnd = sizeof(arraySearchEnd) - 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  bool sequenceFound = false;</span></span>
<span class="line"><span>  int startIndex = -1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for (int i = 0; i &lt; length - numberCSearchStart + 1; i++) {</span></span>
<span class="line"><span>    bool match = true;</span></span>
<span class="line"><span>    for (int j = 0; j &lt; numberCSearchStart; j++) {</span></span>
<span class="line"><span>      if (array[i + j] != arraySearchStart[j]) {</span></span>
<span class="line"><span>        match = false;</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (match) {</span></span>
<span class="line"><span>      sequenceFound = true;</span></span>
<span class="line"><span>      startIndex = i + numberCSearchStart;</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (!sequenceFound) {</span></span>
<span class="line"><span>    return -1;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  sequenceFound = false;</span></span>
<span class="line"><span>  int endIndex = -1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for (int i = startIndex; i &lt; length - numberCSearchEnd + 1; i++) {</span></span>
<span class="line"><span>    bool match = true;</span></span>
<span class="line"><span>    for (int j = 0; j &lt; numberCSearchEnd; j++) {</span></span>
<span class="line"><span>      if (array[i + j] != arraySearchEnd[j]) {</span></span>
<span class="line"><span>        match = false;</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (match) {</span></span>
<span class="line"><span>      sequenceFound = true;</span></span>
<span class="line"><span>      endIndex = i;</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (!sequenceFound) {</span></span>
<span class="line"><span>    return -1;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  String pcValue = &quot;&quot;;</span></span>
<span class="line"><span>  for (int i = startIndex; i &lt; endIndex; i++) {</span></span>
<span class="line"><span>    pcValue += array[i];</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return pcValue.toInt();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Récupérer password</span></span>
<span class="line"><span>int getValueAdmin(char array[], int length) {</span></span>
<span class="line"><span>  char arraySearchStart[] = &quot;\\&quot;AP\\&quot;:&quot;;</span></span>
<span class="line"><span>  char arraySearchEnd[] = &quot;&gt;ET&quot;;</span></span>
<span class="line"><span>  int numberCSearchStart = sizeof(arraySearchStart) - 1;  // -1 pour ne pas compter le caractère de fin de chaîne &#39;\\0&#39;</span></span>
<span class="line"><span>  int numberCSearchEnd = sizeof(arraySearchEnd) - 1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  bool sequenceFound = false;</span></span>
<span class="line"><span>  int startIndex = -1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for (int i = 0; i &lt; length - numberCSearchStart + 1; i++) {</span></span>
<span class="line"><span>    bool match = true;</span></span>
<span class="line"><span>    for (int j = 0; j &lt; numberCSearchStart; j++) {</span></span>
<span class="line"><span>      if (array[i + j] != arraySearchStart[j]) {</span></span>
<span class="line"><span>        match = false;</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (match) {</span></span>
<span class="line"><span>      sequenceFound = true;</span></span>
<span class="line"><span>      startIndex = i + numberCSearchStart;</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (!sequenceFound) {</span></span>
<span class="line"><span>    return -1;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  sequenceFound = false;</span></span>
<span class="line"><span>  int endIndex = -1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for (int i = startIndex; i &lt; length - numberCSearchEnd + 1; i++) {</span></span>
<span class="line"><span>    bool match = true;</span></span>
<span class="line"><span>    for (int j = 0; j &lt; numberCSearchEnd; j++) {</span></span>
<span class="line"><span>      if (array[i + j] != arraySearchEnd[j]) {</span></span>
<span class="line"><span>        match = false;</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (match) {</span></span>
<span class="line"><span>      sequenceFound = true;</span></span>
<span class="line"><span>      endIndex = i;</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (!sequenceFound) {</span></span>
<span class="line"><span>    return -1;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  String pcValue = &quot;&quot;;</span></span>
<span class="line"><span>  for (int i = startIndex; i &lt; endIndex; i++) {</span></span>
<span class="line"><span>    pcValue += array[i];</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return pcValue.toInt();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Nombre de chiffre int</span></span>
<span class="line"><span>int numDigits(int number) {</span></span>
<span class="line"><span>  if (number == 0) {</span></span>
<span class="line"><span>    return 1;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  int digits = 0;</span></span>
<span class="line"><span>  if (number &lt; 0) digits = 1;  // compte le signe moins pour les nombres négatifs</span></span>
<span class="line"><span>  while (number) {</span></span>
<span class="line"><span>    number /= 10;</span></span>
<span class="line"><span>    digits++;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return digits;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void rotation_montre() {</span></span>
<span class="line"><span>  digitalWrite(M1dirpin, LOW);</span></span>
<span class="line"><span>  digitalWrite(M1steppin, LOW);</span></span>
<span class="line"><span>  delayMicroseconds(2);</span></span>
<span class="line"><span>  digitalWrite(M1steppin, HIGH);</span></span>
<span class="line"><span>  delayMicroseconds(750);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void rotation_inverse() {</span></span>
<span class="line"><span>  digitalWrite(M1dirpin, HIGH);</span></span>
<span class="line"><span>  digitalWrite(M1steppin, LOW);</span></span>
<span class="line"><span>  delayMicroseconds(2);</span></span>
<span class="line"><span>  digitalWrite(M1steppin, HIGH);</span></span>
<span class="line"><span>  delayMicroseconds(750);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void imprimante(int codeCasierNumber, int codeCasier) {</span></span>
<span class="line"><span>  printer.underlineOn();</span></span>
<span class="line"><span>  printer.justify(&#39;C&#39;);</span></span>
<span class="line"><span>  printer.setSize(&#39;M&#39;);</span></span>
<span class="line"><span>  printer.println(F(&quot;KEROGS INFINITE - BRAS\\n&quot;));</span></span>
<span class="line"><span>  printer.setSize(&#39;S&#39;);</span></span>
<span class="line"><span>  printer.justify(&#39;L&#39;);</span></span>
<span class="line"><span>  printer.print(F(&quot;Casier : &quot;));</span></span>
<span class="line"><span>  printer.print(codeCasierNumber);</span></span>
<span class="line"><span>  printer.print(F(&quot;\\n&quot;));</span></span>
<span class="line"><span>  printer.justify(&#39;C&#39;);</span></span>
<span class="line"><span>  printer.setSize(&#39;L&#39;);</span></span>
<span class="line"><span>  printer.boldOn();</span></span>
<span class="line"><span>  printer.println(F(&quot;CODE&quot;));</span></span>
<span class="line"><span>  printer.println(codeCasier);</span></span>
<span class="line"><span>  printer.boldOff();</span></span>
<span class="line"><span>  printer.print(F(&quot;\\n&quot;));</span></span>
<span class="line"><span>  printer.setSize(&#39;S&#39;);</span></span>
<span class="line"><span>  printer.feed(2);</span></span>
<span class="line"><span>  printer.setDefault();  // Restore printer to defaults</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">0</span><br><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br><span class="line-number">310</span><br><span class="line-number">311</span><br><span class="line-number">312</span><br><span class="line-number">313</span><br><span class="line-number">314</span><br><span class="line-number">315</span><br><span class="line-number">316</span><br><span class="line-number">317</span><br><span class="line-number">318</span><br><span class="line-number">319</span><br><span class="line-number">320</span><br><span class="line-number">321</span><br><span class="line-number">322</span><br><span class="line-number">323</span><br><span class="line-number">324</span><br><span class="line-number">325</span><br><span class="line-number">326</span><br><span class="line-number">327</span><br><span class="line-number">328</span><br><span class="line-number">329</span><br><span class="line-number">330</span><br><span class="line-number">331</span><br><span class="line-number">332</span><br><span class="line-number">333</span><br><span class="line-number">334</span><br><span class="line-number">335</span><br><span class="line-number">336</span><br><span class="line-number">337</span><br><span class="line-number">338</span><br><span class="line-number">339</span><br><span class="line-number">340</span><br><span class="line-number">341</span><br><span class="line-number">342</span><br><span class="line-number">343</span><br><span class="line-number">344</span><br><span class="line-number">345</span><br><span class="line-number">346</span><br><span class="line-number">347</span><br><span class="line-number">348</span><br><span class="line-number">349</span><br><span class="line-number">350</span><br><span class="line-number">351</span><br><span class="line-number">352</span><br><span class="line-number">353</span><br><span class="line-number">354</span><br><span class="line-number">355</span><br><span class="line-number">356</span><br><span class="line-number">357</span><br><span class="line-number">358</span><br><span class="line-number">359</span><br><span class="line-number">360</span><br><span class="line-number">361</span><br><span class="line-number">362</span><br><span class="line-number">363</span><br><span class="line-number">364</span><br><span class="line-number">365</span><br><span class="line-number">366</span><br><span class="line-number">367</span><br><span class="line-number">368</span><br><span class="line-number">369</span><br><span class="line-number">370</span><br><span class="line-number">371</span><br><span class="line-number">372</span><br><span class="line-number">373</span><br><span class="line-number">374</span><br><span class="line-number">375</span><br><span class="line-number">376</span><br><span class="line-number">377</span><br><span class="line-number">378</span><br><span class="line-number">379</span><br><span class="line-number">380</span><br><span class="line-number">381</span><br><span class="line-number">382</span><br><span class="line-number">383</span><br><span class="line-number">384</span><br><span class="line-number">385</span><br><span class="line-number">386</span><br><span class="line-number">387</span><br><span class="line-number">388</span><br><span class="line-number">389</span><br><span class="line-number">390</span><br><span class="line-number">391</span><br><span class="line-number">392</span><br><span class="line-number">393</span><br><span class="line-number">394</span><br><span class="line-number">395</span><br><span class="line-number">396</span><br><span class="line-number">397</span><br><span class="line-number">398</span><br><span class="line-number">399</span><br><span class="line-number">400</span><br><span class="line-number">401</span><br><span class="line-number">402</span><br><span class="line-number">403</span><br><span class="line-number">404</span><br><span class="line-number">405</span><br><span class="line-number">406</span><br><span class="line-number">407</span><br><span class="line-number">408</span><br><span class="line-number">409</span><br><span class="line-number">410</span><br><span class="line-number">411</span><br><span class="line-number">412</span><br><span class="line-number">413</span><br><span class="line-number">414</span><br><span class="line-number">415</span><br><span class="line-number">416</span><br><span class="line-number">417</span><br><span class="line-number">418</span><br><span class="line-number">419</span><br><span class="line-number">420</span><br><span class="line-number">421</span><br><span class="line-number">422</span><br><span class="line-number">423</span><br><span class="line-number">424</span><br><span class="line-number">425</span><br><span class="line-number">426</span><br><span class="line-number">427</span><br><span class="line-number">428</span><br><span class="line-number">429</span><br><span class="line-number">430</span><br><span class="line-number">431</span><br><span class="line-number">432</span><br><span class="line-number">433</span><br><span class="line-number">434</span><br><span class="line-number">435</span><br><span class="line-number">436</span><br><span class="line-number">437</span><br><span class="line-number">438</span><br><span class="line-number">439</span><br><span class="line-number">440</span><br><span class="line-number">441</span><br><span class="line-number">442</span><br><span class="line-number">443</span><br><span class="line-number">444</span><br><span class="line-number">445</span><br><span class="line-number">446</span><br><span class="line-number">447</span><br><span class="line-number">448</span><br><span class="line-number">449</span><br><span class="line-number">450</span><br><span class="line-number">451</span><br><span class="line-number">452</span><br><span class="line-number">453</span><br><span class="line-number">454</span><br><span class="line-number">455</span><br><span class="line-number">456</span><br><span class="line-number">457</span><br><span class="line-number">458</span><br><span class="line-number">459</span><br><span class="line-number">460</span><br><span class="line-number">461</span><br><span class="line-number">462</span><br><span class="line-number">463</span><br><span class="line-number">464</span><br><span class="line-number">465</span><br><span class="line-number">466</span><br><span class="line-number">467</span><br><span class="line-number">468</span><br><span class="line-number">469</span><br><span class="line-number">470</span><br><span class="line-number">471</span><br><span class="line-number">472</span><br><span class="line-number">473</span><br><span class="line-number">474</span><br><span class="line-number">475</span><br><span class="line-number">476</span><br><span class="line-number">477</span><br><span class="line-number">478</span><br><span class="line-number">479</span><br><span class="line-number">480</span><br><span class="line-number">481</span><br><span class="line-number">482</span><br><span class="line-number">483</span><br><span class="line-number">484</span><br><span class="line-number">485</span><br><span class="line-number">486</span><br><span class="line-number">487</span><br><span class="line-number">488</span><br><span class="line-number">489</span><br><span class="line-number">490</span><br><span class="line-number">491</span><br><span class="line-number">492</span><br><span class="line-number">493</span><br><span class="line-number">494</span><br><span class="line-number">495</span><br><span class="line-number">496</span><br><span class="line-number">497</span><br><span class="line-number">498</span><br><span class="line-number">499</span><br><span class="line-number">500</span><br><span class="line-number">501</span><br><span class="line-number">502</span><br><span class="line-number">503</span><br><span class="line-number">504</span><br><span class="line-number">505</span><br><span class="line-number">506</span><br><span class="line-number">507</span><br><span class="line-number">508</span><br><span class="line-number">509</span><br><span class="line-number">510</span><br><span class="line-number">511</span><br><span class="line-number">512</span><br><span class="line-number">513</span><br><span class="line-number">514</span><br><span class="line-number">515</span><br><span class="line-number">516</span><br><span class="line-number">517</span><br><span class="line-number">518</span><br><span class="line-number">519</span><br><span class="line-number">520</span><br><span class="line-number">521</span><br><span class="line-number">522</span><br><span class="line-number">523</span><br><span class="line-number">524</span><br><span class="line-number">525</span><br><span class="line-number">526</span><br><span class="line-number">527</span><br><span class="line-number">528</span><br><span class="line-number">529</span><br><span class="line-number">530</span><br><span class="line-number">531</span><br><span class="line-number">532</span><br><span class="line-number">533</span><br><span class="line-number">534</span><br><span class="line-number">535</span><br><span class="line-number">536</span><br><span class="line-number">537</span><br><span class="line-number">538</span><br><span class="line-number">539</span><br><span class="line-number">540</span><br><span class="line-number">541</span><br><span class="line-number">542</span><br><span class="line-number">543</span><br><span class="line-number">544</span><br><span class="line-number">545</span><br><span class="line-number">546</span><br><span class="line-number">547</span><br><span class="line-number">548</span><br><span class="line-number">549</span><br><span class="line-number">550</span><br></div></div>`,5),r=[e];function i(c,b,t,u,o,m){return a(),s("div",null,r)}const S=n(l,[["render",i]]);export{d as __pageData,S as default};
