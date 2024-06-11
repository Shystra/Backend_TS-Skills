
import { ExpressAdapter } from './infra/express'

console.log('Server is starting...')
const httpServer = new ExpressAdapter();
const port = (process.env.PORT_SERVER as unknown as number) || 3000;

httpServer.listen(port);
