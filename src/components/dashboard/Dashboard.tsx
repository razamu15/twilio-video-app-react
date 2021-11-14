import React from 'react';
import SideBar from '../../tail/SideBar';
import LoungeList from './LoungeList';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const tabs = {
  roomsList: 'lounges',
  minigames: 'minigames',
  adventures: 'adventures',
  leaderboards: 'leaderboards',
};

export default function Dashboard() {
  const { path } = useRouteMatch();

  return (
    <div>
      <SideBar />

      <div className="content">
        <Switch>
          <Route exact path={path}>
            <p>this is the main dashbaord</p>
          </Route>
          <Route exact path={`${path}/lounges`}>
            <LoungeList />
          </Route>
          <Route exact path={`${path}/minigames`}>
            <p>
              minigames are solo games you can play for fun anytime. they are just there to help you winddown on a
              friday afternoon, have some quick fun and compete with other colleagues!
            </p>
          </Route>
          <Route exact path={`${path}/adventures`}>
            <p>Adventures are games with progression that you can play over time and advance in. Coming soon!</p>
          </Route>
          <Route exact path={`${path}/leaderboards`}>
            <p>
              this is where you can see your rankings for minigames and adventures and compare them to your colleagues!
              send them a message them whos boss! (at the game obv.)
            </p>
          </Route>
        </Switch>
      </div>
    </div>
  );
}
