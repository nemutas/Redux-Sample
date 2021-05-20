import React from 'react';
import { css } from '@emotion/css';

type PropType = {
	value: string;
};

export const UserCardItem: React.FC<PropType> = props => {
	return (
		<div className={s_wrapper}>
			<span className={s_label}>{props.children}</span>
			<br />
			<span className={s_data}>{props.value}</span>
		</div>
	);
};

const s_wrapper = css`
	/* border: 1px solid blue; */
	padding: 5px;
`;

const s_label = css`
	font-size: 0.8rem;
	color: gray;
`;

const s_data = css`
	margin-left: 10px;
`;
