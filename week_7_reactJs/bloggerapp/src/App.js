import React, { useState } from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  const [view, setView] = useState("book"); // can be "book", "blog", "course"
  const [showCourse, setShowCourse] = useState(true);

  // Way 1: if-else
  let content;
  if (view === "book") {
    content = <BookDetails />;
  } else if (view === "blog") {
    content = <BlogDetails />;
  } else {
    content = <CourseDetails />;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Blogger App</h1>

      {/* Buttons to change view */}
      <button onClick={() => setView("book")}>Show Book</button>
      <button onClick={() => setView("blog")}>Show Blog</button>
      <button onClick={() => setView("course")}>Show Course</button>

      <hr />

      {/* Way 1: if-else result */}
      {content}

      <hr />

      {/* Way 2: Ternary operator */}
      {view === "book" ? <BookDetails /> : <BlogDetails />}

      <hr />

      {/* Way 3: Logical AND */}
      {showCourse && <CourseDetails />}

      <hr />

      {/* Way 4: Switch case function */}
      {(() => {
        switch (view) {
          case "book":
            return <BookDetails />;
          case "blog":
            return <BlogDetails />;
          case "course":
            return <CourseDetails />;
          default:
            return null;
        }
      })()}
    </div>
  );
}

export default App;


