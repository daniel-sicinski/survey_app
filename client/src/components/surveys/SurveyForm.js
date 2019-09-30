import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import validateEmails from "../../utils/validateEmails.js";
import formFields from "./formFields.js";

class SurveyForm extends Component {
  renderFields() {
    return formFields.map(({ label, name }) => (
      <Field key={name} label={label} name={name} component={SurveyField} />
    ));
  }

  render() {
    const { handleSubmit, onFormSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          {this.renderFields()}
          <Link to='/surveys' className='red btn-flat white-text'>
            Cancel{" "}
          </Link>
          <button type='submit' className='teal btn-flat right white-text'>
            Next
            <i className='material-icons right'>done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  formFields.forEach(field => {
    if (!values[field.name]) {
      errors[field.name] = `You must provide a ${field.name}`;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
