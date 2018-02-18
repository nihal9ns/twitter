import FlatButton from 'material-ui/FlatButton';
import React from 'react';

//this is the data of my profile card

export const profcard ={
        mypro:{
            className: 'homepagemyprofilecard',
            bgimg:'',
            avaimg: 'https://pbs.twimg.com/profile_images/929275988248104960/aiZt2ho4_bigger.jpg',
            name: 'Nihal Kaul',
            twthandle: '@nihal9ns',
            twt:'9',
            flwing: '116',
            flwers: '9'
        },
    }

//this styles are for dropdown menu of a tweet

export const styles = {
    usernamestyle:{
        fontWeight: 'bold'
    },
    subtitlestyle:{
        fontSize: '14px',
        fontWeight:'normal',
        color: 'black'
    },
    dropdownmenu:{
        width: '200px',
        borderRadius:'10px',
        border:'1px solid #A4D9F9',
        background: 'white',
        marginLeft:'550px',
        marginTop:'-30px',
        position: 'absolute',
        zIndex:'2'
    },
    listitem:{
        color:'black',
        fontWeight: '700'
    },
    mediastyle:{
        width: '85%',
        marginLeft: '12%'
    },
};

//this styles are for pop up of tweet button
export const popup ={
    btn:{
        borderRadius: '19px',
    },

    btnhover: "#1da1f2",

    titlestyle:{
        textAlign: 'center',
        fontSize: '18px',
        fontWeight: 'bold',
        paddingTop: '10px',
        paddingBottom: '5px',
        borderBottom: '1px solid rgba(29,161,242,0.25)'
    }
  };

//this are the buttons displayed inside of the tweet pop up

export const actbtn = [
    <FlatButton
    icon={<i className="fas fa-camera-retro"></i>}
    style={popup.btn}
    disableTouchRipple={true}
    hoverColor={popup.btnhover}
    title="upload picture"            
    />,
    <FlatButton
    icon={<i className="far fa-image"></i>}
    style={popup.btn}
    disableTouchRipple={true}
    hoverColor={popup.btnhover}  
    title="upload GIF"          
    />,
    <FlatButton
    icon={<i className="far fa-chart-bar"></i>}
    style={popup.btn}
    disableTouchRipple={true}
    hoverColor={popup.btnhover}
    title="Polls"            
    />,
    <FlatButton
    icon={<i className="fas fa-map-marker"></i>}
    style={popup.btn}
    disableTouchRipple={true}
    hoverColor={popup.btnhover}
    title="Location"            
    />,
    <FlatButton
    disabled={true}
    disableTouchRipple={true}
    children=" "                       
    />
    ];

//this is the data of the timeline tweets...It also has profile card 
//data that is viewed when mouse hovered over avatar

export const tweetdata = {
    user1:{
        avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQGlFgOPs3E91MIG6PuyuK6N0ybwKhLlaIMdImR5TStgk5z93fAg",
        title:"Shirley Setia",
        twthandle:"@ShirleySetia",
        twt: "10.4K",
        flwing:"232",
        flwers:"667K",
        subtitle:` Catch me live and loud at @gaana @Crossbladelive Music Festival on 24th Feb! `,
        imgsrc:"https://pbs.twimg.com/media/DWDPj8gXUAAHokn.jpg",
        replies:"290",
        retweets:"4.8K",
        likes:"31K"
    },
    user2:{
        avatar:"https://pbs.twimg.com/profile_images/789817267567472640/BlpcUEvx_bigger.jpg",
        title:"Virat Kohli",
        twthandle:"@imVkohli",
        twt: "1430",
        flwing:"52",
        flwers:"23M",
        subtitle:"So proud of the whole unit. 🙏👍 What a series win. Jai Hind!",
        imgsrc:"https://pbs.twimg.com/media/DWLfMpDWAAEf0uA.jpg",
        replies:"3.4K",
        retweets:"4.0K",
        likes:"168"
    },
    user3:{
        avatar:"https://pbs.twimg.com/profile_images/958257535915458560/UuzlIwbb_400x400.jpg",
        title:"Hasura",
        twthandle:"@HasuraHQ",
        twt: "1203",
        flwing:"252",
        flwers:"1452",
        subtitle:"Git push and deploy a rust-rocket app to an HTTPS domain with no setup or configuration!🚀💪",
        imgsrc:"https://pbs.twimg.com/media/DWLHWaKW4AA1uY3.png",
        replies:"735",
        retweets:"6.9K",
        likes:"41K"
    },
    user4:{
        avatar:"https://pbs.twimg.com/profile_images/827354992377860096/sUe4dG_L_400x400.jpg",
        title:"JavaScript",
        twthandle:"@JavaScript",
        twt: "134",
        flwing:"436",
        flwers:"9163",
        subtitle:"Type  conversions as and when they happen!",
        imgsrc:"https://pbs.twimg.com/card_img/963043601252016128/PDvIeofW?format=jpg&name=600x314",
        replies:"283",
        retweets:"289",
        likes:"14K"
    }
};

//the the following data is used to render suggestions bar on the right side of page

export const suggest={
    user1:{
        avatar:"https://pbs.twimg.com/profile_images/915202136740315137/NGe0Ok-d_400x400.jpg",
        name:"Anushka Sharma",
        twthandle:"@AnushkaSharma"
    },
    user2:{
        avatar:"https://pbs.twimg.com/profile_images/661679664/keep_it_onn_bigger.jpg",
        name:"Shah Rukh Khan",
        twthandle:"@iamsrk"
    },
    user3:{
        avatar:"https://pbs.twimg.com/profile_images/852874627181367297/BhCGvY6d_bigger.jpg",
        name:"Hrithik Roshan",
        twthandle:"@iHrithik"
    },
    user4:{
        avatar:"https://pbs.twimg.com/profile_images/932288112910389248/IsKVxzqN_400x400.jpg",
        name:"Johnny Depp",
        twthandle:"@realDepp"   
    },
    user5:{
        avatar:"https://pbs.twimg.com/profile_images/741703039355064320/ClVbjlG-_bigger.jpg",
        name:"Ryan Reynolds",
        twthandle:"@VancityReynolds"
    }
};

export const searchtwt = {
    user1:{
        avatar:"https://pbs.twimg.com/profile_images/670707650783412225/pYEQJT3E_400x400.jpg",
        title:"Parmindar",
        subtitle:`@TOIIndiaNews Even after SC has extended the deadline for Aadhar 
        linking to a/c TOI still publishing stale news/story. WAKE UP.`,
        imgsrc:"https://pbs.twimg.com/media/DQvQSpxUEAIvGM7.jpg",
        replies:"2",
        retweets:"4",
        likes:"15"
    },
    user2:{
        avatar:"https://pbs.twimg.com/profile_images/869201850217713668/5lUcaV84_bigger.jpg",
        title:"Humans of Aadhar",
        subtitle:`No #Aadhar No Disability Allowance of ₹ 600
        Mamomi, 100% "certified" disabled from Balurghat, West Bengal`,
        imgsrc:"https://pbs.twimg.com/media/DQoUgDkVQAAQxzN.jpg",
        replies:"2",
        retweets:"7",
        likes:"2"
    },
    user3:{
        avatar:"https://pbs.twimg.com/profile_images/1195554309/FE-for-Facebook_bigger.jpg",
        title:"Financial Express",
        subtitle:`#Aadhar card linking with PAN card last date: Good news! 
        Government extends date to 31st March, 2018`,
        imgsrc:"https://pbs.twimg.com/media/DQgom9tU8AAsoqW.jpg",
        replies:"1",
        retweets:"3",
        likes:"4"
    },
    user4:{
        avatar:"https://pbs.twimg.com/profile_images/891033451599507456/_pnMMcAc_bigger.jpg",
        title:"KhaaliJeb",
        subtitle:"Aadhaar will work as weapon against benami properties: PM Modi at HT Summit",
        imgsrc:"https://pbs.twimg.com/media/DP3VPtIX0AEgVVl.jpg",
        replies:"3",
        retweets:"20",
        likes:"1"
    }
};
