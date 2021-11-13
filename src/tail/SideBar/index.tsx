import React from 'react';
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const SideBar = (props: any) => {
  return (
    <div className="mine">
      <SideBarIcon icon={<FaFire size="28" />} />
      <Divider />
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} />
      <SideBarIcon icon={<FaPoo size="20" />} />
      <Divider />
      <SideBarIcon icon={<BsGearFill size="22" />} />
    </div>
  );
};

const SideBarIcon = (props: any) => (
  <div className="sidebar-icon group">
    {props.icon}
    <span className="sidebar-tooltip group-hover:scale-100">{props.text || 'tooltip 💡'}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
