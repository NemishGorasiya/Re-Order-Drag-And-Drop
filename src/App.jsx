import { useState } from "react";
import "./App.css";
var colorArray = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
];
function App() {
  const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [draggingItem, setDraggingItem] = useState(null);
  const handelDrop = (event, item) => {
    if (!draggingItem) {
      return;
    }
    const draggingItemIdx = list.indexOf(draggingItem);
    const dropItemIdx = list.indexOf(item);
    if (
      draggingItemIdx === -1 ||
      dropItemIdx === -1 ||
      draggingItemIdx === dropItemIdx
    ) {
      return;
    }
    const temp = list[draggingItemIdx];
    const newList = [...list];
    newList.splice(draggingItemIdx, 1);
    newList.splice(dropItemIdx, 0, temp);
    setList(newList);
  };
  return (
    <>
      <div className="container">
        {list.map((item) => (
          <div
            className="item"
            key={item}
            draggable={true}
            onDragStart={() => {
              setDraggingItem(item);
            }}
            onDragOver={(event) => {
              // handelDrop(event, item);
              event.preventDefault();
            }}
            onDrop={(event) => handelDrop(event, item)}
            style={{
              background: colorArray[item - 1],
            }}
          >
            item {item}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
