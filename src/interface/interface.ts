export interface IMarvelEntityResponse {
  comics: IMarvelEntityResponseSubItem;
  description: string;
  events: IMarvelEntityResponseSubItem;
  id: number;
  modified: string;
  name: string;
  resourceURL: string;
  series: IMarvelEntityResponseSubItem;
  stories: IStories;
  thumbnail: IThumbnail;
  urls: IUrls[];
}

export interface IMarvelEntityResponseSubItem {
  available: number;
  collectionURI: string;
  items: IItems[];
  returned: number;
}

export interface IItems {
  name: string;
  resourceURI: string;
}

export interface IStories {
  available: number;
  collectionURI: string;
  items: IStoriesItems[];
  returned: number;
}

export interface IStoriesItems {
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
