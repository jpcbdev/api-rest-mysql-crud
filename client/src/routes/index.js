import VIndex from '@/components/VIndex.vue';
import VEmployee from "@/components/VEmployees.vue";
import VCompanies from "@/components/VCompanies.vue";
import VCredits from '@/components/VCredits.vue';
const routes = [{
        path: '/',
        name: 'home',
        component: VIndex
    },
    {
        path: '/employees',
        name: 'employees',
        component: VEmployee
    },
    {
        path: '/companies',
        name: 'companies',
        component: VCompanies
    },
    {
        path: '/credits',
        name: 'credits',
        component: VCredits
    }
];
export default routes;