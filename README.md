# Javanews
## Téléchargement
Copier l'url du repository et faire un : 
* git clone https://github.com/mostuf/Javanews.git

## Instalation
Vous devez avoir installé nodejs et npm sur votre machine : https://www.npmjs.com/get-npm
Positionnez vous sur le dossier backend à partir du projet
```
> cd ./backend/
```
Vous devrez probablement redémarrer l'ordinateur après installation.
Ensuite, installez les composants du projet.
```
> npm install
```
Vous pouvez maintenant lancer le projet en local pour l'utiliser
```
> node server
```
Le serveur sera accéssible sur http://localhost:4000 par défaut.

## API
Il y a actuellement 3 api sur le serveur :

Elles traitent toutes des articles. Un article est au format suivant : 

> {  
>    "id" : int,  
>    "title": string,  
>    "publicationDate" : string,  
>    "image" : string,  
>    "content" : string  
> }  

```
GET /api/article
```
> Récupération des articles triés du plus récent au plus ancien  
> Format de retour :  
> [  
> &nbsp;&nbsp;&nbsp;{article},  
> &nbsp;&nbsp;&nbsp;...  
> ] 

```
GET /api/article/:id
```
> Récupération d'un article par son id
> Format de retour :  
> {article}

```
POST /api/article/
@param favorites : [id]
```
> Récupération des articles favoris (non triés)  
> Format de retour :  
> [  
> &nbsp;&nbsp;&nbsp;{article},  
> &nbsp;&nbsp;&nbsp;...  
> ]  