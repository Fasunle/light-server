import { createHandler } from '@/utils/create-handler';

/**
 * Welcome handler for the root path.
 */
export const welcome = createHandler(async () => {
  return {
    success: true,
    data: 'Welcome to the API!',
  };
});
// (req, res) => send(res, 200, { data: 'Welcome to the API!' })
