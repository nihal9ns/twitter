import React, { Component } from "react";
import Paper from "material-ui/Paper";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";

const LeftBtns = () => (
  <div className="searchnavdiv">
    <ul>
      <a href="/">
        <li className="navbarlistitem">Top</li>
      </a>
      <a href="/">
        <li className="navbarlistitem">Latest</li>
      </a>
      <a href="/">
        <li className="navbarlistitem">People</li>
      </a>
      <a href="/">
        <li className="navbarlistitem">Photos</li>
      </a>
      <a href="/">
        <li className="navbarlistitem">videos</li>
      </a>
      <a href="/">
        <li className="navbarlistitem">News</li>
      </a>
      <a href="/">
        <li className="navbarlistitem">Broadcast</li>
      </a>
    </ul>
  </div>
);

const DropList = () => (
  <IconMenu
    className="verticon"
    iconButtonElement={
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    }
    style={{ width: "150px" }}
    targetOrigin={{ horizontal: "right", vertical: "top" }}
    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
  >
    <div id="vertdroplist">
      <p>
        Search settings
        <br />
        <span>Hiding sensitive content</span>
      </p>
      <hr />
      <p>Save this search</p>
      <p>Embed this search</p>
    </div>
  </IconMenu>
);

export class Searchnavbar extends Component {
  render() {
    return (
      <div id="searchtermdiv">
        <Paper className="searchtermpaper" rounded={false} zDepth={0}>
          <h2>aadhar</h2>
        </Paper>
        <div id="">
          <AppBar
            title={<LeftBtns />}
            className="searchnavbar"
            showMenuIconButton={false}
            iconElementRight={<DropList />}
          />
        </div>
      </div>
    );
  }
}
