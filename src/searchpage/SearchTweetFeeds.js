import React, { Component } from "react";
import Paper from "material-ui/Paper";
import { Card, CardActions, CardHeader, CardMedia } from "material-ui/Card";
import { List, ListItem } from "material-ui/List";
import { styles, searchtwt } from "../components/constdata.js";

//below component is used to generate tweets by passing relavent data...
export class Tweets extends Component {
  render() {
    return (
      <Card>
        <CardHeader
          showExpandableButton={true}
          title={this.props.title}
          style={styles.usernamestyle}
          subtitleStyle={styles.subtitlestyle}
          subtitle={this.props.subtitle}
          avatar={this.props.avatar}
        />
        <List
          expandable={true}
          className="tweetdropmenu"
          style={styles.dropdownmenu}
        >
          <ListItem
            style={styles.listitem}
            primaryText="Share via Direct Message"
          />
          <ListItem style={styles.listitem} primaryText="Copy Link to Tweet" />
          <ListItem style={styles.listitem} primaryText="Embed Tweet" />
          <ListItem
            style={styles.listitem}
            primaryText="Pin to your profile page"
          />
          <ListItem style={styles.listitem} primaryText="Delete Tweet" />
          <hr />
          <ListItem style={styles.listitem} primaryText="Add to new Moment" />
        </List>
        <div className="cardmedia">
          <CardMedia mediaStyle={styles.mediastyle}>
            <img className="mediaimage" src={this.props.imgsrc} alt="" />
          </CardMedia>
        </div>

        <CardActions>
          <div className="cardactions">
            <a href="/">
              <span>
                <i className="far fa-comment" />
                {this.props.replies}
              </span>
            </a>
            <a href="/">
              <span>
                <i className="fas fa-retweet" />
                {this.props.retweets}
              </span>
            </a>
            <a href="/">
              <span>
                <i className="far fa-heart" />
                {this.props.likes}
              </span>
            </a>
            <a href="/">
              <span>
                <i className="far fa-envelope" />
              </span>
            </a>
          </div>
        </CardActions>
      </Card>
    );
  }
}

//The following data is being inserted into Tweet component to generate tweets...
const twt = {
  u1: searchtwt.user1,
  u2: searchtwt.user2,
  u3: searchtwt.user3,
  u4: searchtwt.user4
};

//the below component is used to render tweets on timeline....

export class SearchTweetFeeds extends Component {
  render() {
    return (
      <div className="searchtweetfeedsdiv">
        <Paper className="timelinepaper" rounded={false} zDepth={0}>
          <div className="user">
            <Tweets
              title={twt.u1.title}
              subtitle={twt.u1.subtitle}
              avatar={twt.u1.avatar}
              imgsrc={twt.u1.imgsrc}
              replies={twt.u1.replies}
              retweets={twt.u1.retweets}
              likes={twt.u1.likes}
            />
          </div>
          <div className="user">
            <Tweets
              title={twt.u2.title}
              subtitle={twt.u2.subtitle}
              avatar={twt.u2.avatar}
              imgsrc={twt.u2.imgsrc}
              replies={twt.u2.replies}
              retweets={twt.u2.retweets}
              likes={twt.u2.likes}
            />
          </div>
          <div className="user">
            <Tweets
              title={twt.u3.title}
              subtitle={twt.u3.subtitle}
              avatar={twt.u3.avatar}
              imgsrc={twt.u3.imgsrc}
              replies={twt.u3.replies}
              retweets={twt.u3.retweets}
              likes={twt.u3.likes}
            />
          </div>
          <div className="user">
            <Tweets
              title={twt.u4.title}
              subtitle={twt.u4.subtitle}
              avatar={twt.u4.avatar}
              imgsrc={twt.u4.imgsrc}
              replies={twt.u4.replies}
              retweets={twt.u4.retweets}
              likes={twt.u4.likes}
            />
          </div>
        </Paper>
      </div>
    );
  }
}
