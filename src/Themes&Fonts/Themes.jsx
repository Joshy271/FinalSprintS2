import { useEffect, useState } from "react";
function Themes() {
  const [color, setcolor] = useState("body");
  const click = (color) => {
    setcolor(color);
  };
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Lakki+Reddy&display=swap');
      </style>
      <button className="Theme-1" onClick={() => click("#ff4949")}></button>
      <button className="Theme-2" onClick={() => click("#fab731")}></button>
      <button className="Theme-3" onClick={() => click("#fa00ff")}></button>
      <button className="Theme-4" onClick={() => click("#10028a")}></button>
      <button className="Theme-5" onClick={() => click("#9bff6c")}></button>
      <button className="Theme-6" onClick={() => click("#2c5aff")}></button>
      <button className="Theme-7" onClick={() => click("#ff7a00")}></button>
      <button className="Theme-8" onClick={() => click("#00e0ff")}></button>
      <h1 className="ThemesTitle">Themes</h1>
    </>
  );
}
export default Themes;
