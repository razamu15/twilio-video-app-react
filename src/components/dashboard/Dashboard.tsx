import React from 'react';
import SideBar from '../../tail/SideBar';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <>
      <SideBar />
      <Link to={'/join'}>join room by name</Link>
    </>
  );
}
