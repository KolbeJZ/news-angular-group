export interface Article {
    source: {
        id: string;
        name: string;
    }
    author: string;
    title: string;
    description: string;
    url: string;
    publishedAt: Date;
    content: string;
    urlToImage: string;
}
