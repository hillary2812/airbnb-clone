import { Button } from "@material-ui/core";
import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 says . 26 august to 30 august . 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/928c6296-3b28-491a-a579-e696b8928870.jpg?im_q=medq&im_w=720"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 quest . 1 bedroom . 1 bed . 1.5 shared bathroom . Wifi . Kitchen . Free parking . Washing Machine"
        star={4.73}
        price="$30/night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/166d3bc2-b53e-4b96-a3df-d4140f713dcd.jpg?im_w=720"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 quest . 1 bedroom . 1 bed . 1.5 shared bathroom . Wifi . Kitchen . Free parking . Washing Machine"
        star={4.73}
        price="$30/night"
        total="$117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/f5f9a67e-c4e5-4307-9250-be0bab5d91bd.jpg?im_w=720"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 quest . 1 bedroom . 1 bed . 1.5 shared bathroom . Wifi . Kitchen . Free parking . Washing Machine"
        star={4.73}
        price="$30/night"
        total="$117 total"
      />
    </div>
  );
}

export default SearchPage;
