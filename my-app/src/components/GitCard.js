import React from 'react';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
const useStyles = makeStyles({
	card: {
		minWidth: 275
	},
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	},
	large: {
		height: 100,
		width: 100
	}
});
//   name={this.state.user.name}
//   avatar_url={this.state.user.avatar_url}
//   bio={this.state.user.bio}
//   location={this.state.user.location}
//   followers={this.state.user.followers}
//   following={this.state.user.following}
function GitCard(props) {
	const classes = useStyles();
	return (
		<Card className={classes.card}>
			<CardContent>
				<Avatar
					alt={props.name}
					src={props.avatar_url}
					className={classes.large}
				/>
				<Typography className={classes.title} component="h2">
					{props.name}
				</Typography>
				<Typography>Bio: {props.bio}</Typography>
				<Typography>{props.location}</Typography>
				<Typography>
					Followers: {props.followers} Following: {props.following}
				</Typography>
			</CardContent>
			<CardContent>
				<p>Bio: {props.bio} </p>
			</CardContent>
		</Card>
	);
}

export default GitCard;
