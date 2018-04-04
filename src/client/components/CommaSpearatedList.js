import React from 'react';

const CommaSpearatedList = ({ content }) => {
	return content.map(({sys, fields}) =>
		<span key={sys.id}>
			<span className="label">Typology: </span>
			<span>{fields.title}</span>
		</span>);
};

export default CommaSpearatedList;