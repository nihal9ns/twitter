import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {List} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {suggest} from './constdata.js';

export const sug={
    u1:suggest.user1,
    u2:suggest.user2,
    u3:suggest.user3,
    u4:suggest.user4,
    u5:suggest.user5
}

export class SuggestionsItems extends Component{
    render(){
        return(
            <div className="suggestion">
    
                <div id="suggestavatar">
                    <Avatar  src={this.props.src} />
                    <h4 id="suggestionname">{this.props.name}</h4>
                    <div id="suggesttwthandle">{this.props.twthandle}</div>
                </div>
                <button className="suggestfolbtn" >Follow</button>   
                
            </div>
        );
    }
}

export class SuggestionsCard extends Component{
    render(){
        return(
            <div className={this.props.classname} >
                <Paper zDepth={1} >
                    <List>
                        <h3 id="whotofollow">Who to follow
                            <span id="refreshviewall">
                                <a href="/"><span>Refresh</span></a>
                                <a href="/"><span>View all</span></a>
                            </span>
                        </h3>
                        
                        <SuggestionsItems src={sug.u1.avatar} name={sug.u1.name} twthandle={sug.u1.twthandle} />
                    
                        <SuggestionsItems src={sug.u2.avatar} name={sug.u2.name} twthandle={sug.u2.twthandle} />
                        
                        <SuggestionsItems src={sug.u3.avatar} name={sug.u3.name} twthandle={sug.u3.twthandle} />
                       
                        <SuggestionsItems src={sug.u4.avatar} name={sug.u4.name} twthandle={sug.u4.twthandle} />
                        
                        <SuggestionsItems src={sug.u5.avatar} name={sug.u5.name} twthandle={sug.u5.twthandle} />
                    
                        <p id="findpeople"><span><i className="fas fa-users"></i></span><a href="/">Find people you know</a></p>
                        </List>
                </Paper>     
            </div>
        );
    }
}

export class TwtHelpLinks extends Component{
    render(){
        return(
            <div className={this.props.class}>
            <Paper>
                <div id="twthelplinks">
                    &copy; 2017 Twitter <a href="/">About</a> <a href="/">Help Center</a> <a href="/">Terms</a> <a href="/">Privacy policy</a>
                    &nbsp;<a href="/">Cookies</a> <a href="/">Ads info</a> <a href="/">Brand</a> <a href="/">Blog</a> <a href="/">Status</a> 
                    &nbsp;<a href="/">Apps</a> <a href="/">Jobs</a> <a href="/">Marketing</a> <a href="/">Business</a> <a href="/">Developers</a>
                </div>
            </Paper>
            </div>
        );
    }
}
