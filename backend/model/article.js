var listArticle = [
    {
        "id" : 1,
        "title": "Le welsh, plat du Nord ou d'aillleurs?",
        "publicationDate" : "2014-01-19",
        "image" : "",
        "content" : `Le welsh, aussi appelé welsh rabbit ou welsh rarebit1 ou parfois croque gallois2, est un plat d'origine galloise, à base de cheddar fondu (originellement, on utilisait du chester).

        Il est traditionnellement servi sur une tranche de pain grillé, le tout passé au four. En France, le welsh est typiquement servi dans les brasseries de la Côte d'Opale (et d'une manière générale, du Nord et du Pas-de-Calais), où il est désormais bien ancré dans la culture régionale.`
    },
    {
        "id" : 2,
        "title": "",
        "publicationDate" : "2021-02-08",
        "image" : "",
        "content" : ""
    },
    {
        "id" : 3,
        "title": "",
        "publicationDate" : "2021-02-12",
        "image" : "",
        "content" : ""
    },
    {
        "id" : 4,
        "title": "",
        "publicationDate" : "2021-02-18",
        "image" : "",
        "content" : ""
    },
    {
        "id" : 5,
        "title": "",
        "publicationDate" : "2021-02-25",
        "image" : "",
        "content" : ""
    }
];

exports.getLastFive = () => {
    return listArticle.sort((a, b) => {
        return (Date.parse(a.publicationDate) < Date.parse(b.publicationDate))?1:-1;
    });
}

exports.getById = (id) => {
    return listArticle.find(article => article.id == id);
}

exports.getFavorites = (listId) => {
    return listArticle.filter(article => listId.some(id => id == article.id));
}