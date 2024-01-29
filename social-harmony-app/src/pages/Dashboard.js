import React, { useState } from "react";
import Sidebar from "../components/commonComponents/SideBar";
import EventList from "../components/events/eventList";
import StatBar from "../components/commonComponents/StatBar";
import BlogContent from "./contents/sinhalaCulture";
import TagCloud from "./contents/tagCloud";

const Dashboard = () => {
  const [sideBarStatus, setSideBarStatus] = useState(null);
  const [tags, setTags] = useState([]);

  console.log(tags)
  return (
    <div className="App">
      <Sidebar getSideBarStatus={setSideBarStatus} />
      <div className="dashboard">
        <div className="dashboard-content">
          <EventList sideBarStatus={sideBarStatus} />
          <div>
            <TagCloud tags={tags} setTags={setTags} />
            <BlogContent setTags={setTags} />
          </div>
        </div>
      </div>
      <StatBar />
    </div>
  );
};

export default Dashboard;
