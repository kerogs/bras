# Documentation
## B.R.A.S : Borne de Recharge Autonome Solaire

Cette documentation regroupe toutes les informations relatives aux codes et composants utilisés pour le **B.R.A.S**.

## Historique

Le projet consiste en la conception d’une borne autonome de recharge pour téléphones mobiles, avec un accent particulier sur la gestion de compartiments sécurisés. Ces compartiments permettent aux utilisateurs de déposer leur téléphone en toute sécurité durant la charge.

L'idée est née d’un besoin exprimé par le centre social du quartier du Wiesberg à Forbach.

## Fonctionnalités et Répartition des Tâches

| Étudiant    | Numéro | Description                                                                                                                                                                  |
|------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [**kerogs**](https://github.com/kerogs)    | 1      | Affichage de l’état des casiers (libres ou occupés), sélection d’un casier libre pour y déposer un téléphone. Création d’un code secret obligatoire, avec possibilité d'impression du code.               |
| **CmoiFlo**  | 2      | Sélection d’un casier "loué" pour récupérer son téléphone après saisie du code secret. Un mode "administrateur" permet le déverrouillage manuel des casiers.                                                 |
| **Nepthys**    | 4      | Commande du verrouillage et du déverrouillage des casiers via un moteur DC actionnant un rideau ou un clapet. Signalisation lumineuse indiquant l’état du casier (libre ou occupé).                       |

---

![B.R.A.S Logo](https://raw.githubusercontent.com/kerogs/bras/refs/heads/main/assets/bras.png){style="display: block; margin: 0 auto"}
