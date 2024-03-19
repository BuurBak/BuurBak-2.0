"use client";

import Search from "./Components/Search/Search";
import Filter from "./Components/Filter/Filter";

export default function Home() {
  return (
    <main className="flex flex-row mx-auto">
      <div>
        <Filter />
      </div>
    </main>
  );
}
