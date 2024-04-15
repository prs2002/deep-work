import { Content } from "../types/Content";
export const content: Content[] = [
  {
    title: "The Home Page",
    texts: [
      <>
        The home page is designed to give users a comprehensive analysis of
        their daily activities. It displays the amount of time spent on
        productive activities versus non-productive ones. Additionally, it
        provides a detailed breakdown of the time spent on each visited website.
      </>,
      <>
        Freemium alerts, including Hourly and Daily summaries, are also featured
        on the home page. These summaries offer a brief yet insightful look into
        how users have spent their time over the last hour or day, combining
        creative narratives with precise data for an engaging overview.
      </>,
    ],
    cards: [
      {
        img: require("../../src/images/documentation/essentials/home_1.png")
          .default,
        title: "Landing Section",
        text: "Provides an abstract overview of how the day is being spent",
        level: 0,
      },
      {
        img: require("../../src/images/documentation/essentials/home_2.png")
          .default,
        title: "Usage Report",
        text: "An Overall breakdown of the chosen data sDay, month, week etc.",
        level: 0,
      },
      {
        img: require("../../src/images/documentation/essentials/home_3.png")
          .default,
        title: "Visited Websites",
        text: "Further Breakdown of time spent in each website with categorization.",
        level: 0,
      },
      {
        img: require("../../src/images/documentation/essentials/home_4.png")
          .default,
        title: "Hourly Updates",
        text: "Part of the freemium alerts, displayed every hour with summary if on premium. ",
        level: 1,
      },
      {
        img: require("../../src/images/documentation/essentials/home_5.png")
          .default,
        title: "Daily Updates",
        text: "Part of the freemium alerts, displayed every morning with summary if on premium.",
        level: 1,
      },
    ],
  },
  {
    title: "Configure Page",
    texts: [
      <>
        <div>
          <strong>Websites Section</strong>
        </div>
        In the "Websites" section of the Configure page, users can view a list
        of all visited websites and see how they've been categorized:
        productive, non-productive, or unsure. "Unsure" websites are those not
        automatically tagged by our system and require manual categorization by
        the user. This can be done in the "Tag Websites" area.
      </>,
      <>
        <div>
          <strong>Settings Section</strong>
        </div>
        The Settings section allows users to tailor the Recenter app to their
        personal and work preferences. Whether you work weekends or prefer a
        less intrusive form of assistance, the settings offer various options to
        suit different needs. Key features include:
        <ul>
          <li>
            <strong>Proactive Settings:</strong>
            Adjust these to control how actively Recenter helps you stay
            focused.
          </li>
          <li>
            <strong>Auth Key:</strong> Enter your ChatGPT authentication key
            here to ensure your data remains private.
          </li>
          <li>
            <strong>Alert Timer:</strong> Set limits on website usage with the
            alert timer feature to manage your time more effectively.
          </li>
        </ul>
      </>,
    ],
    cards: [
      {
        img: require("../../src/images/documentation/essentials/configure_1.png")
          .default,
        title: "Tag Websites",
        text: "Add Websites and categorize them as per your needs.",
        level: 0,
      },
      {
        img: require("../../src/images/documentation/essentials/configure_2.png")
          .default,
        title: "Untagged Websites",
        text: "These are sites that require manual tagging aside of GPT.",
        level: 0,
      },
      {
        img: require("../../src/images/documentation/essentials/configure_3.png")
          .default,
        title: "Websites List",
        text: "List of all the websites you have visited so far.",
        level: 0,
      },
      {
        img: require("../../src/images/documentation/essentials/configure_4.png")
          .default,
        title: "General Settings",
        text: "Extension settings",
        level: 1,
      },
      {
        img: require("../../src/images/documentation/essentials/configure_5.png")
          .default,
        title: "Proactive Settings & Auth",
        text: "Enabling Proactive settings would give access to premium features, including option to add your own key.",
        level: 1,
      },
      {
        img: require("../../src/images/documentation/essentials/configure_6.png")
          .default,
        title: "Alert Timer",
        text: "This setting let's you choose the duration and violations for the alerts after which the site will be blocked.",
        level: 1,
      },
    ],
  },
  {
    title: "Profile Page",
    texts: [
      <>
        <div>
          <strong>Achievement Badges</strong>
        </div>
        On the Profile page, users can view their collection of achievement
        badges. These badges are earned through various accomplishments and
        milestones achieved while using the app.
      </>,
      <>
        <div>
          <strong>Self-Auth Token Usage</strong>
        </div>
        For users using their own API key, the Profile page also displays their
        token usage. This feature helps monitor how they're utilizing their API.
      </>,
    ],
    cards: [
      {
        img: require("../../src/images/documentation/essentials/profile_1.png")
          .default,
        title: "Achievements",
        text: "Collect badges for reaching your Productivity goals.",
        level: 1,
      },
      {
        img: require("../../src/images/documentation/essentials/profile_2.png")
          .default,
        title: "API Usage",
        text: "API usage breakdown for users using their own API Keys.",
        level: 1,
      },
    ],
  },
];

export const banner = {
  title: "Essentials",
  banner: require("../../src/images/documentation/banners/essentials.png").default,
  text: "A clear and comprehensive walkthrough to understanding the essentials in Recenter",
  icon: require("../../src/images/documentation/icons/stacks.svg").default,
  lastUpdated: "8 / 4 / 2024",
  duration: "3 min read",
};
