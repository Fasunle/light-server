import { greeting } from '@/handlers/greeting';
import { welcome } from '@/handlers/welcome';
import findMyWay from 'find-my-way';
import { send } from 'micro';

const router = findMyWay({
  defaultRoute: (req, res) => {
    send(res, 404, { error: `Route ${req.url} not found` });
  },
});

// Register routes
router.get('/', welcome);
router.get('/api/greeting', greeting);

export default router;
