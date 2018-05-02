import React from 'react';
import ReactDOM from 'react-dom';
import Gig from '../Gig';
var contentful = require('contentful');

const client = contentful.createClient({
  space: 'rdg6oe8xsim4',
  accessToken: 'c6f3706042a90751d7013b68c312dbc1254ef039c9957e6d420c628232c0114e'
})

const UserModel = {
    name: {type: String},
    twitter: {type: String},
    birthdate: {type: Date,
      title: 'Date of Birth'},
    cats: {type: Number},
    dogs: {type: Number},
    active: {type: Boolean}
  };
  
const gigs = {};

client.getEntries()
.then(function (entries) {
  // log the title for all the entries that have it
  entries.items.forEach(function (entry) {
    console.log(entry);
    if(entry.fields.productName) {
      console.log(entry.fields.productName)
    }
  })
})
  
function Gigs() {
  return (
    <div>
      <hr/>
      {Object.keys(gigs).map((gigId, index) => {
        let gig = gigs[gigId];
        return <Gig 
          title={gig.title}
          location={gig.location}
          date={gig.date}
          time={gig.time}
          eventLink={gig.eventLink}
          key={index}
        />;
      })}
    </div>
  );
}

export default Gigs;