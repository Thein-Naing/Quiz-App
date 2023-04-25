import { useState } from "react";

 function Square ({value, onClick}) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default function Board () {
  const [sqaures, setSquares] = useState(Array(9).null);
  const [isX, setIsX]  = useState(true);

return (
<div classname="board">
<div classname="board-row">
<Square value={"X"} />
<Square value={"0"} />
<Square value={"X"} />
</div>
<div classname="board-row">
<Square value={"0"} />
<Square value={"X"} />
<Square value={"0"} />
</div>
<div classname="board-row">
<Square value={"X"} />
<Square value={"0"} />
<Square value={"X"} />
</div>
</div>

)}
