import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {

  state = {
    user: [],
    followers: []
  }

  fetchUser = () => {
    axios.get('https://api.github.com/users/BWSIEVERT')
    .then (res => {
      this.setState({
        user: res.data
      })
    })
    .catch( err => {
      console.log(err);
    })
  }

  fetchFollowers = () => {
    axios.get('https://api.github.com/users/BWSIEVERT/followers')
    .then (res => {
      console.log(res.data)
      this.setState({
        followers: res.data
      })
    })
    .catch (err => {
      console.log(err);
    })
  }

  componentDidMount() {
    this.fetchUser();
    this.fetchFollowers();
  }


  render() {
    return (
      <>
      <div className='UserCard'>
        <img src = {this.state.user.avatar_url} alt = 'User Avatar' />
        <h1 className='name'>{this.state.user.name}</h1>
        <p className='username'>{this.state.user.login}</p>
        <p className='bio'>{this.state.user.bio}</p>
        <p className='location'>{this.state.user.location}</p>
        <a href='/'>Twitter: {this.state.user.twitter_username}</a>
        <p className='followers'>Followers: {this.state.user.followers}</p>
      </div>
      <div className='UserCardInfo'>
        <div className='Followers'>
          <h4>My Followers:</h4>
          {
            this.state.followers.map(item => {
              return <p>{item.login}</p>
            })
          }
        </div>

      </div>
      </>
    )
  }
}

export default App;
