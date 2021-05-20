export const screenMode = (isDark: boolean) => {
	return {
		type: 'SWITCHING',
		dark: isDark
	};
};
