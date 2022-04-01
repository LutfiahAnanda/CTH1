const ObjectLoop = () => {
    const articles = [ 
        {
            id:"1",
            title: "Article 1",
            author: "Bohemian Rhapsody",
            date: "19-10-2018",
            content: "This is Article",
        },
        {
            id: "2",
            title: "Article 2",
            author: "Bohemian Rhapsody",
            date: "2020-01-24",
            content: "This is Article 2",
        },
    ];
    return (
        <>
        {articles.map((e) =>(
            {articles.map((e) => (
            {e.id}
            title={e.title}
            author={e.author}
            date={e.date}
            content={e.content}
            />
        ))}
        </>
    );
};

export default ObjectionLoop;