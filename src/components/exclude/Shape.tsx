import React from "react";
// typescript exclude
type ShapeType = "cube" | "square" | "rectangle" | "triangle";
type twoDShapeType = Exclude<ShapeType, "cube">;
type ThemeType = "dark" | "light";
type ColorType = "red" | "green" | "blue";
type ItemProps = {
  color: Exclude<`${ThemeType}-${ColorType}`, "dark-green">;
};
const Shape = (props: ItemProps) => {
  const shape: ShapeType = "cube";
  const twoDShape: twoDShapeType = "rectangle";
  return <div>Shape</div>;
};

export default Shape;
