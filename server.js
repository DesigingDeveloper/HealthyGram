import { createServer } from 'http'; 
import next from 'next'; 
import routes from './routes'; 
// This is needed for Next-routes to work 
// Next-routes is used to route user to specified URLs 
const app = next({ 
    dev: process.env.NODE_ENV !== 'production' 
}); 
const handler = routes.getRequestHandler(app); 
app.prepare().then(() => { 
    createServer(handler).listen(3000, (err) => { 
        if(err) throw err; 
        console.log('Ready on localhost:3000'); 
    }); 
});