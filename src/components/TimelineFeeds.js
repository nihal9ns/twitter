import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import {styles,tweetdata} from './constdata.js';
import {ProfileCard} from './ProfileCard.js';

//this is tweet bar shown above tweets...
export class TimelineTweetbar extends Component{
    render(){
        return(
            <div className="timelinetwtbar">
                 <Paper className="timelinesearchbarpaper" rounded={false} zDepth={0} >
                    <Avatar className="timelinesearchbaravatar"
                     src="https://pbs.twimg.com/profile_images/929275988248104960/aiZt2ho4_bigger.jpg" />

                    <div className="timelinesearchbardiv" >
                        <input className="timelinesearchbar" placeholder="What's happening?" />
                    </div>
                </Paper>
            </div>
        );
    }
}

//below component is used to generate tweets by passing relavent data...
export class Tweets extends Component{
    render(){
        return(
            <Card > 
            <CardHeader  showExpandableButton={true}
            title={this.props.title} style={styles.usernamestyle}
            subtitleStyle={styles.subtitlestyle}
            subtitle={this.props.subtitle}
            avatar={this.props.avatar}
            >
            <ProfileCard className={this.props.dispornodisp} bgimg={this.props.bgimg} avaimg={this.props.avatar} 
            name={this.props.title} twthandle={this.props.twthandle}
            twt={this.props.twt} flwing={this.props.flwing} flwers={this.props.flwers} />
            </CardHeader>
            <List expandable={true} className="tweetdropmenu" style={styles.dropdownmenu} >
            <ListItem style={styles.listitem} primaryText="Share via Direct Message" />
            <ListItem style={styles.listitem} primaryText="Copy Link to Tweet" />
            <ListItem style={styles.listitem} primaryText="Embed Tweet" />
            <ListItem style={styles.listitem} primaryText="Pin to your profile page" />
            <ListItem style={styles.listitem} primaryText="Delete Tweet" />
            <hr/>
            <ListItem style={styles.listitem} primaryText="Add to new Moment" />
            </List>
            <div className="cardmedia">
            <CardMedia mediaStyle={styles.mediastyle}>
                <img className="mediaimage"
                src={this.props.imgsrc} alt="" />
            </CardMedia>
            </div>

            <CardActions>
                <div className="cardactions">
                    <a href="/"><span><i className="far fa-comment"></i>{this.props.replies}</span></a>
                    <a href="/"><span><i className="fas fa-retweet"></i>{this.props.retweets}</span></a>
                    <a href="/"><span><i className="far fa-heart"></i>{this.props.likes}</span></a>
                    <a href="/"><span><i className="far fa-envelope"></i></span></a>
                </div>  
            </CardActions>
        </Card>
        );
    }
}

//The following data is being inserted into Tweet component to generate tweets...
const twt ={
    u1:tweetdata.user1,
    u2:tweetdata.user2,
    u3:tweetdata.user3,
    u4:tweetdata.user4
};

//the below component is used to render tweets on timeline....

export class TimelineFeeds extends Component{

    render(){
        return(
            <div className="timelinediv" >
                <Paper className="timelinepaper" rounded={false} zDepth={0} >
                <div className="user">                
                    <Tweets dispornodisp={this.props.dispornodisp} title={twt.u1.title} subtitle={twt.u1.subtitle} avatar={twt.u1.avatar} imgsrc={twt.u1.imgsrc} replies={twt.u1.replies} retweets={twt.u1.retweets} 
                    likes={twt.u1.likes} bgimg={twt.u1.bgimg} twthandle={twt.u1.twthandle} twt={twt.u1.twt} flwing={twt.u1.flwing} flwers={twt.u1.flwers} />
                </div>
                <div className="user">
                    <Tweets dispornodisp={this.props.dispornodisp} title={twt.u2.title} subtitle={twt.u2.subtitle} avatar={twt.u2.avatar} imgsrc={twt.u2.imgsrc} replies={twt.u2.replies} retweets={twt.u2.retweets} 
                    likes={twt.u2.likes} bgimg={twt.u2.bgimg} twthandle={twt.u2.twthandle} twt={twt.u2.twt} flwing={twt.u2.flwing} flwers={twt.u2.flwers} />
                </div>
                <div className="user">    
                    <Tweets dispornodisp={this.props.dispornodisp} title={twt.u3.title} subtitle={twt.u3.subtitle} avatar={twt.u3.avatar} imgsrc={twt.u3.imgsrc} replies={twt.u3.replies} retweets={twt.u3.retweets} 
                    likes={twt.u3.likes} bgimg={twt.u3.bgimg} twthandle={twt.u3.twthandle} twt={twt.u3.twt} flwing={twt.u3.flwing} flwers={twt.u3.flwers} />
                </div>
                <div className="user">    
                    <Tweets dispornodisp={this.props.dispornodisp} title={twt.u4.title} subtitle={twt.u4.subtitle} avatar={twt.u4.avatar} imgsrc={twt.u4.imgsrc} replies={twt.u4.replies} retweets={twt.u4.retweets} 
                    likes={twt.u4.likes} bgimg={twt.u4.bgimg} twthandle={twt.u4.twthandle} twt={twt.u4.twt} flwing={twt.u4.flwing} flwers={twt.u4.flwers} />
                </div>
                </Paper>
            </div>
        );
    }
}
