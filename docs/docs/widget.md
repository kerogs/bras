# Widget
Liste du nom de tous les widgets.

## Accueil
|Elément|Widget|Etat|Description|
|-------|------|----|-----------|
|Page d'accueil|home_page|Activé|page d'accueil affiché au démarage|
|Casier(N)|Casier1-6|Activé|Numéro des casiers (N) = numéro du casier.|
|Bouton Admin|MA|Activé|Bouton pour se connecter en mode admin (afficher avec le text "B.R.A.S.")|
|Carré rouge d'indication|Carrerouge|Activé|Carré rouge allant avec le text "occupé"|
|Text "Occupé"|Occupe|Activé|Text à côté de l'indicateur|
|Carré vert d'indication|Carrevert|Activé|Carré vert allant avec le text "disponible"|
|Text "Disponible"|Disponible|Activé|Text à côté de l'indicateur|

## Page admin
|Elément|Widget|Etat|Description|
|-------|------|----|-----------|
|Page admin|admin|Activé|Page pour l'administrateur|
|Admin(N)|Admin1-6|Activé|Numéro des casiers (N) = numéro du casier|
|Bouton retour par défaut|MC|Activé|Bouton pour retourner en mode par défaut (afficher avec le text "B.R.A.S.")|
|Text "admin"|admin|Activé|Affiche un text pour indiquer que l'afficheur est en mode admin|

## Popup casier
|Elément|Widget|Etat|Description|
|-------|------|----|-----------|
|Popup|popup_C|Activé|Popup qui sera affiché en mode normal pour entrer un mdp|
|Text d'aide 1|Inserer1|Activé/Désactivé|Text d'aide ("1. Insérer le smartphone dans le casier")|
|Text d'aide 2|Inserer2|Activé/Désactivé|Text d'aide ("2. Enter un code secret")
|Text d'aide 3|Inserer3|Activé/Désactivé|Text d'aide ("3. Imprimer code secret en papier ?")|
|Text d'aide Chiffre|Inserer2a|Activé|Petit text pour indiquer le nombre de chiffre minimum pour le mdp (4 chiffres)|
|Entrée MDP|PC|Activé|Input pour rentré le mot de passe 4 chiffre obligatoire|
|Button d'impression|IC|Activé/Désactivé|Bouton pour imprimer le mot de passe|
|Fermer popup|FermerPopupC|Activé|Bouton pour fermer la popup.|
|Confirmer|CC|Désactivé|Pour confirmer le mdp (s'active uniquement après l'envoie de 4 chiffres dans l'entrée du mdp)

## Popup admin
|Elément|Widget|Etat|Description|
|-------|------|----|-----------|
|Popup|popup_admin|Activé|Popup qui sera affiché pour se connecter en tant que admin|
|Text indicateur|Inserer|Activé|Text d'aide ("Insérer code secret :")|
|Entée MDP|AP|Activé|Bouton pour entrée le mdp administrateur|
|Fermer popup|FA|Activé|Bouton pour fermer la popup|
|Confirmer Admin|CA|Désactivé|Bouton pour valider la connexion en tant que administrateur|

## Popup caiser Admin
|Elément|Widget|Etat|Description|
|-------|------|----|-----------|
|Popup|popup_A|Activé|Popup admin pour valider l'ouverture d'un casier|
|Text indicateur|InsererA|Activé|Text indicateur ("Ouvrir casier ?")|
|Bouton fermer popup|FermerPopupA|Activé|Bouton pour fermer la popup|
|Bouton confirmer|DA|Activé|Bouton pour ouvrir le casier|

## Clavier
|Elément|Widget|Description|
|-------|------|-----------|
|Clavier|kb_phone|Clavier pour entrée le MDP|
|Affichage|panel|Comporte les chiffres et bouton de retour|
|Numéro 0-9|0-9|Bouton clavier pour les numéro|
|Bouton vide|zero/zeroo|Bouton vide qui donneront 0 au clique|
|Done|action|Fermer la popup (garde mdp)|
|Retour|candidates|Bouton pour suppirmer un chiffres|
