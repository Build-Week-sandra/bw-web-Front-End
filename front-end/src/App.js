import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom'
import { UserContext } from './context/UserContext'

//components
import PrivateRoute from './utils/ProtectedRoute'
import { UserDash } from './components/UserDash'
import styled from 'styled-components'
import EditPost from './components/EditPost'
 
const H1 = styled.h1`
color: #ff5400ff;
`

function App() {
  return (
    <UserContext.Provider value={{}}>
      <Router>
        <div className="App">
          <H1>Super Amazing App on the way</H1>
          <Link to='/login'>Login</Link>
          <br />
          <Link to='/UserDash'>User Dashboard</Link>
          <Switch>
            <PrivateRoute exact path='/UserDash' component={UserDash} />
            <PrivateRoute  path='/editPost/:id' component={EditPost} />
            
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
