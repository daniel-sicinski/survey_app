import React from "react";

export default function SurveyCard(props) {
  const { title, body, dateSent, yes, no } = props.survey;

  return (
    <div>
      <div class='card blue-grey darken-1'>
        <div class='card-content white-text'>
          <span class='card-title'>{title}</span>
          <p>{body}</p>
          <p className='right'>
            {" "}
            Sent On: {new Date(dateSent).toLocaleDateString()}
          </p>
        </div>
        <div class='card-action'>
          <a href='#'>Yes: {yes}</a>
          <a href='#'>No: {no}</a>
        </div>
      </div>
    </div>
  );
}
