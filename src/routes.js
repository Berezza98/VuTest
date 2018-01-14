import Main from './components/Main.vue'
import Data from './components/Data.vue'
import About from './components/About.vue';

const routes = [
    {
        path : '/', 
        component : Main
    },
    {
        path : '/data',
        component : Data
    },
    {
        path : '/about',
        component : About
    }
];

export default routes;