import { Content } from "../types/Content";
export const content: Content[] = [
  {
    title: "Alerts in Recenter",
    texts: [
      <>
        Recenter provides users with alerts designed to enhance productivity and
        offer insightful summaries of their online activity. These alerts fall
        into two main categories:
        <ul>
          <li>Regular Alerts</li>
          <li>Freemium Alerts</li>
        </ul>
      </>,
      <>
        <div>
          <strong>Regular Alerts</strong>
        </div>
        Regular alerts generally indicated with Blue background serve multiple
        purposes:
        <ul>
          <li>
            <strong>Daily Greetings:</strong> Start your day with a motivational
            greeting from Recenter.
          </li>
          <li>
            <strong> Productivity Reminders:</strong> Receive notifications when
            you're spending time on potentially distracting websites. These
            alerts are designed to nudge you back towards more productive
            activities. They occur proactively, without the need for specific
            triggers, embodying a preventative approach to maintaining focus.
          </li>
        </ul>
        Users have the option to temporarily dismiss alerts for certain
        websites. However, if ignored beyond a set duration, as defined in the
        user's settings, these sites may be automatically blocked to ensure
        productivity. For necessary but potentially distracting sites, users can
        either reclassify them as productive or set daily usage limits through
        the Configure panel.
      </>,
    ],
    cards: [
      {
        img: require("../../src/images/documentation/alertInformation/regular_1.png")
          .default,
        title: "First Alert",
        text: "This first alert introduces Recenter to you upon installation.",
        level: 1,
      },
      {
        img: require("../../src/images/documentation/alertInformation/regular_2.png")
          .default,
        title: "Distraction Alert",
        text: "This is level 1 of the distraction alert that will be displayed when users visit distracting websites.",
        level: 1,
      },
      {
        img: require("../../src/images/documentation/alertInformation/regular_3.png")
          .default,
        title: "Site Block Alert",
        text: "This is level 2 of the distraction alert that will be displayed when users have exhausted alert limits on sites.",
        level: 1,
      },
    ],
  },
  {
    title: "Freemium Alerts",
    texts: [
      <>
        Freemium alerts generally indicated in White Background, offer enhanced
        features for premium subscribers:
        <ul>
          <li>
            <strong>Hourly and Daily Summaries:</strong>
            These alerts provide a comprehensive overview of your recent
            activity, both numerically and visually. They include a unique
            creative summary, offering a narrative perspective on how you've
            spent your time.
          </li>
          <li>
            <strong>Access with Auth Key:</strong> Users opting to use Recenter
            provided Auth key can enjoy the creative summary feature without
            additional costs, adding value to the premium experience.
          </li>
        </ul>
        These alert systems are designed to support users in achieving a
        balanced and productive online presence, with options tailored to both
        free and premium subscribers.
      </>,
    ],
    cards: [
      {
        img: require("../../src/images/documentation/alertInformation/freemium_1.png")
          .default,
        title: "Greeting Alert",
        text: "The first alert that users would receive everyday. Includes a freemium summary of the previous day’s progress.",
        level: 0,
      },
      {
        img: require("../../src/images/documentation/alertInformation/freemium_2.png")
          .default,
        title: "Daily Recap",
        text: "This freemium summary provides a breakdown of the previous day’s progress with a narrative description.",
        level: 0,
      },
      {
        img: require("../../src/images/documentation/alertInformation/freemium_3.png")
          .default,
        title: "Hourly Recap",
        text: "This freemium summary provides a breakdown of how the previous hour went, with a narrative description.",
        level: 0,
      },
    ],
  },
];

export const banner = {
  title: "Alerts & Information",
  banner:
    require("../../src/images/documentation/banners/alertsInformation.png")
      .default,
  text: "These proactive indicators help steer you away from distraction towards mindfulness.",
  icon: require("../../src/images/documentation/icons/megaphone.svg").default,
  lastUpdated: "8 / 4 / 2024",
  duration: "3 min read",
};
