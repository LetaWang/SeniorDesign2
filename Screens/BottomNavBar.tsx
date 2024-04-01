import React from 'react';

interface NavItem {
  label: string;
  path: string;
}

interface BottomNavBarProps {
  navItems: NavItem[];
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({ navItems }) => {
  return (
    <nav>
      <ul style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none', padding: 0 }}>
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.path}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNavBar;
