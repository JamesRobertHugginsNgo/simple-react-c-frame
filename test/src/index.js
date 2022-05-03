import React from 'react';
import ReactDomClient from 'react-dom/client';

import SimpleCFrame from '../../src/index.js';

ReactDomClient
	.createRoot(document.getElementById('app'))
	.render(
		<SimpleCFrame
			breadcrumb={[
				{ text: 'ROOT', link: '#' },
				{ text: 'APP NAME', link: '#' },
				{ text: 'PLACEHOLDER' },
				{ text: 'PAGE TITLE', link: '#' }
			]}
		>
			<h1>PAGE TITLE</h1>

			<div className='row'>
				<div className='col-sm-8 col-md-9'>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus purus ipsum, sagittis non risus in, malesuada maximus libero. Sed elementum nibh et odio sollicitudin suscipit. Nulla elit leo, mollis non posuere id, blandit vitae tortor. Vestibulum dapibus at dui at imperdiet. Vivamus sit amet elementum turpis, non interdum erat. Duis cursus auctor ipsum ac porta. Curabitur commodo felis id fermentum euismod. Etiam ultricies vestibulum augue. Integer cursus, eros sed dictum semper, dui tortor luctus felis, non dictum eros lorem ut tellus. Phasellus lorem odio, pretium sed enim a, sollicitudin pellentesque massa. Donec suscipit elit nec velit condimentum porta. Proin ut metus fringilla nibh maximus sodales non nec quam. Phasellus porta lacus at rhoncus elementum. Suspendisse rhoncus ante ac pretium vehicula. In imperdiet vestibulum quam. Proin at consectetur sem, nec auctor nulla.</p>
					<p>Donec sed sem fermentum, accumsan leo at, convallis augue. Ut tempor ut est nec interdum. Donec aliquet libero sed nunc mollis, nec porta lacus porttitor. Phasellus feugiat consequat ante non auctor. Aliquam gravida egestas urna vitae suscipit. Quisque vel viverra eros. Etiam aliquam neque a magna ornare vulputate. Vestibulum et fringilla ex, sit amet accumsan dui. Quisque gravida convallis nisi a hendrerit. Aliquam placerat arcu at est efficitur, nec gravida leo sollicitudin.</p>
					<p>Fusce volutpat tempor sem porta dapibus. Etiam sed augue ut magna rutrum convallis eu sed sapien. Integer bibendum convallis ultricies. Proin pretium tortor tellus, quis auctor ante cursus sit amet. Etiam ac placerat odio. Sed consectetur felis vel vestibulum viverra. Vivamus a massa turpis. Praesent malesuada risus nec purus dignissim faucibus. Nunc enim justo, tincidunt sed efficitur vitae, sodales eget tortor. Quisque tortor ex, tempus eu aliquam et, eleifend a erat. Morbi ornare dui quis sagittis malesuada.</p>
					<p>Suspendisse ante arcu, efficitur nec nunc non, mollis feugiat magna. Aliquam aliquam volutpat metus ac tincidunt. Proin odio dolor, luctus vel magna ut, tempus ornare ipsum. Proin tempor nec eros eu placerat. Proin at luctus nunc. Sed dignissim, risus a iaculis pretium, odio tortor consequat felis, vitae ultricies tellus nisi at dolor. Donec eleifend mattis nunc, sit amet tempor leo posuere eget. Donec egestas condimentum pellentesque. Pellentesque quis mollis ex, eu volutpat mauris. Cras fringilla dignissim metus a facilisis. Sed lobortis libero non lectus pellentesque egestas.</p>
				</div>

				<div className='col-sm-4 col-md-3'>
					<p>Vestibulum faucibus ultricies vulputate. Etiam mollis eleifend orci. Nam placerat, nisl eget euismod mollis, nulla dui iaculis massa, ut ullamcorper nunc ex vitae ex. Proin sed justo lectus. Ut convallis, leo eget porta dapibus, lacus metus mollis metus, vitae rhoncus est leo non enim. Maecenas fringilla arcu ultricies sollicitudin accumsan. Vivamus varius elementum egestas. Nullam urna nulla, hendrerit vel lacus id, tincidunt molestie sem. Cras porttitor auctor velit eu suscipit. Nullam orci eros, sagittis id rhoncus sit amet, sagittis sit amet dui. Nullam in nisl sit amet velit imperdiet convallis a in mi. Curabitur malesuada ex ut vehicula aliquet.</p>
				</div>
			</div>
		</SimpleCFrame>
	);
