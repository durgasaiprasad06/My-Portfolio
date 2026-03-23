import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useNavigation } from '../context/NavigationContext';

const routes = [
  '/',
  '/about',
  '/skills',
  '/projects',
  '/certifications',
  '/achievements',
  '/resume',
  '/contact'
];

const ScrollNavigator = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setDirection } = useNavigation();
  const isTransitioning = useRef(false);

  useEffect(() => {
    const handleNavigation = (delta) => {
      if (isTransitioning.current) return;

      const currentIndex = routes.indexOf(location.pathname);
      let nextIndex = -1;

      if (delta > 0 && currentIndex < routes.length - 1) {
        // Scroll Down / Next
        nextIndex = currentIndex + 1;
        setDirection('forward');
      } else if (delta < 0 && currentIndex > 0) {
        // Scroll Up / Previous
        nextIndex = currentIndex - 1;
        setDirection('backward');
      }

      if (nextIndex !== -1) {
        isTransitioning.current = true;
        navigate(routes[nextIndex]);
        
        // Cooldown to prevent skipping multiple pages
        setTimeout(() => {
          isTransitioning.current = false;
        }, 1200);
      }
    };

    const onWheel = (e) => {
      // Sensitivity check to prevent accidental triggers on trackpads
      if (Math.abs(e.deltaY) > 30) {
        handleNavigation(e.deltaY);
      }
    };

    const onKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        handleNavigation(1);
      } else if (e.key === 'ArrowUp') {
        handleNavigation(-1);
      }
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [location.pathname, navigate, setDirection]);

  return null; // This component doesn't render anything
};

export default ScrollNavigator;
