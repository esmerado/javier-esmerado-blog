// Utils
import { slugify } from "../ts/utils";
// Translations
import { translations } from "../translations/blog.translations";

export const categoriesData = [
  {
    params: { category: slugify(translations.CATEGORIES.DATA_SCIENCE) },
    props: { name: translations.CATEGORIES.DATA_SCIENCE },
  },
];
