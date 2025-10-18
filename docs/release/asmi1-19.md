# ASMI1-19 — Arduino Shield Multi-Interface
**Version 1.19** | Révision 29 mai 2024

---

## 1. Introduction

Le **ASMI1-19** est un shield (carte d'extension) Arduino conçu pour centraliser la gestion des interfaces de communication et d'alimentation dans le contexte du projet B.R.A.S. Ce module constitue un élément essentiel de l'architecture système, servant de point de convergence entre l'Arduino Mega, l'interface utilisateur (HMI), le système moteur et le périphérique d'impression.

Ce document s'adresse aux développeurs, techniciens, responsables de projet, intégrateurs, et créateurs de PCB impliqués dans le déploiement et la maintenance du système. Une familiarité préalable avec le projet B.R.A.S. est recommandée pour une compréhension optimale.

---

## 2. Nomenclature et Désignation

Le code ASMI1-19 se décline comme suit :

| Composant | Signification |
|-----------|---------------|
| **AS** | Arduino Shield |
| **M** | Moteur (Motor) |
| **I** | Imprimante (Printer) |
| **1** | Version 1 |
| **-19** | Numéro de révision |

**Désignation complète** : ASMI1-19 v1.19

---

## 3. Spécifications Techniques

### 3.1 Caractéristiques Physiques

- **Compatibilité** : Arduino Mega 2560 (dimensions 53 × 101 mm)
- **Compatibilité théorique** : Elegoo Mega (non testée)
- **Facteur de forme** : Shield 1:1 (empreinte identique à l'Arduino)
- **Positionnement** : À installer **obligatoirement au-dessus** de l'Arduino Mega
- **Compatibilité avec d'autres shields** : Oui, à condition que le shield DRI0023 soit installé directement au-dessus (configuration testée et validée)

### 3.2 Alimentation

- **Alimentation d'entrée** : 12V CC (fournie par le connecteur HMI)
- **Distribution** :
  - VIN Arduino : 12V (direct depuis l'alimentation HMI)
  - Section moteur : 5V (générée par l'Arduino)
  - Imprimante : 9V (convertie via régulateur intégré)
  - HMI : 12V (direct)

**Rôle du régulateur** : Le shield intègre un convertisseur 12V → 9V équipé de deux condensateurs de stabilisation (en amont et en aval de la conversion) assurant une alimentation stable du périphérique d'impression.

### 3.3 Interfaces de Communication

| Interface | Débit | Protocole | Connecteur |
|-----------|-------|-----------|-----------|
| HMI | 9600 baud | UART/RS-232 (5V) | Embase 4 broches (J1) |
| Imprimante | 19200 baud | UART/TTL (5V) | Embase 4 broches (J2) |
| Section moteur | 5V logique | Signaux numériques | Embase 8 broches (J3) |

---

## 4. Architecture et Connectique

### 4.1 Connecteur J1 — Interface HMI (Embase 4 broches)

Le connecteur J1 assure la liaison bidirectionnelle avec l'interface utilisateur (HMI).

| Broche | Signal | Description |
|--------|--------|-------------|
| 1 | +12V | Alimentation directe depuis le connecteur HMI |
| 2 | GND | Masse commune |
| 3-4 | Transmission | Données UART (TX/RX) en protocole RS-232 5V |

**Remarque importante** : L'alimentation 12V entrante transite par ce connecteur. Des mesures prélevées directement au niveau du connecteur J1 refléteront la tension brute (12V). Après conversion interne TTL, les signaux de communication passent à 5V.

### 4.2 Connecteur J2 — Interface Imprimante (Embase 4 broches)

Le connecteur J2 gère la communication et l'alimentation du périphérique d'impression.

| Broche | Signal | Description |
|--------|--------|-------------|
| 1 | +9V | Alimentation régulée (convertie depuis 12V) |
| 2 | GND | Masse commune |
| 3-4 | Transmission | Données UART (TX/RX) en protocole TTL 5V |

**Débit configurable** : 19200 baud par défaut.

### 4.3 Connecteur J3 — Section Moteur (Embase 8 broches)

Le connecteur J3 délivre l'alimentation et les signaux de contrôle vers la section moteur (casier).

| Broche | Signal | Description |
|--------|--------|-------------|
| 1 | +12V | Alimentation moteur (broche de référence) |
| 2 | GND | Masse commune |
| 3-4 | +5V | Alimentation logique pour commandes boutons |
| 5-6 | +5V | Alimentation LED (résistances 220Ω intégrées) |
| 7-8 | Non utilisées | Réservées pour extension future |

**Remarque** : Les broches 3-4 sont destinées à recevoir les signaux de commande des boutons. Les broches 5-6 possèdent des résistances de limitation de courant (220Ω) intégrées au PCB pour la commande sécurisée des LED.

---

## 5. Représentations Visuelles

### 5.1 Vue PCB Schématique

![Vue PCB Schématique](https://raw.githubusercontent.com/kerogs/bras/refs/heads/main/assets/preview1.png)

*Figure 1 : Disposition générale et connecteurs du shield ASMI1-19*

### 5.2 Schéma Électrique Détaillé

![Schéma Électrique](https://raw.githubusercontent.com/kerogs/bras/refs/heads/main/assets/preview2.png)

*Figure 2 : Schéma fonctionnel montrant les chemins de conversion et distribution de l'alimentation*

### 5.3 Vue Réelle du PCB

#### Face Supérieure

![Vue Dessus du PCB](https://raw.githubusercontent.com/kerogs/bras/refs/heads/main/assets/1-asmi1-19.jpg)

*Figure 3 : Vue de dessus du shield ASMI1-19 montrant les connecteurs et composants principaux*

#### Face Inférieure

![Vue Dessous du PCB](https://raw.githubusercontent.com/kerogs/bras/refs/heads/main/assets/2-asmi1-19.jpg)

*Figure 4 : Vue de dessous du shield montrant les connexions internes et les composants de stabilisation*

### 5.4 Images de Fabrication

![Fabrication Vue 1](https://raw.githubusercontent.com/kerogs/bras/refs/heads/main/assets/fab1-asmi1-19.jpg)

*Figure 5 : Étape de fabrication du shield ASMI1-19 (1/2)*

![Fabrication Vue 2](https://raw.githubusercontent.com/kerogs/bras/refs/heads/main/assets/fab2-asmi1-19.jpg)

*Figure 6 : Étape de fabrication du shield ASMI1-19 (2/2)*

---

## 6. Principes de Fonctionnement

### 6.1 Architecture Globale

Le shield ASMI1-19 fonctionne selon le modèle suivant :

1. **Entrée d'alimentation** : 12V provenant du HMI via le connecteur J1
2. **Routage vers Arduino** : La tension 12V est acheminée vers la broche VIN de l'Arduino Mega, permettant au régulateur interne de l'Arduino de générer les 5V nécessaires
3. **Conversion secondaire** : Un régulateur interne convertit 12V en 9V pour l'imprimante (avec stabilisation par condensateurs)
4. **Distribution des signaux** : Les données UART (9600 baud HMI / 19200 baud imprimante) sont gérées nativement par les ports série de l'Arduino

### 6.2 Flux de Données

```
HMI (12V) ──> J1 ──> VIN Arduino ──> Arduino génère 5V
                                    ├──> J3 Section moteur
                                    └──> UART HMI/Imprimante

Imprimante ──> J2 ──> Convertisseur 12V→9V ──> Alimentation
           ──> UART RX/TX (5V) via Arduino
```

---

## 7. Instructions d'Installation

### 7.1 Préalables

- Arduino Mega 2560 ou Elegoo Mega (non testé)
- Alimentation 12V stable (fournie par le système HMI)
- Shield DRI0023 (si installation prévue au-dessus du ASMI1-19)

### 6.2 Procédure d'Installation

1. **Préparation** : Éteindre complètement le système et débrancher l'alimentation
2. **Positionnement** : Placer le shield ASMI1-19 **directement et uniquement au-dessus** de l'Arduino Mega
   - Les connecteurs de l'Arduino Mega doivent être parfaitement alignés avec les empreintes du shield
   - Appuyer fermement jusqu'à obtenir un contact optimal
3. **Installation du shield secondaire** : Si le shield DRI0023 doit être utilisé, l'installer directement au-dessus du ASMI1-19
4. **Connexions externes** :
   - Brancher le connecteur HMI sur J1 (alimentation 12V et données)
   - Brancher le connecteur d'imprimante sur J2
   - Brancher le connecteur moteur sur J3
5. **Vérification** : Contrôler visuellement que tous les connecteurs sont bien enfichés
6. **Mise sous tension** : Activer l'alimentation et vérifier les voyants (le cas échéant)

### 6.3 Restrictions Critiques

⚠️ **INTERDIT** : Installer d'autres shields en dessous du ASMI1-19. Le shield délivre directement 12V sur les broches d'alimentation et tout équipement mal adapté risquerait une destruction.

⚠️ **FORTEMENT DÉCONSEILLÉ** : Installer d'autres shields au-dessus du ASMI1-19, à l'exception du DRI0023 qui a été spécifiquement testé et validé dans cette configuration.

---

## 7. Guide de Mesure et Diagnostic

### 7.1 Points de Mesure

Lors du diagnostic ou de la prise de mesures, respecter l'ordre de priorité suivant :

| Point | Tension attendue | Localisation | Remarques |
|-------|------------------|--------------|-----------|
| Entrée HMI (J1:1) | 12V ± 0.5V | Connecteur J1, broche 1 | Mesure directe du bus HMI |
| VIN Arduino | 12V ± 0.5V | Sortie du shield vers Arduino | Après conversion interne de l'Arduino |
| Sortie UART (J1:3-4) | 5V TTL | Connecteur J1, broches 3-4 | Après conversion TTL par Arduino |
| Alimentation imprimante (J2:1) | 9V ± 0.3V | Connecteur J2, broche 1 | Après régulateur 12V→9V |
| Sortie UART imprimante (J2:3-4) | 5V TTL | Connecteur J2, broches 3-4 | Signal logique 5V |

### 7.2 Avertissement Critique

**Important** : Les mesures effectuées sur les signaux UART **avant** conversion en protocole TTL (c'est-à-dire du côté HMI, avant passage par la chaîne de traitement Arduino) doivent impérativement être réalisées au point de mesure côté HMI.

**Raison** : Après conversion TTL interne, tous les signaux logiques passent à 5V. Un mauvais positionnement de la sonde peut conduire à :
- Une lecture incorrecte (faux contact en zone de conversion)
- Une perturbation du signal TTL
- Une détérioration prématurée des composants de conversion

**Recommandation** : Toujours mesurer les tensions avant la conversion TTL pour éviter les artefacts de mesure.

---

## 8. Considérations Électriques

### 8.1 Protections Intégrées

Le shield ASMI1-19 **n'est pas équipé** de protections contre les surcharges ou les court-circuits externes. La robustesse du système repose sur :

- **Stabilisation de l'alimentation** : Deux condensateurs de découplage (avant et après le régulateur 12V→9V)
- **Respect des débits de communication** : Les vitesses UART (9600 et 19200 baud) ont été sélectionnées pour minimiser les interférences
- **Conception des connecteurs** : Empreintes standardisées (embase 4 et 8 broches) réduisant les erreurs de connexion

### 8.2 Charge Maximale Recommandée

Bien que non officiellement spécifiée, le système doit être dimensionné en considérant :
- **Imprimante** : Consommation typique ≤ 500 mA @ 9V
- **Section moteur** : Consommation définie par les spécifications du projet B.R.A.S.
- **HMI** : Alimentation fournie par source externe (faible impact sur le régulateur Arduino)

Une consommation excessive risquerait de surcharger le régulateur interne de l'Arduino (5V).

---

## 9. Compatibilité et Évolution

### 9.1 Shields Validés

- **DRI0023** : Testé et validé en configuration empilée au-dessus du ASMI1-19

### 9.2 Shields Non Testés

- Elegoo Mega : Compatibilité théorique, non validée expérimentalement

### 9.3 Connecteurs Réservés

Les broches 7-8 du connecteur J3 sont réservées pour les extensions futures. Aucune fonction n'y est actuellement assignée.

---

## 10. Support et Maintenance

### 10.1 Vérifications Préventives

- **Mensuel** : Vérifier l'intégrité des connecteurs et l'absence de corrosion
- **Après installation** : Tester les débits UART avec un oscilloscope ou analyseur logique
- **En cas de dysfonctionnement** : Consulter le guide de mesure (section 7)

### 10.2 Remplacement de Composants

En cas de défaillance du régulateur 12V→9V ou des condensateurs de stabilisation, le shield devra être remplacé en entier. Aucune réparation composant n'est recommandée.

---

## 12. Historique des Révisions

| Version | Révision | Date | Modifications |
|---------|----------|------|----------------|
| 1 | 19 | 29 mai 2024 | Version initiale documentée |

---

**Projet B.R.A.S.**  
*Dernière mise à jour : 29 mai 2024*