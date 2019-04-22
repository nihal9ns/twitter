import React, { Component } from "react";
import { Navbar } from "./Navbar.js";
import { ProfileCard } from "./ProfileCard.js";
import { profcard } from "./constdata.js";
import { TrendsCard } from "./TrendsCard.js";
import { TimelineFeeds, TimelineTweetbar } from "./TimelineFeeds.js";
import { SuggestionsCard, TwtHelpLinks } from "./SuggestionsCard.js";

const my = { mypro: profcard.mypro };
export class TimelinePage extends Component {
  render() {
    return (
      <div>
        <Navbar plc="Search Twitter" />
        <ProfileCard
          className={my.mypro.className}
          bgimg={my.mypro.bgimg}
          avaimg={my.mypro.avaimg}
          name={my.mypro.name}
          twthandle={my.mypro.twthandle}
          twt={my.mypro.twt}
          flwing={my.mypro.flwing}
          flwers={my.mypro.flwers}
        />
        <TrendsCard divclass="trendspapercarddiv" />
        <TimelineTweetbar />
        <TimelineFeeds dispornodisp="avahoverprofcard" />
        <SuggestionsCard classname="suggestionspapercarddiv" />
        <TwtHelpLinks class="twthelplinksdiv" />
      </div>
    );
  }
}
