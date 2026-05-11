import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-full">
            {/* Brand Section 
                Class	    Color HEX	 Appearance
                gray-50	    #f9fafb	Almost white
                gray-100	#f3f4f6	Very light gray
                gray-200	#e5e7eb	Light gray
                gray-300	#d1d5db	Light-medium gray
                gray-400	#9ca3af	Medium gray
                gray-500	#6b7280	Mid gray
                gray-600	#4b5563	Dark gray
                gray-700	#374151	Darker gray
                gray-800	#1f2937	Very dark gray
                gray-900	#111827	Almost black
            */}
            <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                    {/* Logo on the left */}
                    <img src="/AlexLogo.png" alt="Alexandria Logo" className="h-10 w-auto" />

                    {/* Text on the right
                    
                            Class	    Font Size	    Line Height	    Approximate px
                            text-xs	    0.75rem	        1rem	        12px
                            text-sm	    0.875rem	    1.25rem	        14px
                            text-base	1rem	        1.5rem	        16px
                            text-lg	    1.125rem	    1.75rem	        18px
                            text-xl	    1.25rem	        1.75rem	        20px
                            text-2xl	1.5rem	        2rem	        24px
                            text-3xl	1.875rem	    2.25rem	        30px
                            text-4xl	2.25rem	        2.5rem	        36px

                    */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Alexandria</h2>
                        <p className="text-xs text-gray-500 tracking-wide">BIBLIOPHILE EDITION</p>
                    </div>
                </div>
            </div>

            {/* Navigation Links 
                Class	        Margin-top value	Approximate px
                space-y-0	    0rem	            0px
                space-y-0.5	    0.125rem	        2px
                space-y-1	    0.25rem	            4px
                space-y-1.5	    0.375rem	        6px
                space-y-2	    0.5rem	            8px
                space-y-3	    0.75rem	            12px
                space-y-4	    1rem	            16px
                space-y-5	    1.25rem	            20px
                space-y-6	    1.5rem	            24px
            */}
            <nav className="flex-1 p-4 space-y-1">
                <Link
                    to="/dashboard"
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive('/dashboard')
                        ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>Dashboard</span>
                </Link>

                <Link
                    to="/reading-list"
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive('/reading-list')
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Reading List
                </Link>

                <Link
                    to="/clubs"
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive('/clubs')
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Clubs
                </Link>

                <Link
                    to="/profile-settings"
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive('/profile-settings')
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Profile Settings
                </Link>

                <Link
                    to="/privacy"
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${isActive('/privacy')
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {/*
                            Command	        What it does	                                In this icon
                            M12 15v2	    Move to (12,15) and draw line down to (12,17)	Creates the keyhole/opening
                            m-6 4	        Move from last point	                        Positioning
                            h12	            Draw horizontal line right 12 units	            Top of lock body
                            a2 2 0 002-2	Draw arc/corner	                                Rounded corners
                            v-6	            Draw vertical line up 6 units	                Right side of lock body
                            a2 2 0 00-2-2	Draw arc/corner	                                Rounded corner
                            H6	            Draw horizontal line left	                    Bottom of lock body
                            a2 2 0 00-2-2	Draw arc	                                    Rounded corner
                            v6	            Draw vertical line	                            Left side of lock body
                            a2 2 0 002 2	Draw arc	                                    Rounded corner
                            z	            Close the path	                                Completes the lock body
                            M10 10	        Move cursor	                                    For the shackle (top loop)
                            V7	            Draw vertical line up	                        Shackle left side
                            a4 4 0 018 0	Draw arc	                                    Top curved part of shackle
                            v4	            Draw vertical line down	                        Shackle right side
                            h8z	            Draw horizontal line and close	                Bottom of shackle
                        */}
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Privacy
                </Link>
            </nav>

            {/* + New Log Button */}
            {/* + New Log Button - mt-auto pushes it to bottom */}
            <div className="p-4 border-t border-gray-200 mt-auto">
                <button
                    style={{
                        width: '100%',
                        backgroundColor: '#114916',
                        color: 'white',
                        fontWeight: '500',
                        paddingTop: '0.5rem',
                        paddingBottom: '0.5rem',
                        paddingLeft: '1rem',
                        paddingRight: '1rem',
                        borderRadius: '0.5rem',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0b3a0f'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#114916'}
                >
                    <svg
                        style={{ height: '1.25rem', width: '1.25rem' }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                        />
                    </svg>
                    New Log
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;