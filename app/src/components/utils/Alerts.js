import React from 'react';
import { Alert } from 'reactstrap';

// Calls Alert with props for the content and color = <Alerts content={content} style={style} />
// Content = props.content
// Color Style = props.style
    // Color Styles can include: primary, secondary, success, 
        // danger, warning, info, light, and dark

export default function Alerts(props) {
  const {style, content} = props
  return (
    <div className="alerts">
      <Alert color={style}>
        {content}
      </Alert>
    </div>
  );
};