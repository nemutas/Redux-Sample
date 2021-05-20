import React from 'react';
import { css } from '@emotion/css';
import { makeStyles, Typography } from '@material-ui/core';

type PropType = {
	value: string;
};

const useStyles = makeStyles({
	title: {
		fontSize: 14
	},
	value: {
		marginLeft: '10px',
		fontSize: 16
	}
});

export const UserCardItem: React.FC<PropType> = props => {
	const classes = useStyles();

	return (
		<div className={s_wrapper}>
			<Typography className={classes.title} color="textSecondary" gutterBottom>
				{props.children}
			</Typography>
			<Typography className={classes.value} variant="body2" component="p">
				{props.value}
			</Typography>
		</div>
	);
};

const s_wrapper = css`
	/* border: 1px solid blue; */
	padding: 5px;
`;
