import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';


const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-whn05zj00e031e4o.us.auth0.com"
    clientId="v5fYWUCAF7WiKFUG6CbuW73FNtqxqbnU"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  </Auth0Provider>,
);