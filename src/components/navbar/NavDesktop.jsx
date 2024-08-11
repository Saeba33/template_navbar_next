"use client";

import { useResizableNav } from "@/hooks/useResizableNav";
import Image from "next/image";
import { navigationItems } from "./navigationItems";
import { navigationOptions } from "./navigationOptions";

export default function NavDesktop() {
  const { width, navRef, handleMouseDown } = useResizableNav();

  return (
    <div className="relative flex">
      <nav
        ref={navRef}
        className="min-h-calc m-2 p-4 rounded-xl bg-nav-bg backdrop-blur-lg border border-white/10  border-r-white/30  hover:border-r-white/50 shadow-lg flex flex-col items-center gap-10 justify-between relative"
        style={{ width: `${width}px` }}
      >
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
              TitleOfMyWebsite
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

        <section className="w-full">
          <div className="nav-section">
            <h4 className="nav-section-title">Options</h4>
            <span className="nav-section-details">Details</span>
          </div>
          <div className="flex flex-col gap-2">
            {navigationOptions.map((option, index) => (
              <article
                key={index}
                className="flex items-center justify-between bg-nav-bg-items rounded-xl p-2"
              >
                <div className="flex items-center gap-2">
                  <div>{option.logo}</div>
                  <h6>{option.title}</h6>
                </div>
                <button>Interrupteur</button>
              </article>
            ))}
          </div>
        </section>

        <section className="w-full">
          <div className="nav-section">
            <h4 className="nav-section-title">Items</h4>
            <span className="nav-section-details">Details</span>
          </div>
          <div className="flex flex-wrap gap-4">
            {navigationItems.map((item, index) => (
              <article
                key={index}
                className="bg-nav-bg-items rounded-xl flex flex-col p-4 flex-grow basis-[calc(20%-1rem)]"
              >
                <div className="text-xl mt-2 mb-5 flex-grow">{item.logo}</div>
                <h6 className="text-lg font-medium">{item.title}</h6>
                <p className="text-sm font-light">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="nav-footer">© My Footer</footer>

        <div
          className="absolute top-0 right-0 w-[5px] h-full cursor-ew-resize rounded-tr-xl rounded-br-xl"
          onMouseDown={handleMouseDown}
        />
      </nav>
    </div>
  );
}
