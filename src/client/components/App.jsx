import * as React from 'react';
import { Get, Post, Put, Delete, apiRoute } from '../services/index.js';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.getRequest = this.getRequest.bind(this);
    this.setRequest = this.setRequest.bind(this);
  }

  getRequest = async () => {
    try {
      const res = await Get(apiRoute.getRoute('users'));
      console.log(res);
      this.setState({ NFTs: res });
    } catch (e) {
      console.log(e);
    }
  }

  setRequest = async (itemToPost) => {
    try {
      const res = await Post(
        apiRoute.getRoute('users'),
        itemToPost
      );
      console.log(res);
      console.log('Successfully stored in MongoDB: ', itemToPost)
    } catch (e) {
        console.log(e);
    }
  }

  render () {
    return (
      <div>
        <button onClick={this.getRequest} text='sup '/>
      </div>
    );
  }
}