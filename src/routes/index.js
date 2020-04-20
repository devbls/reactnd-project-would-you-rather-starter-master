import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './RouteWrapper';

import Login from '../pages/Login';
import Questions from '../pages/Questions';
import QuestionDetail from '../pages/QuestionDetail';
import NewQuestion from '../pages/NewQuestion';
import Leaderboard from '../pages/Leaderboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/questions" component={Questions} isPrivate />
      <Route
        path="/questions/:question_id"
        component={QuestionDetail}
        isPrivate
      />
      <Route path="/leaderboard" component={NewQuestion} isPrivate />
      <Route path="/add" component={Leaderboard} isPrivate />
    </Switch>
  );
}
