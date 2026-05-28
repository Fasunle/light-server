import router from '@/router';
import { createServer } from 'http';
import { config } from 'dotenv';

// Load environment variables from .env file
config();
const PORT = process.env.PORT || 3000;

createServer((req, res) => {
  router.lookup(req, res);
}).listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
