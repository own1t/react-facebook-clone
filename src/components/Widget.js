import React from "react";
import "./Widget.css";

function Widget() {
  return (
    <>
      <div className="widget">
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyoungjoon.kim.7543%2Fposts%2F2016689621801244&show_text=true&width=552&appId=754386582020753&height=497"
          width="552"
          height="497"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameborder="0"
          allowTransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    </>
  );
}

export default Widget;
