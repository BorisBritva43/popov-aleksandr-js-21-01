export interface ListResponseType<T> {
   data: Array<T>;
   total: number;
   page: number;
   limit: number;
}

export interface PostType {
   id?: string;
   message?: string;
   post?: string;
   publishDate?: string;
   lastName: string;
   picture: string;
   title: string;
}

export interface UserResponse {
   id?: string;
   title?: string;
   firstName?: string;
   lastName?: string;
   gender?: string;
   email?: string;
   dateOfBirth?: string;
   registerDate?: string;
   phone?: string;
   picture?: string;
}

export interface ResponseError {
   error: string;
}

export interface PostListResponse extends ListResponseType<PostType> { }