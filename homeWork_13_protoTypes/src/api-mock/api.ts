/* eslint-disable */
import { CommentResponse } from "../types/responses";

export const apiResponse: CommentResponse = {
   status: 'ok',
   result: [
      {
         name: 'Andre',
         text: 'Comment first'
      },
      {
         name: 'Oleg',
         text: 'Second Comment'
      },
      {
         name: 'Elena',
         text: 'Third Comment'
      },
      {
         name: 'Olga',
         text: 'Fourth Comment'
      },
      {},
      {
         name: '',
         text: 'Any comment'
      }
   ]
};