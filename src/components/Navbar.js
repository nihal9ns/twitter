import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Avatar from "material-ui/Avatar";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import { actbtn, popup } from "./constdata.js";

//this component is for the elements on the left side of the navbar.

export class NavbarLeft extends Component {
  render() {
    return (
      <div className="navbarleftdiv">
        <ul>
          <a href="/">
            <li className="navbarlistitem">
              <span>
                <i className="fas fa-home fa-lg" />
              </span>
              Home
            </li>
          </a>
          <a href="/">
            <li className="navbarlistitem">
              <span>
                <i className="far fa-bell" />
              </span>
              Notifications
            </li>
          </a>
          <a href="/">
            <li className="navbarlistitem">
              <span>
                <i className="far fa-envelope" />
              </span>
              Messages
            </li>
          </a>
        </ul>
      </div>
    );
  }
}

//this component is for the elements on the right side of the navbar.

export class NavbarRight extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    // buttons to be viewed inside tweet pop dialog box
    const actions = [
      actbtn[0],
      actbtn[1],
      actbtn[2],
      actbtn[3],
      actbtn[4],
      <FlatButton
        label="Cancel"
        onClick={this.handleClose}
        style={popup.btn}
        disableTouchRipple={true}
        hoverColor={popup.btnhover}
        title="close"
      />,
      <FlatButton
        label="Tweet"
        onClick={this.handleClose}
        style={popup.btn}
        disableTouchRipple={true}
        hoverColor={popup.btnhover}
        title="Tweet"
      />
    ];

    return (
      <div className="navbarrightdiv">
        <ul className="parent">
          <li>
            <i className="fab fa-twitter fa-lg" />
          </li>
          <li>
            <input id="searchinput" type="text" placeholder={this.props.plc} />
          </li>
          <li>
            <Avatar
              id="navbaravatar"
              src="https://pbs.twimg.com/profile_images/929275988248104960/aiZt2ho4_bigger.jpg"
            />
            <ul id="navbaravatardropmenu">
              <li>
                <h3>Nihal Kaul</h3>
              </li>
              <li>@nihal9ns</li>
              <hr />
              <li>
                <i className="far fa-user" />
                Profile
              </li>
              <li>
                <i className="far fa-list-alt" />
                Lists
              </li>
              <li>
                <i className="fas fa-bolt" />
                Moments
              </li>
              <hr />
              <li>
                <i className="fas fa-chart-line" />
                Twitter Ads
              </li>
              <li>
                <i className="far fa-chart-bar" />
                Analytics
              </li>
              <hr />
              <li>Settings and Privacy</li>
              <li>Help Center</li>
              <li>Keyboard shortcuts</li>
              <li>Log out</li>
              <hr />
              <li>
                Night mode
                <i className="far fa-moon" />
              </li>
            </ul>
          </li>
          <li>
            <button type="text" onClick={this.handleOpen}>
              <h2>Tweet</h2>
            </button>
          </li>
        </ul>

        <Dialog
          title="Compose new Tweet"
          titleStyle={popup.titlestyle}
          paperClassName="popupdialogpaper"
          actions={actions}
          modal={false}
          contentStyle={{ width: "650px", marginTop: "-50px" }}
          bodyStyle={{ background: "rgba(29,161,242,0.1)", paddingTop: "10px" }}
          actionsContainerStyle={{ background: "rgba(29,161,242,0.1)" }}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <textarea
            type="text"
            placeholder="What's happening?"
            id="popupdialogtextarea"
          />
        </Dialog>
      </div>
    );
  }
}

//this component will render complete navbar....
export class Navbar extends Component {
  render() {
    return (
      <div>
        <AppBar
          showMenuIconButton={false}
          className="navbar"
          zDepth={0}
          title={<NavbarLeft />}
          children={<NavbarRight plc={this.props.plc} />}
        />
      </div>
    );
  }
}
