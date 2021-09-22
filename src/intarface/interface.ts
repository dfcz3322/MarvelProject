export interface ICharacter {
    comics: IComics;
    description: string;
    events: IEvents;
    id: number;
    modified: string;
    name: string;
    resourceURL: string;
    series: ISeries;
    stories: IStories;
    thumbnail: IThumbnail;
    urls: IUrls[];
}

export interface IComics {
    available: number;
    collectionURI: string;
    items: IItems[];
    returned: number;
}

export interface IItems {
    name: string;
    resourceURI: string;
}

export interface IEvents {
    available: number;
    collectionURI: string;
    items: IItems[];
    returned: number;
}

export interface ISeries {
    available: number;
    collectionURI: string;
    items: IItems[];
    returned: number;
}

export interface IStories {
    available: number;
    collectionURI: string;
    items: IStroriesItems[];
    returned: number;
}

export interface IStroriesItems {
    name: string;
    resourceURI: string;
    type: string;
}

export interface IThumbnail {
    extension: string;
    path: string;
}

export interface IUrls {
    type: string;
    url: string;
}

export interface IComics {
    comics: IComics;
    description: string;
    events: IEvents;
    id: number;
    modified: string;
    name: string;
    resourceURI: string;
    series: ISeries;
    stories: IStories;
    thumbnail: IThumbnail;
    urls: IUrls;
}