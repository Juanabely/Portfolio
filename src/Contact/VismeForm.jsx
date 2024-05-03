import React from 'react';

class VismeForm extends React.Component {
  render() {
    return (
      <iframe
        src="https://forms.visme.co/formsPlayer/8r6ejgre-untitled-project"
        style={{ width: '100%', height: '100vh' }}
        frameBorder="0"
        loading='lazy'
      />
    );
  }
}

export default VismeForm;
