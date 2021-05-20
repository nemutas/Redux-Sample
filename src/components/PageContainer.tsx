import React from 'react';
import { Box, colors, createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import { useDarkModeSelector } from '../store/hooks';
import { CreateUserPage } from './CreateUserPage';
import { UserListPage } from './UserListPage';

export const PageContainer: React.FC = () => {
	const dark = useDarkModeSelector();

	const theme = createMuiTheme({
		palette: {
			primary: {
				main: colors.blue[600]
			},
			type: dark ? 'dark' : 'light'
		}
	});

	const useStyles = makeStyles({
		container: {
			display: 'flex',
			height: '100vh',
			backgroundColor: dark ? 'rgb(30, 30, 30)' : 'rgb(240, 240, 240)'
		}
	});

	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<Box className={classes.container}>
				<CreateUserPage />
				<UserListPage />
			</Box>
		</ThemeProvider>
	);
};
