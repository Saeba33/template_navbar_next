import { translate } from "@/utils/translate";
import { IoLanguageOutline } from "react-icons/io5";
import { WiMoonAltFirstQuarter } from "react-icons/wi";

export const navigationOptions = (language) => [
  {
    title: translate("theme", language),
    logo: <WiMoonAltFirstQuarter />,
  },
  {
    title: translate("language", language),
    logo: <IoLanguageOutline />,
  },
];
