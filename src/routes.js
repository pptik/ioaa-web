import PublicIndex from './components/public/BungkusIndex.vue';
import PublicMasuk from './components/public/BungkusMasuk.vue';
import ControllerHome from './components/public/ControllerHome.vue';
import AdministratorHome from './components/member/administrator/BungkusHome.vue';
import AdministratorUsers from './components/member/administrator/BungkusUsers.vue';
import AdministratorQuestions from './components/member/administrator/BungkusQuestions.vue';
import AdministratorQuestionsCreate from './components/member/administrator/BungkusQuestionsCreate.vue';
import AdministratorQuestionsUpdate from './components/member/administrator/BungkusQuestionsUpdate.vue';
import AdministratorModeration from './components/member/administrator/BungkusModeration.vue';
import AdministratorGrades from './components/member/administrator/BungkusGrades.vue';
import AdministratorTimerOlympiad from './components/member/administrator/BungkusTimerOlympiad.vue';
import TeamLeaderHome from './components/member/team_leader/BungkusHome.vue';
import TeamLeaderGrades from './components/member/team_leader/BungkusGrades.vue';
import TeamLeaderModeration from './components/member/team_leader/BungkusModeration.vue';
import TeamLeaderAccessing from './components/member/team_leader/BungkusAccessing.vue';
import TeamLeaderTranslate from './components/member/team_leader/BungkusTranslate.vue';
import TeamLeaderProfile from './components/member/team_leader/BungkusProfile';
import JuryHome from './components/member/jury/BungkusHome.vue';
import JuryGrades from './components/member/jury/BungkusGrades.vue';
import JuryModeration from './components/member/jury/BungkusModeration.vue';
import JuryProfile from './components/member/jury/BungkusProfile.vue';
import JuryAccessing from './components/member/jury/BungkusAccessing.vue';
import JuryTranslate from './components/member/jury/BungkusTranslate.vue';
import ParticipantHome from './components/member/participant/BungkusHome.vue';
import ParticipantProfile from './components/member/participant/BungkusProfile.vue';
import ParticipantQuestions from './components/member/participant/BungkusQuestions.vue';
import ParticipantConstants from './components/member/participant/BungkusConst.vue';

export default [
  {path:'/',component: PublicIndex},
  {path:'/login',component: PublicMasuk},
  {path:'/home', component: ControllerHome},
  {path:'/home/administrator', component: AdministratorHome},
  {path:'/home/team_leader', component: TeamLeaderHome},
  {path:'/home/jury', component: JuryHome},
  {path:'/home/participant', component: ParticipantHome},
  {path:'/administrator/users', component: AdministratorUsers},
  {path:'/administrator/questions', component: AdministratorQuestions},
  {path:'/administrator/questions/create', component: AdministratorQuestionsCreate},
  {path:'/administrator/questions/update', component: AdministratorQuestionsUpdate},
  {path:'/administrator/moderation', component: AdministratorModeration},
  {path:'/administrator/grades', component: AdministratorGrades},
  {path:'/administrator/timer_olympiad', component: AdministratorTimerOlympiad},
  {path:'/team_leader/grades', component: TeamLeaderGrades},
  {path:'/team_leader/moderation', component: TeamLeaderModeration},
  {path:'/team_leader/accessing', component: TeamLeaderAccessing},
  {path:'/team_leader/translate', component: TeamLeaderTranslate},
  {path:'/team_leader/profile', component: TeamLeaderProfile},
  {path:'/jury/grades', component: JuryGrades},
  {path:'/jury/moderation', component: JuryModeration},
  {path:'/jury/profile', component: JuryProfile},
  {path:'/jury/accessing', component: JuryAccessing},
  {path:'/jury/translate', component: JuryTranslate},
  {path:'/participant/profile', component: ParticipantProfile},
  {path:'/participant/questions', component: ParticipantQuestions},
  {path:'/participant/constants', component: ParticipantConstants}
]
