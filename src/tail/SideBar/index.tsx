import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { BsPlus, BsGearFill } from 'react-icons/bs';
import { FaTrophy, FaHome, FaCouch, FaGamepad, FaRoute } from 'react-icons/fa';

const SideBar = (props: any) => {
  const { url } = useRouteMatch();

  return (
    <div className="sidebar">
      <SideBarIcon icon={<FaHome size="28" />} url={url} text="home" />
      <Divider />
      <SideBarIcon icon={<FaCouch size="32" />} url={`${url}/lounges`} text="Lounges" />
      <SideBarIcon icon={<FaRoute size="28" />} url={`${url}/adventures`} text="Adventures" />
      <SideBarIcon icon={<FaGamepad size="28" />} url={`${url}/minigames`} text="Mini-games" />
      <SideBarIcon icon={<FaTrophy size="28" />} url={`${url}/leaderboards`} text="Leaderboards" />
      <Divider />
      <SideBarIcon icon={<BsPlus size="22" />} url={`/join`} text="Join a Lounge" />
      <SideBarIcon icon={<BsGearFill size="22" />} url={`/logout`} text="Sign Out" />
    </div>
  );
};

const SideBarIcon = (props: any) => (
  <Link to={props.url} className="sidebar-icon group">
    {props.icon}
    <span className="sidebar-tooltip group-hover:scale-100">{props.text}</span>
    {/* 'tooltip 💡' */}
  </Link>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
