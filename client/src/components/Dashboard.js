import React, { Component } from "react";
import SurveyCard from "./surveys/SurveyCard";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  render() {
    const { surveys } = this.props;
    return (
      <div>
        <h1>Your surveys:</h1>
        {surveys &&
          surveys.reverse().map(survey => {
            return <SurveyCard key={survey._id} survey={survey} />;
          })}
        <div class='fixed-action-btn'>
          <Link to={"/surveys/new"} class='btn-floating btn-large red'>
            <i className='material-icons'>add</i>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  surveys: state.surveys
});

export default connect(
  mapStateToProps,
  actions
)(Dashboard);
