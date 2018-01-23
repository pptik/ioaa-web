import PublicIndex from './components/public/BungkusIndex.vue';
import PublicMasuk from './components/public/BungkusMasuk.vue';
import ControllerHome from './components/public/ControllerHome.vue';
import AdministratorHome from './components/member/administrator/BungkusHome.vue';
import AdministratorUsers from './components/member/administrator/BungkusUsers.vue';
import AdministratorQuestions from './components/member/administrator/BungkusQuestions.vue';
import AdministratorModeration from './components/member/administrator/BungkusModeration.vue';

export default [
  {path:'/',component: PublicIndex},
  {path:'/login',component: PublicMasuk},
  {path:'/home', component: ControllerHome},
  {path:'/home/administrator', component: AdministratorHome},
  {path:'/home/team_leader', component: ControllerHome},
  {path:'/home/jury', component: ControllerHome},
  {path:'/home/participant', component: ControllerHome},
  {path:'/administrator/users', component: AdministratorUsers},
  {path:'/administrator/questions', component: AdministratorQuestions},
  {path:'/administrator/moderation', component: AdministratorModeration},
  {path:'/administrator/grades', component: ControllerHome},
  {path:'/administrator/accessing', component: ControllerHome},
  {path:'/administrator/olympiad_time', component: ControllerHome}
]
