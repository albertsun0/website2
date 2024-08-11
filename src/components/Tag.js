import React from "react";

const colors = ["#536dfe", "#81c784", "#ff8f00"];

function Tag({ name }) {
  return (
    <div
      className={`px-2 rounded-full text-md border overflow-hidden mb-2 mr-2 dark:text-white`}
      style={{
        borderColor: colors[(name.charCodeAt(0) - 65) % colors.length],
      }}
    >
      {name}
    </div>
  );
}

export default Tag;
