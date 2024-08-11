import { useTheme } from "@/hooks/useTheme";
import { translate } from "@/utils/translate";

const NavOptions = ({ language, switchLanguage, navigationOptions }) => {
  const { isDarkMode, switchTheme } = useTheme();

  const handleOptionClick = (title) => {
    if (title === translate("theme", language)) {
      switchTheme();
    } else if (title === translate("language", language)) {
      switchLanguage();
    }
  };

  return (
    <section className="w-full">
      <div className="nav-section">
        <h4 className="nav-section-title">{translate("options", language)}</h4>
        <span className="nav-section-details">
          {translate("details", language)}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {navigationOptions.map((option, index) => (
          <article
            key={index}
            className="flex items-center justify-between bg-light-bg-items dark:bg-dark-bg-items rounded-xl p-2"
          >
            <div className="flex items-center gap-2">
              <div>{option.logo}</div>
              <h6>{option.title}</h6>
            </div>
            <button
              data-option={option.title}
              className="w-12 h-6 flex items-center rounded-full bg-gray-400 dark:bg-gray-600"
              onClick={() => handleOptionClick(option.title)}
            >
              <div
                className={`bg-white dark:bg-gray-800 w-6 h-6 rounded-full transition-transform ${
                  option.title === translate("theme", language) && isDarkMode
                    ? "translate-x-6"
                    : ""
                } ${
                  option.title === translate("language", language) &&
                  language === "fr"
                    ? "translate-x-6"
                    : ""
                }`}
              />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default NavOptions;
