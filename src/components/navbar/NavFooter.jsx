import { translate } from "@/utils/translate";

const NavFooter = ({ language }) => (
  <footer className="w-full text-center">
    {translate("footerText", language)}
  </footer>
);

export default NavFooter;
