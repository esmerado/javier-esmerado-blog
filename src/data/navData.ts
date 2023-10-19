import { translations } from "../translations/blog.translations";

interface NavDataI {
  name: string;
  path: string;
}

const navData: NavDataI[] = [
  {
    name: translations.NAVIGATION.ABOUT,
    path: "/about",
  },
  {
    name: translations.NAVIGATION.BLOG,
    path: "/blog",
  },
];

export default navData;
