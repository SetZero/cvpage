import React from "react";

/**
 * 404 Error Page Component
 * Uses CSS variables for all colors and spacing.
 * Adapts to light/dark mode automatically.
 */
const NotFoundPage: React.FC = () => (
    <main
        className="flex flex-col items-center justify-center"
        style={{
            minHeight: "100vh",
            background: "var(--color-background)",
            padding: "var(--space-32) var(--space-8)",
        }}
    >
        <section
            className="card"
            style={{
                maxWidth: 420,
                width: "100%",
                textAlign: "center",
                animation: "fadeInUp 0.8s var(--ease-standard)",
                padding: "var(--space-32) var(--space-24)",
            }}
            aria-labelledby="error-title"
            role="main"
        >
            <div
                style={{
                    fontSize: "var(--font-size-4xl)",
                    fontWeight: "var(--font-weight-bold)",
                    color: "var(--color-primary)",
                    marginBottom: "var(--space-8)",
                    letterSpacing: "0.05em",
                }}
            >
                404
            </div>
            <h1
                id="error-title"
                style={{
                    fontSize: "var(--font-size-xl)",
                    color: "var(--color-text)",
                    marginBottom: "var(--space-16)",
                    fontWeight: "var(--font-weight-semibold)",
                }}
            >
                Seite nicht gefunden
            </h1>
            <p
                style={{
                    color: "var(--color-text-secondary)",
                    fontSize: "var(--font-size-lg)",
                    marginBottom: "var(--space-24)",
                }}
            >
                Die angeforderte Seite existiert nicht oder wurde verschoben.<br />
                Bitte überprüfe die URL oder kehre zur Startseite zurück.
            </p>
            <a
                href="/"
                className="btn btn--primary"
            >
                Zurück zur Startseite
            </a>
        </section>
    </main>
);

export default NotFoundPage;