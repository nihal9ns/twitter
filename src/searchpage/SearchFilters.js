import React, { Component } from "react";
import Paper from "material-ui/Paper";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";

const styles = {
  customWidth: {
    width: 270
  }
};

export class SearchFilters extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 1 };
  }

  render() {
    return (
      <div id="searchfilterdiv">
        <Paper className="searchfilter" rounded={false} zDepth={0}>
          <h3>
            Search filters<span id="dropfilterlist">Show</span>
          </h3>
          <div id="filtertypes">
            <div id="peopledrop">
              <DropDownMenu
                value={this.state.value}
                style={styles.customWidth}
                autoWidth={false}
              >
                <MenuItem value={1} primaryText="From anyone" />
                <MenuItem value={2} primaryText="People you follow" />
              </DropDownMenu>
            </div>
            <div id="placedrop">
              <DropDownMenu
                style={styles.customWidth}
                autoWidth={false}
                value={this.state.value}
              >
                <MenuItem value={1} primaryText="Anywhere" />
                <MenuItem value={2} primaryText="Near you" />
              </DropDownMenu>
            </div>
            <div id="langdrop">
              <DropDownMenu
                style={styles.customWidth}
                autoWidth={false}
                value={this.state.value}
              >
                <MenuItem value={1} primaryText="All languages" />
                <MenuItem value={2} primaryText="English" />
                <MenuItem value={3} primaryText="Japanese" />
                <MenuItem value={4} primaryText="Arabic" />
                <MenuItem value={5} primaryText="Chinese" />
              </DropDownMenu>
            </div>
            <a href="/">
              <h5>Advanced search</h5>
            </a>
          </div>
        </Paper>
      </div>
    );
  }
}
