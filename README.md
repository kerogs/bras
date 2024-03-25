# bras

Projet BRAS - Code et Documentation.

## Clonage du repository Git
Effectuer la commande suivante pour cloner le repository
```bash
git clone <URL_du_repository>
```

## Accès à la documentation
Pour simplement ouvrir et consulter la documentation :
- Lancer le fichier ``/public/docs/index.html``

## Modification et lancement de la documentation
Pour lancer la documentation en local et effectuer des modifications :

- Installez ``NodeJS``
- Accédez au dossier ``/docs/``
- Exécutez la commande suivante pour lancer la documentation en local :
```bash
npm run docs:dev
```

Une fois le chargement terminé, une adresse IP locale avec son port sera affichée. Ouvrez cette adresse dans un navigateur web pour accéder à la documentation.

Tous les fichiers de documentation sont rédigés au format Markdown, mais fonctionnent sous VitePress. Vous pouvez donc vous renseigner sur la personnalisation de VitePress.

## Code arduino
Tout le code Arduino est situé dans le dossier  ``/public/code/``. Le code principal se trouve dans ``/public/code/main.ino``.

## Modifications
***Voici la liste des éléments à ajouter :***

- Intégrer votre nouvelle version de code dans le dossier ADR et la lier à son fichier ``/docs/ADR/index.md``.
- Toute ajout de fonction, variable ou dépendance.

Avant d'apporter des modifications, veuillez mettre à jour la documentation. Si vous souhaitez générer la documentation au format HTML et la placer dans ``/public/docs/`` exécutez la commande suivante :

```bash
npm run docs:build
```

Si vous modifiez la sortie de la documentation, pensez également à modifier le chemin d'accès dans le fichier ``/docs/.vitepress/config.mts``
```ts
export default {
  outDir: '../public/docs'
}
```

Si vous modifiez la sortie de la documentation, pensez également à modifier le chemin d'accès dans le fichier ``/docs/.vitepress/config.mts``
```ts
export default {
  base: '/public/docs/',
}
```

## License
Licence Apache 2.0 (voir le fichier LICENSE)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)