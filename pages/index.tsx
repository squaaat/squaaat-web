import React from 'react';
import Layout from '../components/Layout'
import 'styles/base.scss';
import Amplify, { Auth, Hub } from 'aws-amplify';
import awsconfig from '../aws-exports.js';

import { AmplifySignOut } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

const IndexPage = () => {
  const [ user, setUser ] = React.useState<any>(null);

  React.useEffect(()=>{
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          console.log(data);
          setUser(data);
          break;
        case "signOut":
          setUser(null);
          break;
      }
    });
  },[]);
  return (
    <Layout title="!SQUAAAT">
      <h1 style={{fontSize: '64pt', textAlign:'center', letterSpacing: '4px'}}>!SQUAAAT</h1>
      {user === null && <p style={{textAlign: 'center'}}>
        <button onClick={() => Auth.federatedSignIn({ customProvider: "Google"})}>Open Google</button>
      </p>}
      {
        user && 
        <div style={{maxWidth: '768px', margin: 'auto'}}>
          <p>{user.username}</p>
          <AmplifySignOut />

        </div>
      }

    </Layout>
  )

}

export default (IndexPage);
