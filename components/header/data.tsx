// components/header/resourcesData.ts

import {
  Book,
  Calendar,
  MessageCircleQuestionMark,
  TreePalm,
  Video,
} from "lucide-react";

export const resourcesData = [
  {
    label: "Blogs",
    href: "/blog",
    icon: <Book color="#39089d" />,
    description:
      "Explore inspiring stories, expert opinions, and product updates.",
  },
  {
    label: "How-to Videos",
    href: "/videos",
    icon: <Video color="#39089d" />,
    description:
      "Quick tutorials to solve challenges and level up your journey.",
  },
  {
    label: "Events",
    href: "/events",
    icon: <Calendar color="#39089d" />,
    description: "Discover workshops, launches happening near you.",
  },
  {
    label: "Success Stories",
    href: "/success-stories",
    icon: <TreePalm />,
    description: "Read how bold ideas became remarkable results.",
  },
  {
    label: "FAQ",
    href: "/faq",
    icon: <MessageCircleQuestionMark color="#39089d" />,
    description: "Find clear answers to your most common questions.",
  },

  {
    label: "Contact Us",
    href: "/contact",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="20"
        viewBox="0 0 19 20"
        fill="none"
      >
        <path
          d="M1.88574 7.75229C1.88574 4.34847 1.88574 2.64611 2.94362 1.58913C4.00151 0.532153 5.70297 0.53125 9.10678 0.53125H10.4607C13.8645 0.53125 15.5669 0.53125 16.6239 1.58913C17.6809 2.64702 17.6818 4.34847 17.6818 7.75229V11.3628C17.6818 14.7666 17.6818 16.469 16.6239 17.526C15.566 18.583 13.8645 18.5839 10.4607 18.5839H9.10678C5.70297 18.5839 4.0006 18.5839 2.94362 17.526C1.88664 16.4681 1.88574 14.7666 1.88574 11.3628V7.75229Z"
          stroke="#39089D"
          strokeWidth="1.06192"
        />
        <path
          d="M7.12073 9.53374C6.73531 8.86219 6.54937 8.31429 6.43744 7.75827C6.27136 6.93688 6.65136 6.13354 7.27959 5.62084C7.54587 5.40421 7.85006 5.47823 8.00711 5.76075L8.36185 6.3971C8.64257 6.90077 8.78338 7.15351 8.75539 7.42069C8.72832 7.68787 8.53876 7.9054 8.15966 8.34137L7.12073 9.53374ZM7.12073 9.53374C7.93319 10.9259 9.09173 12.0845 10.4839 12.8969M10.4839 12.8969C11.1555 13.2824 11.7034 13.4683 12.2594 13.5802C13.0808 13.7463 13.8841 13.3663 14.3968 12.7381C14.6135 12.4718 14.5394 12.1676 14.2569 12.0106L13.6215 11.6558C13.116 11.3751 12.8642 11.2343 12.597 11.2623C12.3298 11.2894 12.1123 11.4789 11.6763 11.858L10.4839 12.8969Z"
          stroke="#39089D"
          strokeWidth="1.06192"
          strokeLinejoin="round"
        />
        <path
          d="M2.78783 4.14258H0.53125M2.78783 9.55836H0.53125M2.78783 14.9741H0.53125"
          stroke="#39089D"
          strokeWidth="1.06192"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    description:
      "Whether you need support or want to collaborate, we’re here for you.",
  },
];
