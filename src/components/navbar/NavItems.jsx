import { translate } from "@/utils/translate";

const NavItems = ({ language, navigationItems }) => (
  <section className="w-full">
    <div className="nav-section">
      <h4 className="nav-section-title">{translate("items", language)}</h4>
      <span className="nav-section-details">
        {translate("details", language)}
      </span>
    </div>
    <div className="flex flex-wrap gap-4">
      {navigationItems.map((item, index) => (
        <article
          key={index}
          className="bg-light-bg-items dark:bg-dark-bg-items rounded-xl flex flex-col p-4 flex-grow basis-[calc(20%-1rem)]"
        >
          <div className="text-xl mt-2 mb-5 flex-grow">{item.logo}</div>
          <h6 className="text-lg font-medium">
            {translate(item.titleKey, language)}
          </h6>
          <p className="text-sm font-light">
            {translate(item.descriptionKey, language)}
          </p>
        </article>
      ))}
    </div>
  </section>
);

export default NavItems;
