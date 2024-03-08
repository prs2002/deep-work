import { useEffect, useState } from "react";
import "./App.scss";
import GettingStarted from "./components/GettingStarted";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import WebsiteList from "./components/WebsiteList";
import Features from "./components/Features";
import FinalSection from "./components/FinalSection";
import Footer from "./components/Footer";

interface FeatureItem {
  type: number;
  image: string;
  feature: string;
  title: JSX.Element | string;
  description: string;
}

export default function App() {
  const [features, setFeatures] = useState<FeatureItem[]>([
    {
      type: 1,
      image: "",
      feature: "",
      title: <span></span>,
      description: "",
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      setFeatures([
        {
          type: 0,
          image: (await import("../../images/features/1.png")).default,
          feature: "Improved Time Management",
          title: (
            <>
              <span>Insightful Analytics for</span> Self-Improvement
            </>
          ),
          description:
            "Unlock a deeper understanding of your web habits with analytics designed to foster self-improvement",
        },
        {
          type: 1,
          image: (await import("../../images/features/2.png")).default,
          feature: "Take Control of Your Workflow",
          title: (
            <>
              <span>Customized Alerts For</span> Mindful browsing
            </>
          ),
          description:
            "Personalize alert intervals to steer you away from distractions, keeping your focus intact.",
        },
        {
          type: 0,
          image: (await import("../../images/features/3.png")).default,
          feature: "Filter What's Important",
          title: (
            <>
              Adaptive<span> Website Categorization</span>
            </>
          ),
          description:
            "Effortlessly navigate the web with sites pre-categorized for productivity, with the flexibility to customize your list.",
        },
        {
          type: 1,
          image: (await import("../../images/features/4.png")).default,
          feature: "Tailor To Your Goals",
          title: (
            <>
              Customizable<span> Focus Modes</span>
            </>
          ),
          description:
            "Shape your browsing with customizable focus modes on distracting sites for when its needed.",
        },
        {
          type: 0,
          image: (await import("../../images/features/5.png")).default,
          feature: "Overcome Procrastination",
          title: (
            <>
              Proactive<span> Guidance</span>
            </>
          ),
          description:
            "Stay ahead of distractions with proactive alerts, guiding you back to focus before you stray.",
        },
        {
          type: 1,
          image: (await import("../../images/features/6.png")).default,
          feature: "Every Small Win Counts",
          title: (
            <>
              Celebrate With <span> Badges</span>
            </>
          ),
          description:
            "Transform productivity into a rewarding game with badges and achievements for your focus milestones.",
        },
        {
          type: 0,
          image: (await import("../../images/features/7.png")).default,
          feature: "Setup Once, Focus Without Interruptions",
          title: (
            <>
              <span>Simplicity and</span> Ease of Use
            </>
          ),
          description:
            "Effortlessly integrate Recenter with a simple setup, making enhanced focus just a few clicks away",
        },
      ]);
    }
    fetchData();
  }, []);

  return (
    <div className="app_container">
      <div className="app_container__orange_line"></div>
      <Navbar />
      <MainSection></MainSection>
      <WebsiteList></WebsiteList>
      <GettingStarted></GettingStarted>
      {features.map((feature, index) => {
        return (
          <Features
            key={index}
            type={feature.type}
            image={feature.image}
            feature={feature.feature}
            title={feature.title}
            description={feature.description}
          ></Features>
        );
      })}
      <FinalSection></FinalSection>
      <Footer></Footer>
    </div>
  );
}
