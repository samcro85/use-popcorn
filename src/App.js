import { useState } from "react";
import Navbar from "./components/Navbar";
import ListBox from "./components/ListBox";
import WatchedBox from "./components/WatchedBox";

export default function App() {
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
}

function Main() {
  return (
    <main className="main">
      <ListBox />
      <WatchedBox />
    </main>
  );
}
