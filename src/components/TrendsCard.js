import React, { Component } from "react";
import Paper from "material-ui/Paper";

export class TrendsCard extends Component {
  render() {
    return (
      <div className={this.props.divclass}>
        <Paper className="trendspapercard" rounded={false} zDepth={0}>
          <div className="trendspapercardinnerdiv">
            <h5>
              Trends for you{" "}
              <span className="trendspapercardchangespan">Change</span>
            </h5>
            <ul className="trendspapercardlist">
              <a href="/">
                <li>Special Show</li>
              </a>
              <li>10.8K Tweets</li>
              <a href="/">
                <li>#RamCharan</li>
              </a>
              <li>4,220 Tweets</li>
              <a href="/">
                <li>#IPL2018</li>
              </a>
              <li>1,632 Tweets</li>
              <a href="/">
                <li>#RBIPolicy</li>
              </a>
              <li>1,206 Tweets</li>
              <a href="/">
                <li>#ShauryaDiwas</li>
              </a>
              <li>26.3K Tweets</li>
              <a href="/">
                <li>#BabasahebAmbedkar</li>
              </a>
              <li>12.5k Tweets</li>
              <a href="/">
                <li>#WeekendWithBB11</li>
              </a>
              <li>5,370 Tweets</li>
              <a href="/">
                <li>#ChristmasWithNilgiris</li>
              </a>
              <li>4,806 Tweets</li>
            </ul>
          </div>
        </Paper>
      </div>
    );
  }
}
