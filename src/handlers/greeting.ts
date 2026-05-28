import { createHandler } from '@/utils/create-handler';

/**
 * Greeting handler for the api/greeting.
 */
export const greeting = createHandler(async () => {
  return {
    success: true,
    data: 'Hello, World!',
  };
});
