import './test.css';

import React from 'react';

import { Link } from 'react-router-dom';

import { Center } from '../../components/contriant/center';
import { Page } from '../../components/contriant/pages';

export function NavTest () {
  return (
    <Page>
      <Center>
        <main>
          <h2>Welcome to the homepage!</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
          <Link to="/home/main">Test main Page</Link>
          <br />
          <Link to="/test/animejs">Test anime.js Page</Link>
          <br />
          <Link to="/test/chartjs">Test chart.js Page</Link>
          <br />
          <Link to="/test/tailwindcss">Test ailwind.css Page</Link>
          <br />
          <Link to="/test/icon">Test icon.css Page</Link>
          <br />
          <Link to="/test/redux">Test redux Page</Link>
          <br />
          <Link to="/auth/login">Test login Page</Link>
          <br />
          <Link to="/auth/logup">Test logup Page</Link>
          <br />
          <Link to="/auth/password">Test forget password Page</Link>
          <br />
          <Link to="/auth/name">Test forget name Page</Link>
          <br />
          <Link to="/input/editor">Test editor</Link>
        </nav>
      </Center>
    </Page>
  )
}
