import React, { useState, useEffect } from 'react';

const Sidebar = ({ 
  children, 
  title = "Filters", 
  position = "left",
  collapsible = true,
  defaultCollapsed = false,
  className = ""
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSidebar = () => {
    if (collapsible) {
      setIsCollapsed(!isCollapsed);
    }
  };

  return (
    <>
      {/* Sidebar */}
      <aside 
        className={`sidebar ${position} ${isCollapsed ? 'collapsed' : 'expanded'} ${className}`}
        role="complementary"
      >
        {/* Sidebar Header */}
        {(title || collapsible) && (
          <div className="sidebar-header">
            {title && <h3 className="sidebar-title">{title}</h3>}
            {collapsible && (
              <button 
                className="sidebar-toggle"
                onClick={toggleSidebar}
                aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              >
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                  className={isCollapsed ? 'rotate-180' : ''}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={position === 'left' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'} 
                  />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Sidebar Content */}
        <div className="sidebar-content">
          {children}
        </div>

        {/* Mobile Toggle Button (Fixed) */}
        {isMobile && (
          <button 
            className="sidebar-mobile-toggle"
            onClick={toggleSidebar}
            aria-label="Toggle filters"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <span>Filters</span>
          </button>
        )}
      </aside>

      {/* Overlay for mobile */}
      {isMobile && !isCollapsed && (
        <div 
          className="sidebar-overlay"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

// Filter Group Component (Bonus utility)
export const SidebarFilterGroup = ({ title, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="sidebar-filter-group">
      <button 
        className="filter-group-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="filter-group-title">{title}</span>
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
          className={`filter-group-icon ${isOpen ? 'open' : ''}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="filter-group-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
