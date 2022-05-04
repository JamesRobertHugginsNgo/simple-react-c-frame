import React from 'react';
import PropTypes from 'prop-types';

import './styles/index.scss';

import SimpleReactBreadcrumb from 'simple-react-breadcrumb';

function SimpleReactCFrame({ breadcrumb = [{ text: 'Website', link: '#' }], children }) {
	return (
		<div className='simple-react-c-frame'>
			<header>
				<div className='container-fluid pt-3 px-3'>
					<h1 className='mb-3'>
						HEADER
					</h1>

				</div>
				<SimpleReactBreadcrumb crumbs={breadcrumb} />
			</header>

			<main>
				<div className='container py-3'>
					{children}
				</div>
			</main>

			<footer>
				<div className='container py-3'>
					<p>FOOTER</p>
				</div>
			</footer>
		</div>
	);
}

SimpleReactCFrame.propTypes = {
	breadcrumb: PropTypes.array,
	children: PropTypes.node
};

export default SimpleReactCFrame;
