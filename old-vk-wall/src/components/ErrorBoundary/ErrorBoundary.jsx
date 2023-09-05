/* eslint-disable react/prop-types */
import React from "react";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    console.log("ErrorBoundary - errorCatched: ", error.message);
    this.setState({ hasError: true });
  }

  resetError() {
    this.setState({ hasError: false });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="Error">
          <p>Ошибка </p>
          <button type="button" onClick={this.resetError.bind(this)}>
            Сбросить
          </button>
        </div>
      );
    }
    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
