var listArticle = [
    {
        "id" : 1,
        "title": "Le welsh, plat du Nord ou d'ailleurs?",
        "publicationDate" : "2021-01-19",
        "image" : "image/welsh.jpg",
        "content" : `Le welsh, aussi appelé welsh rabbit ou welsh rarebit1 ou parfois croque gallois2, est un plat d'origine galloise, à base de cheddar fondu (originellement, on utilisait du chester).

        Il est traditionnellement servi sur une tranche de pain grillé, le tout passé au four. En France, le welsh est typiquement servi dans les brasseries de la Côte d'Opale (et d'une manière générale, du Nord et du Pas-de-Calais), où il est désormais bien ancré dans la culture régionale.`
    },
    {
        "id" : 2,
        "title": "La Nouvelle Gare du Nord",
        "publicationDate" : "2021-02-08",
        "image" : "image/gare-du-nord.jpg",
        "content" : "Le projet de rénovation de la plus grande gare d’Europe a été validé le 9 juillet 2018. 600 M€ vont être investis pour transformer cette gare, d’ici à 2023. A terme, la SNCF n’y sera qu’un actionnaire minoritaire, associé à Ceetrus (groupe Auchan)."
    },
    {
        "id" : 3,
        "title": "Les framework front les plus populaires",
        "publicationDate" : "2021-02-12",
        "image" : "image/react.png",
        "content" : `Les single-page application ou SPA (applications web qui se construisent côté navigateur, en appelant la logique métier au moyen d’API) sont majoritaires parmi les nouvelles applications web créées. Il en résulte un essor des frameworks front-end dont on n’a pas fini de voir le développement. Examinons un à un les 3 frameworks les plus utilisés.

        Aujourd’hui, les 3 frameworks front-end les plus populaires sont : React, Angular (à ne pas confondre à AngularJS son prédécesseur) et Vue.js.
        
        Ils embarquent tous les trois la notion de composants : des éléments du front-end réutilisables à travers une application.
        
        Le graphique ci-dessous montre l’évolution du nombre de sujets ouverts sur Stack Overflow depuis la création de la plateforme sur les 3 Frameworks React, Angular & Vue.js.`
    },
    {
        "id" : 4,
        "title": "Le NoSQL",
        "publicationDate" : "2021-02-18",
        "image" : "image/NOSQL.png",
        "content" : `En informatique et en bases de données, NoSQL désigne une famille de systèmes de gestion de base de données (SGBD) qui s'écarte du paradigme classique des bases relationnelles. L'explicitation la plus populaire de l'acronyme est Not only SQL (« pas seulement SQL » en anglais) même si cette interprétation peut être discutée1.

        La définition exacte de la famille des SGBD NoSQL reste sujette à débat. Le terme se rattache autant à des caractéristiques techniques qu'à une génération historique de SGBD qui a émergé autour des années 20102. D'après Pramod J. Sadalage et Martin Fowler, la raison principale de l'émergence et de l'adoption des SGBD NoSQL serait le développement des centres de données et la nécessité de posséder un paradigme de bases de données adapté à ce modèle d'infrastructure matérielle3.
        
        L'architecture machine en clusters induit une structure logicielle distribuée fonctionnant avec des agrégats répartis sur différents serveurs permettant des accès et modifications concurrentes mais imposant également de remettre en cause de nombreux fondements de l'architecture SGBD relationnelle traditionnelle, notamment les propriétés ACID.`
    },
    {
        "id" : 5,
        "title": "La baleine bleue",
        "publicationDate" : "2021-02-25",
        "image" : "image/baleine-bleu.jpg",
        "content" : `La baleine bleue (Balaenoptera musculus), appelée aussi rorqual bleu, est une espèce de cétacés de la famille des Balaenopteridae. Pouvant dépasser 30 mètres de longueur et 170 tonnes, c'est le plus gros animal vivant à notre époque et dans l'état actuel des connaissances, le plus gros (avant deux grands sauropodes dont le Diplodocus hallorum) ayant vécu sur Terre.

        Long et mince, le corps de la baleine bleue peut prendre diverses teintes de gris-bleuté sur le dos et un peu plus clair en dessous. On dénombre au moins trois sous-espèces distinctes : B. m. musculus dans l’Atlantique Nord et le Pacifique Nord, B. m. intermedia de l’océan Antarctique et B. m. brevicauda découverte dans l’océan Indien et dans le sud de l’océan Pacifique. B. m. indica, découverte dans l’océan Indien, pourrait être une autre sous-espèce. Comme les autres baleines, la baleine bleue se nourrit essentiellement d’un petit crustacé, le krill, de planctons mais également de petits poissons et parfois de calmars.`
    }
];

exports.getAll = () => {
    return listArticle;
}

exports.getById = (id) => {
    return listArticle.find(article => article.id == id);
}

exports.getFavorites = (listId) => {
    return listArticle.filter(article => listId.some(id => id == article.id));
}