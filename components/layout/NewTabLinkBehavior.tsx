"use client";

import { useEffect } from "react";

const SKIPPED_PROTOCOLS = new Set(["mailto:", "tel:", "javascript:", "blob:", "data:"]);

function shouldOpenInNewTab(anchor: HTMLAnchorElement) {
  const rawHref = anchor.getAttribute("href");

  // Skip empty, anchor-only, or relative (internal) links
  if (!rawHref || rawHref.trim() === "" || rawHref.startsWith("#") || rawHref.startsWith("/")) {
    return false;
  }

  try {
    const url = new URL(anchor.href, window.location.href);

    // Skip non-http protocols
    if (SKIPPED_PROTOCOLS.has(url.protocol)) return false;

    // Only open in new tab if it's an external link (different origin)
    return url.origin !== window.location.origin;
  } catch {
    return false;
  }
}

function markLinks(root: ParentNode = document) {
  root.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((anchor) => {
    if (!shouldOpenInNewTab(anchor)) {
      return;
    }

    anchor.target = "_blank";

    const rel = new Set(
      (anchor.getAttribute("rel") ?? "")
        .split(/\s+/)
        .map((value) => value.trim())
        .filter(Boolean),
    );

    rel.add("noopener");
    rel.add("noreferrer");
    anchor.setAttribute("rel", Array.from(rel).join(" "));
  });
}

export function NewTabLinkBehavior() {
  useEffect(() => {
    markLinks();

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.matches("a[href]")) {
              markLinks(node.parentElement ?? document);
            } else {
              markLinks(node);
            }
          }
        });
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || !shouldOpenInNewTab(anchor)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      window.open(anchor.href, "_blank", "noopener,noreferrer");
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return null;
}
