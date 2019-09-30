import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import formFields from "./formFields.js";
import { submitSurvey } from "../../actions/index";

function SurveyFormReview({ formValues, onCancel, submitSurvey, history }) {
  const reviewFields = formFields.map(field => {
    return (
      <div key={field.name}>
        <label>{field.label}</label>
        <div>{formValues[field.name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h1>Review survey form</h1>
      {reviewFields}
      <button className='yellow darken-3 btn-flat' onClick={onCancel}>
        Back
      </button>
      <button
        className='green darken-3 right btn-flat'
        onClick={() => submitSurvey(formValues, history)}
      >
        Submit Survey
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(
  mapStateToProps,
  { submitSurvey }
)(withRouter(SurveyFormReview));
