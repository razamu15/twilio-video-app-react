import React, { useCallback } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FaTrophy, FaHome, FaCouch, FaGamepad, FaRoute, FaSignOutAlt, FaPlus } from 'react-icons/fa';
import { useAppState } from '../../state';

const SideBar = (props: any) => {
  const { url } = useRouteMatch();
  const { user, signOut } = useAppState();

  const handleSignOut = useCallback(() => {
    signOut?.();
  }, [signOut]);

  return (
    <div className="sidebar">
      <SideBarIcon icon={<FaHome size="28" />} url={url} text="home" />
      <Divider />
      <SideBarIcon icon={<FaCouch size="32" />} url={`${url}/lounges`} text="Lounges" />
      <SideBarIcon icon={<FaRoute size="28" />} url={`${url}/adventures`} text="Adventures" />
      <SideBarIcon icon={<FaGamepad size="28" />} url={`${url}/minigames`} text="Mini-games" />
      <SideBarIcon icon={<FaTrophy size="28" />} url={`${url}/leaderboards`} text="Leaderboards" />
      <Divider />
      <SideBarIcon icon={<FaPlus size="28" />} url={`/join`} text="Join a Lounge" />
      <div className="sidebar-icon group" onClick={handleSignOut}>
        <FaSignOutAlt size="28" />
        <span className="sidebar-tooltip group-hover:scale-100">Logout</span>
      </div>
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
