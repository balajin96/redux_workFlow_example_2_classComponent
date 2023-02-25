import { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { appleAction, googleAction, subscribeAction } from "./index";

const appstyle = {
  textAlign: "center",
  width: "auto",
  fontFamily: "Arial, Verdana, sans-serif"
};
class App extends Component {
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
const mapsStateToProps = (state) => {
  return state;
};
const mapsDispatchToProps = (dispatch) => {
  return {
    appleDisptaching: () => dispatch(appleAction()),
    googleDisptaching: () => dispatch(googleAction()),
    subscribeDisptaching: () => dispatch(subscribeAction())
  };
};

export default connect(mapsStateToProps, mapsDispatchToProps)(App);
