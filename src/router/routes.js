import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Series from "../pages/Series";

export default [
    {path: '/series', name: 'series', component: Series},
    {path: '/accueil', redirect: '/'},
    {path: '/acceuil', redirect: '/'},
    {path: '/', name: 'home', component: Home},
    {path: '*', name: '404', component: NotFound}
];


