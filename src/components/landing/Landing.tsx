import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
      <p> oh wow </p>
      <Link to={'/login'}>login</Link>
    </div>
  );
}
