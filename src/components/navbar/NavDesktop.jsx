"use client";

import { useResizableNav } from "@/hooks/useResizableNav";
import { useLanguage } from "@/hooks/useLanguage";
import { navigationItems } from "./navigationItems";
import { navigationOptions } from "./navigationOptions";
import NavHeader from "./NavHeader";
import NavOptions from "./NavOptions";
import NavItems from "./NavItems";
import NavFooter from "./NavFooter";

export default function NavDesktop() {
  const { width, navRef, handleMouseDown } = useResizableNav();
  const { language, switchLanguage } = useLanguage();
  const translatedOptions = navigationOptions(language);

  return (
    <div className="relative flex">
      <nav
        ref={navRef}
        className="min-h-calc m-2 p-4 rounded-xl bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text backdrop-blur-lg border border-white/10 border-r-white/30 hover:border-r-white/50 shadow-lg flex flex-col items-center gap-10 justify-between relative"
        style={{ width: `${width}px` }}
      >
        <NavHeader language={language} />
        <NavOptions
          language={language}
          switchLanguage={switchLanguage}
          navigationOptions={translatedOptions}
        />
        <NavItems language={language} navigationItems={navigationItems} />
        <NavFooter language={language} />
        <div
          className="absolute top-0 right-0 w-[5px] h-full cursor-ew-resize rounded-tr-xl rounded-br-xl"
          onMouseDown={handleMouseDown}
        />
      </nav>
    </div>
  );
}
