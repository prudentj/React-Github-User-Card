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
			followers: [],
			followers_urls: []
		};
	}
	componentDidMount() {
		const base_url = 'https://api.github.com/users/prudentj';
		axios
			.get(base_url)
			.then(res => {
				console.log(res);
				this.setState({
					user: res.data
				});
			})
			.catch(err => console.log(err));
		const array1 = [];
		axios
			.get('https://api.github.com/users/prudentj/followers')
			.then(res => {
				console.log(res.data);
				this.setState({
					followers: res.data
				});
			})
			.catch(err => console.log(err));
		//console.log(this.state.followers_urls);
		//console.log(this.state.followers);
		// this.state.followers_urls.forEach(el => {
		// 	axios
		// 		.get(el)
		// 		.then(eachuser => {
		// 			//console.log(eachuser);
		// 			console('request success');
		// 			this.setState({followers: this.state.followers.concat(eachuser)});
		// 			console.log('Added Follower', this.state.followers);
		// 		})
		// 		.catch(console.log(`error`));
		// });
		// console.log(this.state.followers);
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
				{
					<GitCard
						name={this.state.user.name}
						avatar_url={this.state.user.avatar_url}
						bio={this.state.user.bio}
						location={this.state.user.location}
						followers={this.state.user.followers}
						following={this.state.user.following}
					/>
					/*{this.state.followers.map(el => {
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
				})} */
				}
			</Container>
		);
	}
}

export default App;
