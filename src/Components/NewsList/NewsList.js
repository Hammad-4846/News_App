import React from "react";
import News from "../News";

import "./NewsList.css";
import { newsData } from "../../newsData";

function NewsList() {
  return (
    <section className="container container__section">
      <h1 style={{ textAlign: "center" }}>Explore News</h1>
      <div className="container news__container">
        {newsData.map((element, index) => (
          <News
            key={index}
            title={element.title}
            imageUrl={element.imgUrl}
            description={element.description}
          />
        ))}
      </div>
    </section>
  );
}

export default NewsList;
