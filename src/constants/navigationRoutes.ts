import Translate from "i18n/messages/translate";
import { Home } from "pages/Home";
import { Info } from "pages/Info";

const navigationRoutes = [
  { path: "/", title: Translate("home"), component: Home },
  { path: "/info", title: Translate("info"), component: Info },
];

export { navigationRoutes };
