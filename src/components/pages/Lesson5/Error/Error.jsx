import React from 'react';
// import { Component } from 'react';

class ErrorBoundary extends React.Component {
  state = { hasError: true };

  componentDidCatch(error, info) {
    // Dacă metoda a fost apelată, atunci există o eroare!
    // Stabilim starea componentei
    this.setState({ hasError: true });
    // De asemenea, putem trimite un raport de eroare serviciului de analiză
    // logErrorToMyService(error, info);
  }

  render() {
    // Dacă există o eroare...
    if (this.state.hasError) {
      // Vom randa fallback UI
      return <h1>Something went wrong, please try again later :(</h1>;
    }

    // Dacă totul este în regulă, vom randa componentele copii
    return this.props.children;
  }
}

export default ErrorBoundary;
