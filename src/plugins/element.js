import Vue from "vue";
import {
  Container,
  Header,
  Main,
  Row,
  Col,
  Dialog,
  Autocomplete,
  Drawer,
  Image,
  Carousel,
  CarouselItem,
  Tree,
  Avatar,
  Timeline,
  TimelineItem,
  Pagination,
  Message,
  MessageBox,
  Input
} from "element-ui";
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Row);
Vue.use(Col);
Vue.use(Dialog);
Vue.use(Autocomplete);
Vue.use(Image);
Vue.use(Drawer);
Vue.use(CarouselItem);
Vue.use(Tree);
Vue.use(Carousel);
Vue.use(Avatar);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Pagination);
Vue.use(Input);
Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
