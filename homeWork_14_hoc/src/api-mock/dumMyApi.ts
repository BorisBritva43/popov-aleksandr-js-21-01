import { METHOD_GET } from '../constants/api/common';
import { APP_ID_FIELD, APP_ID_VALUE, COMMENT_URL, LIMIT_FIELD, PAGE_FIELD } from '../constants/api/dumMyApi';
import { PostListResponse } from '../types/dummyApiResponses';
// import { CommentResponse } from '../types/dummyApiResponses';

export const getCommentList = (
   page: number,
   limit: number,
   callback: (resp: any) => void,
   errorCallback?: (resp: any) => void) =>
   fetch(COMMENT_URL, {
      method: METHOD_GET,
      headers: new Headers({
         [APP_ID_FIELD]: APP_ID_VALUE,
         [PAGE_FIELD]: page.toString(),
         [LIMIT_FIELD]: limit.toString(),
      }),
   }).then((response) => response.json())
      .then((response: PostListResponse) => callback(response.data))
      .catch(errorCallback);