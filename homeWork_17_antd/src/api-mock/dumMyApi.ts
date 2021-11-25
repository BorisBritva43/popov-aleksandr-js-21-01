import { METHOD_GET } from '../constants/api/common';
import { APP_ID_FIELD, APP_ID_VALUE, COMMENT_URL, BASE_URL, USER_URL, PAGE_FIELD, LIMIT_FIELD } from '../constants/api/dumMyApi';
import { PostListResponse, ResponseError, UserResponse } from '../types/dummyApiResponses';

const doGetReques = <T>(
   path: string,
   callback: (resp: T) => void,
   errorCallback?: (resp: ResponseError) => void,
   finalCallback?: () => void,
   searchParams?: string,
) => {
   const url = new URL(path, BASE_URL);
   url.search = new URLSearchParams(searchParams).toString();
   fetch(url.toString(), {
      method: METHOD_GET,
      headers: new Headers({
         [APP_ID_FIELD]: APP_ID_VALUE,
      }),
   }).then((resp) => resp.json())
      .then(callback)
      .catch(errorCallback)
      .then(finalCallback);
};

export const getCommentsTotalCount = (
   callback: (tottalCount: number) => void,
   errorCallback?: (resp: any) => void,
   finalCallback?: () => void,
) => {
   doGetReques(
      COMMENT_URL,
      (resp: PostListResponse) => callback(resp.total),
      errorCallback,
      finalCallback,
   );
};

export const getCommentList = (
   page: number,
   limit: number,
   callback: (resp: any) => void,
   errorCallback?: (resp: any) => void,
   finalCallback?: () => void,
) => {
   doGetReques(COMMENT_URL,
      (resp: PostListResponse) => callback(resp.data),
      errorCallback,
      finalCallback,
      // @ts-ignore
      {
         [PAGE_FIELD]: page.toString(),
         [LIMIT_FIELD]: limit.toString(),
      },
   );
};

export const getUserById = (
   id: string,
   callback: (resp: UserResponse) => void,
   errorCallback?: (resp: any) => void,
   finalCallback?: () => void,
) => {
   doGetReques(`${USER_URL}/${id}`, callback, errorCallback, finalCallback);
};