<div align="center">
<img alt="banner" src="https://src.ks-infinite.fr/bras/bras.png"width="80">
<h3 align="center">B.R.A.S</h3>
<em>Projet BRAS - Code et Documentation.</em>

<br>

<img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/t/kerogs/bras?style=for-the-badge&logo=github&logoColor=fff">

</div>

### Language de programmation
![C++](https://img.shields.io/badge/c%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=fff)
![C](https://img.shields.io/badge/C-%23A8B9CC?style=for-the-badge&logo=C&logoColor=000)
![LabVIEW](https://img.shields.io/badge/labview-%23FFDB00?style=for-the-badge&logo=labview&logoColor=000)

### Documentation
![Vitepress](https://img.shields.io/badge/vitepress-5C73E7.svg?style=for-the-badge&logo=vitepress&logoColor=white)
![VueJS](https://img.shields.io/badge/vue.js-4FC08D.svg?style=for-the-badge&logo=vue.js&logoColor=white)

### Conception
![Proteus](https://img.shields.io/badge/proteus-%231C79B3?style=for-the-badge&logo=proteus&logoColor=fff)
![EasyEDA](https://img.shields.io/badge/easyeda-%231765F6?style=for-the-badge&logo=easyeda&logoColor=fff)

### Marque Composants
![Adafruit](https://img.shields.io/badge/Adafruit-%23000?style=for-the-badge&logo=adafruit&logoColor=fff)
![Motorola](https://img.shields.io/badge/Motorola-%23E1140A?style=for-the-badge&logo=motorola&logoColor=fff)
![STMicroelectronics](https://img.shields.io/badge/stmicroelectronics-%2303234B?style=for-the-badge&logo=stmicroelectronics&logoColor=fff)

### Marque Composant intégré
![DFRobot](https://img.shields.io/badge/DFRobot-%23ed6a00?style=for-the-badge&logoColor=fff)
![img](https://img.shields.io/badge/Kerogs-fd4e2b.svg?style=for-the-badge&logo=)


### Marque Equipement
![Stone](https://img.shields.io/badge/stone-blue?style=for-the-badge&logo=stone&logoColor=fff)
![Arduino Mega](https://img.shields.io/badge/Arduino-%2300878F?style=for-the-badge&logo=arduino&logoColor=fff&logoSize=fff)


### Hébergement
![Arduino Mega](https://img.shields.io/badge/Github-%23000000?style=for-the-badge&logo=github&logoColor=fff&logoSize=fff)
![img](https://img.shields.io/badge/Kerogs-fd4e2b.svg?style=for-the-badge&logo=)

## Installation
1. Effectuer la commande suivante pour cloner le repository
```sh
git clone https://github.com/kerogs/bras.git
```

## Accès à la documentation
Pour simplement ouvrir et consulter la documentation :
1. Rendez vous sur le site de la documentation [ks-infinite.fr](https://bras.ks-infinite.fr/)
   - Ou alors Passer à l'étape ***Modification et lancement de la documentation*** pour la version self hosted

## Modification et lancement de la documentation
Pour lancer la documentation en local et effectuer des modifications :

1. Installez ``NodeJS`` via [ce lien](https://nodejs.org/en/download/current)
2. Clone le repository
```sh
git clone https://github.com/kerogs/bras.git
```

2. Accédez au dossier ``/docs/``
```sh
cd docs
```

3. Installer les packages
```sh
npm install
```

4. Exécutez la commande suivante pour lancer la documentation en local :
```sh
npm run docs:dev
```


Une fois le chargement terminé, une adresse IP locale avec son port sera affichée. Ouvrez cette adresse dans un navigateur web pour accéder à la documentation.

Tous les fichiers de documentation sont rédigés au format Markdown, mais fonctionnent sous VitePress. Vous pouvez donc vous renseigner sur la personnalisation de VitePress.

## Code arduino
Tout le code Arduino est situé dans le dossier  ``/public/code/``. Le code principal se trouve dans ``/public/code/main.ino``. Il existe une partie qui s'appelle ``admin.ino`` qui sert à tester l'intégralité du code. La documentation des commandes est disponible dans la section ADR dans la version du code admin choisis. 

### Modifications
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

## Utilisation de la documentation.
Le code embarque avec lui une version selfhosted de la documentation. Pour cela, il vous suffit d'effectuer les commandes suivantes :
- Accédez au dossier ``/docs/``
```sh
cd docs
```

- Exécutez la commande suivante pour build la documentation :
```sh
npm run docs:build
```
- Ou le faire en 1 commande
```sh
cd .\docs\; npm run docs:build
```
- Il vous suffit donc maintenant d'héberger en local les fichiers HTML (important pour le chargement du CSS)


## Schéma + Shield
![Schéma](./public/proteus/preview2.png)
![Shield](./public/proteus/preview1.png)

## License
Licence Apache 2.0 (voir le fichier LICENSE)

## Auteurs
- [Lucas W.](https://github.com/kerogs)
- [Florian V.](https://github.com/BruggaChamp)
- [Jessy K.](https://github.com/nepthys01)

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)