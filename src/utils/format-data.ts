import { send } from 'micro';
import type { ServerResponse } from 'http';

const jsonResponse = <T>(res: ServerResponse, statusCode: number, data: T) => {
  send(res, statusCode, data);
};

export const sendSuccess = <T>(res: ServerResponse, data: T) => {
  jsonResponse(res, 200, data);
};
