import React from "https://esm.sh/react@19";
import ReactDOM from "https://esm.sh/react-dom@19/client";

let artistData = {
  artist: ["The Weeknd", "lil tecca", "Glok40spaz"],
  image: [
    "https://akns-images.eonline.com/eol_images/Entire_Site/2021330/rs_1200x1200-210430163406-1200-the-weeknd.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top",
    "https://i.scdn.co/image/ab6761610000e5ebeeba43c460454fcababda14f",
    "https://viberate-upload.ams3.cdn.digitaloceanspaces.com/prod/entity/artist/glokk40spaz-6VnuC"
  ],
  famousSongs: [
    "Save Your Tears, I Can't Feel My Face, Blinding Lights",
    "Rasom, Taste, and Bad time",
    "Round here, I Choose Violence, and the high table"
  ]
};

// 1. ArtistCards component using props
function ArtistCards(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} width="250" />
      <p><strong>Popular Songs:</strong> {props.songs}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 className="title">MusicPedia</h1>
      <h2 className="subheading">Find out info about your favorite artists 🎶🔍</h2>
      
      {/* Render ArtistCards dynamically from artistData */}
      <ArtistCards
        name={artistData.artist[0]}
        image={artistData.image[0]}
        songs={artistData.famousSongs[0]}
      />
      <ArtistCards
        name={artistData.artist[1]}
        image={artistData.image[1]}
        songs={artistData.famousSongs[1]}
      />
      <ArtistCards
        name={artistData.artist[2]}
        image={artistData.image[2]}
        songs={artistData.famousSongs[2]}
      />
      
      {/* Extra card - your favorite artist */}
      <ArtistCards
        
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
