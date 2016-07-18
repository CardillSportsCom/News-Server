export interface IArticleData {
    ID: number;
    Name: string;
    ImageLink: string;
    Owner: ICreator;
    ArticleItems: IArticleItem[];
    Comments: IComment[];
    Rating: number;
}

export interface IComment {
    Name: string;
    Text: string;
    Date: Date;
}

export interface ICreator {
    ID: number;
    firstName: string;
    lastName: string;
    userPicture: string;
}

export interface IArticleItem {
    ID: number;
    Paragraph: string;
    ArticleConnectionID: number;
    Type: string;
}