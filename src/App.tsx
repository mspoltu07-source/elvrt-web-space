/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import ContactView from "./components/ContactView";
import CareersView from "./components/CareersView";
import PrivacyView from "./components/PrivacyView";
import TermsView from "./components/TermsView";
import CookieView from "./components/CookieView";
import NotFoundView from "./components/NotFoundView";

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    // Standard path resolution (checks pathname first, or hashes for iframe environments)
    const hash = window.location.hash;
    if (hash) {
      return hash.slice(1);
    }
    return window.location.pathname || "/";
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  // Loading timer with luxury fade-out synchronization
  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 3000);

    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Dynamic router sync
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || "/");
    };

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        setCurrentPath(hash.slice(1));
      }
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handleHashChange);
    
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Global anchor click interceptor for standard paths & hash routing (fully robust in all iFrame hosts)
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (target) {
        const href = target.getAttribute("href");
        if (href) {
          // Check if link is an internal site router link
          const isInternal = 
            href.startsWith("/") || 
            href.endsWith(".html") || 
            href.startsWith("#");

          if (isInternal && !target.getAttribute("target")) {
            e.preventDefault();
            
            // Extract pure routing action
            let targetPath = href;
            
            // Fragment scrolling on same/home page helper
            if (href.startsWith("/#") || href.startsWith("#")) {
              const fragmentId = href.includes("#") ? href.split("#")[1] : "";
              targetPath = "/";
              
              setCurrentPath("/");
              window.location.hash = "/";
              
              setTimeout(() => {
                const el = document.getElementById(fragmentId);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
              return;
            }

            // Sync states and trigger view switch with scroll reset
            setCurrentPath(targetPath);
            window.location.hash = targetPath;
            window.scrollTo({ top: 0, behavior: "instant" });
          }
        }
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);

  // View matching switcher
  const renderView = () => {
    // Normalize path to ignore trailing slashes and normalize variations like privacy.html vs /privacy.html
    const normPath = currentPath.toLowerCase().replace(/^\/+|\/+$/g, "");

    if (normPath === "" || normPath === "index.html") {
      return <HomeView />;
    }
    if (normPath === "about") {
      return <AboutView />;
    }
    if (normPath === "contact") {
      return <ContactView />;
    }
    if (normPath === "careers") {
      return <CareersView />;
    }
    if (normPath === "privacy.html" || normPath === "privacy") {
      return <PrivacyView />;
    }
    if (normPath === "terms.html" || normPath === "terms") {
      return <TermsView />;
    }
    if (normPath === "cookie.html" || normPath === "cookie") {
      return <CookieView />;
    }

    return <NotFoundView />;
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 font-sans selection:bg-orange-500/30 selection:text-orange-200">
      {isLoading && (
        <div className={`loader ${isFadingOut ? "fade-out" : ""}`}>
          <div className="loader-inner">
            <div className="loader-line-wrap"></div>
            <div className="loader-line-wrap"></div>
            <div className="loader-line-wrap"></div>
            <div className="loader-line-wrap"></div>
            <div className="loader-line-wrap"></div>
          </div>
        </div>
      )}
      {renderView()}
    </div>
  );
}
