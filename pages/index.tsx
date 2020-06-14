import React from 'react';
import Layout from '../components/Layout'
import 'styles/base.scss';
import Amplify, { Auth, Hub } from 'aws-amplify';
import awsconfig from '../aws-exports.js';

import { AmplifySignOut } from '@aws-amplify/ui-react';
import Header from 'components/common/Header';

Amplify.configure(awsconfig);

const IndexPage = () => {

  console.log(awsconfig);
  const [ user, setUser ] = React.useState<any>(null);

  React.useEffect(()=>{
    Hub.listen("auth", ({ payload: { event, data } }) => {
      console.log(event);
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
    Auth.currentAuthenticatedUser().then((res)=>{
      setUser(res);
      console.log('login...');
    }).catch((e)=>{
      console.log(e);
      console.log("Not signed in");
    })
  },[]);

  function oauth(provider: string){
    Auth.federatedSignIn({ customProvider: provider }).then((res)=>{
      console.log(res);
    })

  }
  return (
    <Layout title={`!Squaaat (${process.env.STAGE})`}>
      <Header />

      <main style={{marginTop: 72}}>
        <div style={{background:'red'}}>
          bbb
        </div>
      </main>
      <br/>
      <br/>

      <br/>

      {true && <>
        {user === null && <p style={{textAlign: 'center'}}>
          <button onClick={() => oauth('Google')}>Open Google</button>
          <button disabled onClick={() => Auth.federatedSignIn({ customProvider: "Facebook"})}>Open Facebook</button>
          <AmplifySignOut />

        </p>}
        {
          user && 
          <div style={{maxWidth: '768px', margin: 'auto'}}>
            <p>{user.username}</p>
            <AmplifySignOut />

          </div>
        }
      </>}
      <p>
        {process.env.AWS_USER_POOLS_ID}
      </p>
      <p>
        {process.env.AWS_COGNITO_IDENTITY_POOL_ID}
      </p>
      <p>
        {process.env.AWS_USER_POOLS_WEB_CLIENT_ID}
      </p>
      <p>
        {
          JSON.stringify(process.env.OAUTH)
        }
      </p>

    </Layout>
  )

}

export default (IndexPage);
