import React from 'react'
import ReactDOM from 'react-dom'


class Welcome extends React.Component {
  componentDidMount() {
    $('#summernote').summernote({
      height:700
    });

  }
  render() {
    return <div id="summernote">Hello Client - You will be happy to see this</div>
  }
}
ReactDOM.render(<Welcome></Welcome>,document.getElementById('app'))
