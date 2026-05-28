import type { HTTPMethod } from 'find-my-way';
import type { IncomingMessage, ServerResponse } from 'http';

type RouteConfig = {
  method: HTTPMethod;
  path: string;
  handler: (
    req: IncomingMessage,
    res: ServerResponse,
    params: Record<string, string>
  ) => Promise<void> | void;
};

export interface ApiResponse<T = {} | null> {
  success: boolean;
  data: T;
  error?: string;
}
