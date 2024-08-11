import Image from "next/image";
import { translate } from "@/utils/translate";

const NavHeader = ({ language }) => (
  <header className="w-full flex items-center justify-between">
    <div className="flex items-center gap-2">
      <Image
        src="/avatar.webp"
        alt="Logo"
        width="25"
        height="25"
        className="rounded-full bg-white"
      />
      <h2 className="text-lg font-semibold text-center">
        {translate("websiteTitle", language)}
      </h2>
    </div>
    <Image
      src="/avatar.webp"
      alt="Logo"
      width="50"
      height="50"
      className="rounded-full bg-white"
    />
  </header>
);

export default NavHeader;
