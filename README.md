# Introduction 

Ce repository contient les fichiers pour l'article sur [codons.blog](https://codons.blog/creer-une-api-avec-node-js.html).

# Commandes 

Pour installer les dépendances:
```sh  
npm install
```

Pour démarrer le serveur en en utilisant Typescript sans source map: 
```sh  
npm run start:ts 
```

Pour démarrer le serveur en en utilisant Typescript avec source map: 
```sh  
npm run ts 
```

# Description

Le script start.js utilise `esbuild` pour produire un fichier javascript depuis les fichiers typescript.

Le dossier test contient les fichiers utilisant [ain](https://github.com/jonaslu/ain).

Le fichier `SourceMapper` n'est pas utilisé dans le code, elle est donnée à titre d'exemple.

