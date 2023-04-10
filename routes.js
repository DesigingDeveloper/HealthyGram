import Routes from 'next-routes'; 
const routes = Routes(); 
routes 
    .add('/record/:address', '/details') 
    .add('/doctor/:address', '/details-doctor'); 
export default routes;