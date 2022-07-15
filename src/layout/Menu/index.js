import React from "react";
import clsx from "clsx";
import {
  Analytics,
  AudioLibrary,
  Comments,
  Content,
  CopyRight,
  Customization,
  Dashboard,
  Monetization,
  Playlists,
  Subtitles,
  Settings,
  Feedback,
} from "icons";
import { TabsKey } from "constants";
import classes from "./index.module.scss";

const menu = [
  {
    icon: Dashboard,
    name: "Dashboard",
    key: TabsKey.Dashboard,
  },
  {
    icon: Content,
    name: "Content",
    key: TabsKey.Content,
  },
  {
    icon: Playlists,
    name: "Playlists",
    key: TabsKey.Playlists,
  },
  {
    icon: Analytics,
    name: "Analytics",
    key: TabsKey.Analytics,
  },
  {
    icon: Comments,
    name: "Comments",
    key: TabsKey.Comments,
  },
  {
    icon: Subtitles,
    name: "Subtitles",
    key: TabsKey.Subtitles,
  },
  {
    icon: CopyRight,
    name: "Copyright",
    key: TabsKey.CopyRight,
  },
  {
    icon: Monetization,
    name: "Monetization",
    key: TabsKey.Monetization,
  },
  {
    icon: Customization,
    name: "Customization",
    key: TabsKey.Customization,
  },
  {
    icon: AudioLibrary,
    name: "Audio library",
    key: TabsKey.AudioLibrary,
  },
];

const bottomMenu = [
  {
    icon: Settings,
    name: "Dashboard",
    key: TabsKey.Settings,
  },
  {
    icon: Feedback,
    name: "Content",
    key: TabsKey.Feedback,
  },
];

function MenuItem(props) {
  const { data, selected, onClick } = props;
  return (
    <div
      className={clsx(
        classes.menuItemContainer,
        selected && classes.selectedMenuItem
      )}
      onClick={onClick}
    >
      <div className={classes.icon}>
        <data.icon />
      </div>
      <div className={classes.menuName}>{data.name}</div>
    </div>
  );
}

function Avatar() {
  return (
    <div className={classes.avatarContainer}>
      <div className={classes.avatarWrapper}>
        <img src="./images/pain.jpeg" alt="Avatar" className={classes.avatar} />
      </div>
      <div className={classes.title}>Your channel</div>
      <div className={classes.description}>The art of coding</div>
    </div>
  );
}

export default function App(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <div className={classes.container}>
      <div className={classes.rightContainer}>
        <Avatar />
        <div className={classes.topContainer}>
          {menu.map((item) => (
            <MenuItem
              data={item}
              selected={item.key === currentTab}
              onClick={() => setCurrentTab(item.key)}
            />
          ))}
        </div>
        <div className={classes.bottomContainer}>
          {bottomMenu.map((item) => (
            <MenuItem
              data={item}
              selected={item.key === currentTab}
              onClick={() => {}}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
