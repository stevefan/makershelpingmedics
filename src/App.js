import React, { Component } from 'react';
import Amplify, { API, graphqlOperation, Auth, Hub } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';
import { withAuthenticator } from 'aws-amplify-react';

import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';
import * as subscriptions from './graphql/subscriptions';

import { useFormik } from 'formik';

import './App.css'

import awsconfig from './aws-exports';



Amplify.configure(awsconfig);




class App extends Component {
  render (){

    const ListView = ({ posts }) => (
      <div>
        <h3>All Posts</h3>
          <ul>
            { posts.map(post => <li key={post.id}>{post.title} - {post.type}</li>) }
          </ul>
      </div>
    );


    return (
      <div className="App">
	    <Connect query={graphqlOperation(queries.listPosts)}>
                {({ data: { listPosts }, loading, errors }) => {
			console.log(errors)
                    if (Array.isArray(errors) && errors.length) return (<h3>Error</h3>);
                    if (loading || !listPosts) return (<h3>Loading...</h3>);
                    return (<ListView posts={listPosts.items} /> );
                }}
            </Connect>
      </div>
    )
  }
}

export default withAuthenticator(App, true);
