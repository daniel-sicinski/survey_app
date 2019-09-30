import React, { Component } from "react";
import { reduxForm } from "redux-form";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends Component {
  state = { showReviewForm: false };

  renderForm() {
    if (this.state.showReviewForm) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showReviewForm: false })}
        />
      );
    }
    return (
      <SurveyForm
        onFormSubmit={() => this.setState({ showReviewForm: true })}
      />
    );
  }

  render() {
    return <div>{this.renderForm()}</div>;
  }
}

export default reduxForm({
  form: "surveyForm"
})(SurveyNew);
