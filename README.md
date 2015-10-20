# Exemple Browserify 

Code source d'exemple pour illustrer la présentation [Browserify ta life](http://slides.com/sylvaincombes/deck#/)

## Installation

Avoir nodejs sur son poste et lancer la commande suivante pour installer les dépendances :

	npm install
	
---	

## Explication du contenu

### Source

Les fichiers sources js sont dans le dossier **assets/js/src** :

    assets/js/src/talker.js
    assets/js/src/app.js
    
Le fichier **assets/js/src/talker.js** est un exemple de module.

Le fichier **assets/js/src/app.js** est un exemple d'utilisation d'un module local et d'un "module npm".

----

### Tests

Les tests sont dans le dossier **assets/js/tests** :

    assets/js/tests/talker.js
    
Les tests sont exécutés à l'aide de [prova](https://github.com/azer/prova) qui lance des tests basés sur [tape](https://github.com/substack/tape) et [Browserify](http://browserify.org/)

---

### Fichiers "compilés"

Les fichiers javascript "compilés" sont dans **assets/js** :

    assets/js/app.js
    assets/js/app.min.js
    
---

### Fichier pour voir dans un navigateur

Le fichier html pour tester dans un browser est :

    index.html

---

## Utilisation

### Tâches grunt

Le projet utilise [grunt](http://gruntjs.com/) ainsi que les plugins :
 
- [grunt-browserify](https://github.com/jmreidy/grunt-browserify) pour compiler avec browserify et recompiler en "live"
- [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify) pour minifier le js

Si vous lancez la tâche par défaut :

    grunt
    
Cela va faire un *browserify* du fichier **assets/js/src/app.js** et mettre le résultat dans le fichier **assets/js/app.js** (avec les sourcemaps en inline pour pouvoir débugger)

La tâche va également détecter les changements dans le code et recompiler à la volée

---

Si vous lancez la tâche :

    grunt release
    
Cela va faire :

- un browserify du fichier **assets/js/src/app.js** et mettre le résultat dans le fichier **assets/js/app.min.js** (sans sourcemap et sans "live reload")
- Minifier **assets/js/app.min.js** avec uglify

---

### Lancement des tests

Pour lancer les tests dans node :

    npm test
    # ou
    node assets/js/tests/talker.js
    
Pour lancer les tests dans un navigateur :

    npm run-script test-browser
    # ou
    node assets/js/tests/talker.js -b
    
