import React from "react";

function News({ title, description, imageUrl }) {
  return (
    <section className="News__Card">
      <h3>{title}</h3>
      <img src={imageUrl} alt="news__thumbnail" />
      <p className="p-text">{description}</p>
    </section>
  );
}

export default News;
