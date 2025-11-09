import React from "react";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div>
            <h2>Something went wrong:</h2>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
}

function BuggyComponent() {
    throw new Error("Oops! Something went wrong.");
}

function App() {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <BuggyComponent />
        </ErrorBoundary>
    );
}

export default App;