import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';


export class ProfileCard extends Component{
   
    render(){
        return(
            <div className="profilepapercarddiv">
                <Paper className={this.props.className} rounded={false} zDepth={0} >
                    <Paper className="profilepapercardupper" rounded={false} zDepth={0} >
                        <img src={this.props.bgimg} alt="" />
                    </Paper>
                    <Divider />
                    <List>
                        <ListItem
                        disabled={true} leftAvatar={
                            <Avatar className="profilepapercardavatar" size={68} src={this.props.avaimg} />
                        }
                        />
                        <a href="/" style={{textDecoration: 'none'}}>
                        <ListItem primaryText={this.props.name} disabled={true} className="profilepapercardname" />
                        </a>
                        <a href="/" style={{textDecoration: 'none'}} >
                        <ListItem primaryText={this.props.twthandle} disabled={true} className="profilepapercardusername" />
                        </a>
                    </List>
                    <ProfileCardDetails twt={this.props.twt} flwing={this.props.flwing} flwers={this.props.flwers} />
                </Paper>
            </div>
        );
    }
}

export class ProfileCardDetails extends Component{
    render(){
        return(
            <div>
                <div>
                    <ul className="profilepapercardtaglist" >
                        <li>Tweets</li>
                        <li>Following</li>
                        <li>Followers</li>
                    </ul>
                </div>
                <div>
                    <ul className="profilepapercardcountlist" >
                        <li>{this.props.twt}</li>
                        <li>{this.props.flwing}</li>
                        <li>{this.props.flwers}</li>
                    </ul>
                </div>
            </div>
        );
    }
}