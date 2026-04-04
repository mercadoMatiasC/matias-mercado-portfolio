import { createContext, useContext, useEffect, useState } from 'react';

const NavigationContext = createContext();

export function NavigationProvider({ children }) {
  const [activeTab, setActiveTab] = useState('home');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveTab(id);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5)
                setActiveTab(entry.target.id);
        });
    }, { threshold: 0.5 });

    const sections = ['home', 'aboutme', 'skills', 'projects', 'contactsocials'];
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) 
          observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <NavigationContext.Provider value={{ activeTab, setActiveTab, scrollToSection }}>
      {children}
    </NavigationContext.Provider>
  );
}

export const useNav = () => useContext(NavigationContext);