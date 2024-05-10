import { Link } from "react-router-dom";
import "./QuickActionsBox.scss";
import { FaAngleRight } from "react-icons/fa";

export default function QuickActionsBox() {
  const quickActions = [
    { action: "Tag a website", path: "/configure?type=websites" },
    { action: "Change Alerts", path: "/configure?type=settings" },
    { action: "Achievements", path: "/profile" },
  ];

  return (
    <div className="quick_actions_box">
      <div className="quick_actions_box__content">
        {quickActions.map((action, index) => {
          return (
            <Link
              to={action.path}
              className="quick_actions_box__content__action"
              key={index}
            >
              <p>{action.action}</p>
              <div className="quick_actions_box__content__action__icon">
                <FaAngleRight></FaAngleRight>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
