import { useState, useEffect, useRef } from "react";
import type { Article } from "../data";
import "../App.css";
import "../index.css";

type CardProps = {
  articles: Article[];
};

function Card({ articles }: CardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [filter, setFilter] = useState("All");
  const [sortNewest, setSortNewest] = useState(true);

  //useref är tom för jag vet inte vad jag ska skrive nu
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  const filteredNews = articles
    .filter((article) => filter === "All" || article.title === filter)
    .sort((a, b) =>
      sortNewest
        ? new Date(b.date).getTime() - new Date(a.date).getTime()
        : new Date(a.date).getTime() - new Date(b.date).getTime()
    );

  if (filteredNews.length === 0) {
    return <p>No articles for your filter found</p>;
  }

  const currentCard = filteredNews[currentIndex % filteredNews.length];
  //event handler

  const nextArticle = () => {
    setCurrentIndex((currentIndex + 1) % filteredNews.length);
    setIsExpanded(false);
  };

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <select
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setCurrentIndex(0);
          }}
        >
          <option>All</option>
          <option>School</option>
          <option>Tech</option>
          <option>Gaming</option>
        </select>
        <button
          style={{ marginLeft: "10px" }}
          onClick={() => setSortNewest(!sortNewest)}
        >
          {sortNewest ? "Newest" : "Oldest"}
        </button>
      </div>

      <div
        onClick={nextArticle}
        style={{
          width: "300px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        <img
          src={currentCard.image}
          alt={currentCard.title}
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <h2
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
        >
          {currentCard.title}
        </h2>
        <p>
          {isExpanded
            ? currentCard.description
            : currentCard.description.slice(0, 50) + "..."}
        </p>
      </div>
    </div>
  );
}

export default Card;
