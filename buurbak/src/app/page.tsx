"use client";

import Search from "./Components/Search/Search";
import Filter from "./Components/Filter/Filter";

export default function Home() {
  return (
    <main className="flex flex-row h-screen w-screen bg-gray-200">
      <div>
        <Filter />
      </div>
    </main>
  );
}
