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
