import Link from 'next/link';
import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<nav>
				<li>
					<Link href="/" passHref>
						<a>Home</a>
					</Link>
				</li>
			</nav>
			{children}
		</div>
	);
}

export default Layout;
