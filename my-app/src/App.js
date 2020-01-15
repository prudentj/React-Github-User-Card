import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import GitCard from './components/GitCard';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			user: {},
			followers: []
		};
	}
	componentDidMount() {
		axios
			.get('https://api.github.com/users/prudentj')
			.then(res => {
				this.setState({
					user: res.data
				});
				console.log('State is:');
			})
			.catch(err => console.log(err));
		axios.get('https://api.github.com/users/prudentj/following').then(users => {
			console.log(users);
			users.data.forEach(el => {
				//followersArray.push(el.url);
				console.log(el.url);
				axios
					.get(el.url)
					.then(eachuser => {
						//console.log(eachuser);

						this.setState({followers: this.state.followers.concat(eachuser)});
						console.log('Added Follower', this.state.followers);
					})
					.catch(console.log(`error`));
			});
		});
	}
	componentWillUnmount() {
		// To avoid memory leaks
		// remove/destroy:
		//    event listeners
		//    subscriptions
		//    timers
		//
		//
	}
	/*
    {this.state.followers.map(el => {
					<GitCard
						name={el.data.name}
						avatar_url={el.data.avatar_url}
						bio={el.data.bio}
						location={el.data.location}
					/>;
				})}
  */
	render() {
		return (
			<Container>
				<GitCard
					name={this.state.user.name}
					avatar_url={this.state.user.avatar_url}
					bio={this.state.user.bio}
					location={this.state.user.location}
					followers={this.state.user.followers}
					following={this.state.user.following}
				/>
				{this.state.followers.map(el => {
					console.log(el);
					return (
						<GitCard
							name={el.state.user.name}
							avatar_url={el.state.user.avatar_url}
							bio={el.state.user.bio}
							location={el.state.user.location}
							followers={el.state.user.followers}
							following={el.state.user.following}
						/>
					);
				})}
				)}
			</Container>
		);
	}
}

export default App;
