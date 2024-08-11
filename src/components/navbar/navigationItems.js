import {
  FaHome,
  FaInfoCircle,
  FaTools,
  FaEnvelope,
  FaQuestionCircle,
} from "react-icons/fa";

export const navigationItems = [
  {
    titleKey: "homeTitle",
    logo: <FaHome />,
    descriptionKey: "homeDescription",
  },
  {
    titleKey: "aboutTitle",
    logo: <FaInfoCircle />,
    descriptionKey: "aboutDescription",
  },
  {
    titleKey: "servicesTitle",
    logo: <FaTools />,
    descriptionKey: "servicesDescription",
  },
  {
    titleKey: "contactTitle",
    logo: <FaEnvelope />,
    descriptionKey: "contactDescription",
  },
  {
    titleKey: "helpTitle",
    logo: <FaQuestionCircle />,
    descriptionKey: "helpDescription",
  },
];
