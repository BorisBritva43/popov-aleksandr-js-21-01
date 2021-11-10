export interface ListResponseType<T> {
   data: Array<T>;
   total: number;
   page: number;
   limit: number;
}

export interface PostType {
   id?: string;
   message?: string;
   owner?: object;
   post?: string;
   publishDate?: string;
   lastName: string;
   picture: string;
   title: string;
}

export interface PostListResponse extends ListResponseType<PostType> { }