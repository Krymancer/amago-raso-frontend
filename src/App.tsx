import type {Component} from 'solid-js';
import {Routes, Route} from '@solidjs/router';
import {createClient, Provider} from 'solid-urql';

import Home from '@pages/Main';
import Post from '@pages/Post';
import About from '@pages/About';
import Lucky from '@pages/Lucky';

import {token} from '@api/token';

const client = createClient({
  url: 'https://amago-raso-backend-production.up.railway.app/graphql',
  fetchOptions: () => ({
    headers: {authorization: token.Authorization},
  }),
});

const App: Component = () => {
  return (
    <Provider value={client}>
      <div class="latte min-h-screen bg-surface0">
        <div class="bg-surface0 text-text overflow-hidden w-fit xl:m-auto xl:min-w-[900px] m-auto">
          <Routes>
            <Route path="/" component={Home} />
            <Route path="/post/:id" component={Post} />
            <Route path="/about" component={About} />
            <Route path="/lucky" component={Lucky} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
};

export default App;
