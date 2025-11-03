import { Link } from 'react-router-dom';
import './PillNav.css';

const PillNav = ({
  items,
  activeHref,
  className = '',
  baseColor = '#fff'
}) => {
  const isExternalLink = href =>
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('//') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('#');

  const isRouterLink = href => href && !isExternalLink(href);




  return (
    <div className="pill-nav-container">
      <nav className={`pill-nav ${className}`} aria-label="Primary">
        <ul className="pill-list" role="menubar">
          {items?.map((item, i) => (
            <li key={item.href || `item-${i}`} role="none">
              {isRouterLink(item.href) ? (
                <Link
                  role="menuitem"
                  to={item.href}
                  className={`nav-link${activeHref === item.href ? ' is-active' : ''}`}
                  style={{ color: baseColor }}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  role="menuitem"
                  href={item.href}
                  className={`nav-link${activeHref === item.href ? ' is-active' : ''}`}
                  style={{ color: baseColor }}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default PillNav;
