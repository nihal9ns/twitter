import React, { Component } from 'react';
import { Navbar } from '../components/Navbar.js';
import { TrendsCard } from '../components/TrendsCard.js';
import { SearchTweetFeeds } from './SearchTweetFeeds.js';
import { SuggestionsCard,TwtHelpLinks } from '../components/SuggestionsCard.js';
import { Searchnavbar } from './Searchnavbar.js';
import { SearchFilters } from './SearchFilters.js';

export class AadharPage extends Component{
    render(){
        return(
            <div>
                <Navbar plc="aadhar"/>
                <Searchnavbar />
                <SearchFilters />
                <TrendsCard divclass="searchtrendsdiv"/>
                <SuggestionsCard classname="searchpgwhotoflw" />
                <TwtHelpLinks class="searchpgtwtlinks"/>
                <SearchTweetFeeds  />
            </div>
        );
    }
}
