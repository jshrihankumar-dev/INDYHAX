import React, { createContext, useContext, useState, useEffect } from "react";

// Create context for navigation state
const RouterContext = createContext(null);

export function HashRouter({ children }) {
  // Read hash, default to '/'
  const getPath = () => {
    const hash = window.location.hash;
    if (!hash) return "/";
    return hash.replace(/^#/, "") || "/";
  };

  const [currentPath, setCurrentPath] = useState(getPath());

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(getPath());
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = (to) => {
    window.location.hash = to;
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(RouterContext);
  if (!context) throw new Error("useLocation must be used within a HashRouter");
  return { pathname: context.currentPath };
}

export function useNavigate() {
  const context = useContext(RouterContext);
  if (!context) throw new Error("useNavigate must be used within a HashRouter");
  return context.navigate;
}

export function Routes({ children }) {
  const { currentPath } = useContext(RouterContext);
  let match = null;

  React.Children.forEach(children, (child) => {
    if (match) return;
    if (!React.isValidElement(child)) return;

    const { path } = child.props;
    if (path === currentPath) {
      match = child;
    } else if (path === "*" && !match) {
      match = child; // Fallback route
    }
  });

  return match;
}

export function Route({ element }) {
  return element;
}

export function Link({ to, children, ...props }) {
  return (
    <a href={`#${to}`} {...props}>
      {children}
    </a>
  );
}

export function NavLink({ to, children, end, className, ...props }) {
  const { currentPath } = useContext(RouterContext);
  
  const isActive = end 
    ? currentPath === to 
    : currentPath.startsWith(to) && (to === "/" ? currentPath === "/" : true);

  const resolvedClassName = typeof className === "function" 
    ? className({ isActive }) 
    : `${className || ""} ${isActive ? "active" : ""}`.trim();

  return (
    <a href={`#${to}`} className={resolvedClassName} {...props}>
      {children}
    </a>
  );
}
