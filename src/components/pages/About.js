import React from "react";
import News from "./News";

export default function About() {
  return (
    <div className="mx-auto my-2">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gcfaqvNDDwU"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <News />
    </div>
  );
}
