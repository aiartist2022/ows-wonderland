import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-black text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-[var(--ows-red)] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.25em] text-foreground transition-colors hover:shadow-[0_0_30px_var(--ows-red-glow)]"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "OWS Holdings — One Group. Seven Capabilities. Infinite Value." },
      {
        name: "description",
        content:
          "OWS Holdings is a global, multi-vertical group spanning automotive, defence, insurance, media, events, wellness and facility management. Headquartered in Sharjah.",
      },
      { name: "author", content: "OWS Holdings" },
      { property: "og:title", content: "OWS Holdings — One Group. Seven Capabilities. Infinite Value." },
      { property: "og:description", content: "OWS Brilliance is a dynamic website for OWS Holdings, built with Framer Motion and TanStack." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "OWS Holdings — One Group. Seven Capabilities. Infinite Value." },
      { name: "description", content: "OWS Brilliance is a dynamic website for OWS Holdings, built with Framer Motion and TanStack." },
      { name: "twitter:description", content: "OWS Brilliance is a dynamic website for OWS Holdings, built with Framer Motion and TanStack." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/83bb9388-ed2c-4641-9e68-9db6d07c1141/id-preview-fbe10f94--12e9cf71-19c5-4813-aae8-0a46725fcafc.lovable.app-1777409956272.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/83bb9388-ed2c-4641-9e68-9db6d07c1141/id-preview-fbe10f94--12e9cf71-19c5-4813-aae8-0a46725fcafc.lovable.app-1777409956272.png" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Inter+Tight:wght@400;500;600;700;800;900&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
