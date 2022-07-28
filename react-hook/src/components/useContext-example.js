import { useContext } from "react";
import { ExampleContext } from "../App";

export default function UseContextExample() {
  const { color } = useContext(ExampleContext);

  return <p style={{ color }}>This text is {color}</p>
}