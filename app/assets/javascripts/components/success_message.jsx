
class SuccessMessage extends React.Component {

  render() {
    return (
        <h1>  
          <div className="alert alert-success">We have alerts!</div>
          Success
          <small> Made with an automated build deploy process.</small>
          <button>Press Me</button>
        </h1>
    );
  }
}