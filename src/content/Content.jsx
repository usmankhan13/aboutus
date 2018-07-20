import React, { Component } from 'react';
import './Content.css'
import k3 from './k3.jpg';
import kk from './kk.jpg';
class Content extends Component {
  render() {
    return (
      <div className='pt-5 pb-5'>
        <h2 className="text-center">It all started as an idea at the kitchen table…</h2>
            
            <p className="text-justify  pt-3 pb-5"> It was created and founded in 2012 by Karen Scalia. With a passion for fresh local foods, a love of cooking and history,
                and a background in event planning as well as the performing arts—she knew that sharing Salem’s past 
                with a ‘taste’ of the culinary present was the perfect way to understand and 
                appreciate this much-loved city. Salem is situated right on the water,
                with a rich spice trade history and a modern thriving culinary scene.
            </p>
            <img className=" img-fluid  text-center image  " src={k3} />
            
            <h2 className="text-center pt-5 ">It all started as an idea at the kitchen table…</h2>
            
            <p className="text-justify  pt-3 pb-5">"Salem continues to grow as a food destination.Our award-winning restaurants,
                    shops, Farmers Market, and food and wine events, make this wonderful historic city that much tastier!
                    As a Tour, we love to teach about these resources. Our Tour Partners are the best of the best, offering homemade and freshly prepared foods, and source local items such as seafood and others. Meeting the amazing people behind these local businesses really helps you understand how special a place Salem is.
                    My family influenced my food choices early on.  There was no better place to eat than my Papa’s garden or table. Thinking about my Nana’s homemade pasta or my Aunt Angie’s stuffed artichokes still puts a smile on my face.
                    Like many, my favorite memories involve food and the experience of sharing a meal with family and friends.  You simply can’t beat a great dinner party.
                    With this in mind, we strive for all Salem Food Tours to offer an exceptional and fun experience for both the local visitor and traveler alike. It’s truly “like a roaming dinner party”, with all of your senses engaged.  
                    Each Tour is unique, and we hope you’ll return again!"
                     Warm regards
            </p>

            <img className="img-fluid  text-center image " src={kk} />
      </div>
    );
  }
}

export default Content;
