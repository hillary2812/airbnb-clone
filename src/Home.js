import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      {/* <h1>Home Component</h1> */}
      <Banner />

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=720"
          title="Unique stays"
          description="Spaces are more than just a place to sleep"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places for family and friends"
        />

        <Card
          src="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=720"
          title="Cabins and cottages"
          description="You’ll have the cottage to yourself."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/a84e92bd-68e6-4ce2-9fdf-b2ce1a377f53.jpg?im_w=720"
          title="HOST AN EXPERIENCE ON AIRBNB"
          description="Earn money leading people on activities you love."
          price="$50/night"
        />

        <Card
          src="https://a0.muscache.com/im/pictures/426a8116-0b94-4407-ae87-924126c81d78.jpg?im_w=720"
          title="Pet-friendly stays"
          description="OVI'S Holiday Homes - Living in Lonavala"
          price="$350/night"
        />

        <Card
          src="https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg?im_w=720"
          title="Host your Home"
          description="Decide how you want to host"
          price="$70/night"
        />
      </div>
    </div>
  );
}

export default Home;
