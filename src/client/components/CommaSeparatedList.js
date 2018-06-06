import React from 'react';

const CommaSeparatedList = ({ content }) =>
	<div className="project__meta__item typology">
		<span className="label">Typology: </span>
		{
			content.map(({sys, fields}, index) => {
				if (index === content.length - 1) {
					return	<span key={sys.id}>{fields.title}</span>;
				}
				return	<span key={sys.id}>{fields.title}, </span>;
			})
		}
	</div>;

export default CommaSeparatedList;