import { Component } from "react";
import { connect } from "react-redux"; //useSelector, useDispatch,
import { appleAction, googleAction, subscribeAction } from "./index";

const appstyle = {
  textAlign: "center",
  width: "auto",
  fontFamily: "Arial, Verdana, sans-serif"
};
class App extends Component {
  //please note useSelector ,useDispatch is used for Functional Components
  //const techies = useSelector((state) => state);
  // const dispatch = useDispatch();

  render() {
    return (
      <div className="App" style={appstyle}>
        <h1>this is redux basics</h1>
        <p>{this.props.isSubscribed ? "true" : "false"}</p>
        <img src={this.props.img} alt={" alternative names"} />
        <button
          disabled={!this.props.isSubscribed}
          onClick={() => this.props.appleDisptaching()}
        >
          apple
        </button>
        &nbsp;
        <button
          disabled={!this.props.isSubscribed}
          onClick={() => this.props.googleDisptaching()}
        >
          google
        </button>
        &nbsp;
        <button onClick={() => this.props.subscribeDisptaching()}>
          {!this.props.isSubscribed ? "subscribe" : "unSubscribe"}
        </button>
      </div>
    );
  }
}

//please note that MSTP & MDTP is used not a built-in key name. which is used only for naming conventional.
// connect is used in react-redux and which is used to connect that MSTP & MDTP. 

//which is used to render the data into rendered UI.
const mapsStateToProps = (state) => {
  return state;
};

//which is used to pass the action creator to dispatch using payload.
const mapsDispatchToProps = (dispatch) => {
  return {
    appleDisptaching: () => dispatch(appleAction()),
    googleDisptaching: () => dispatch(googleAction()),
    subscribeDisptaching: () => dispatch(subscribeAction())
  };
};
// we can able to pass only ONE COMPONENT into connect
//here we have used App component is passed into connect function.
export default connect(mapsStateToProps, mapsDispatchToProps)(App);
