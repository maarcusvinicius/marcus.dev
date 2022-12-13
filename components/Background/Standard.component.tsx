import { useRef } from 'react';

export function Standard() {
	const containerRef = useRef<HTMLDivElement | null>(null);

	return <div className="fixed inset-0" ref={containerRef} />;
}
