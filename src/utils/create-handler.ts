import { ApiResponse } from '@/types';
import type { IncomingMessage, ServerResponse } from 'http';
import { json, send } from 'micro';

export const createHandler = <TParams = Record<string, string>, TBody = any>(
  handler: (
    params: TParams,
    body?: TBody,
    req?: IncomingMessage
  ) => Promise<ApiResponse> | ApiResponse
) => {
  return async (req: IncomingMessage, res: ServerResponse) => {
    try {
      const body =
        req.method !== 'GET' && req.method !== 'DELETE'
          ? await json(req).catch(() => undefined)
          : undefined;

      const result = await handler({} as TParams, body as TBody, req);
      send(res, result.success ? 200 : 400, result);
    } catch (error) {
      send(res, 500, { success: false, error: 'Internal server error' });
    }
  };
};
