import React from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsGearFill } from 'react-icons/bs';
import { FaTrophy, FaHome, FaCouch, FaGamepad, FaRoute } from 'react-icons/fa';

const SideBar = (props: any) => {
  return (
    <div className="sidebar">
      <SideBarIcon icon={<FaHome size="28" />} url={`/dashboard`} text="home" />
      <Divider />
      <SideBarIcon icon={<FaCouch size="32" />} url={`/dashboard/${props.tabs.roomsList}`} text="lounges" />
      <SideBarIcon icon={<FaRoute size="28" />} url={`/dashboard/${props.tabs.adventures}`} text="adventures" />
      <SideBarIcon icon={<FaGamepad size="28" />} url={`/dashboard/${props.tabs.minigames}`} text="minigames" />
      <SideBarIcon icon={<FaTrophy size="28" />} url={`/dashboard/${props.tabs.leaderboards}`} text="leaderboards" />
      <Divider />
      <SideBarIcon icon={<BsGearFill size="22" />} url={`logout`} text="logout" />
      <SideBarIcon icon={<BsPlus size="22" />} url={`/join`} text="join a room by name" />
    </div>
  );
};

const SideBarIcon = (props: any) => (
  <Link to={props.url} className="sidebar-icon group">
    {props.icon}
    <span className="sidebar-tooltip group-hover:scale-100">{props.text || 'tooltip 💡'}</span>
  </Link>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
