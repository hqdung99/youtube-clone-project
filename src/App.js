import React from "react";
import { TabsKey } from "constants";
import Menu from "layout/Menu";

export default function App() {
  const [currentTab, setCurrentTab] = React.useState(TabsKey.Dashboard);

  return (
    <div>
      <Menu currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </div>
  );
}
