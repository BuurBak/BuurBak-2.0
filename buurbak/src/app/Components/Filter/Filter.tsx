import React from "react";
import Slider from "./RangeSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function Filter() {
  return (
    <main className="w-screen mx-auto flex-wrap">
      <div className="flex justify-between p-4">
        <button className="font-bold">Reset</button>
        <h1 className="font-bold text-xl">Filter</h1>
        <button>Burgermenu</button>
      </div>
      <div className="flex flex-col">
        <div className="bg-white m-3 px-3 pt-2 rounded">
          <p className="mb-2">Datum</p>
          <div className="relative mb-3">
            <input
              placeholder="DD/MM/JJJJ"
              className="bg-gray-100 h-10 p-3 rounded text-sm focus:outline-none w-full max-w-screen-lg mr-3"
            />
            <div className="absolute right-0 top-0 h-full flex items-center pr-3 text-gray-400">
              <FontAwesomeIcon icon={faCalendar} />
            </div>
          </div>
        </div>
        <div className="bg-white m-3 p-3 rounded flex flex-row justify-between">
          <p>Categorie</p>
          <button>Bekijk Alles</button>
        </div>
        <div className="bg-white m-3 p-3 rounded flex flex-row justify-between">
          <p>Locatie</p>
          <button>Laren</button>
        </div>
        <div className="bg-white m-3 p-3 rounded flex flex-col justify-between">
          <p className="mb-4">Prijs</p>
          <Slider />
          {/* slider moet nog beter gemaakt worden */}
        </div>
        <div className="bg-white m-3 p-3 rounded flex flex-col justify-between">
          <p className="mb-4">afmetingen</p>
          <div className="flex flex-row justify-between">
            <div className="flex flew-row">
              <p className="mr-1">L:</p>
              <input
                placeholder=""
                className="bg-white  px-2 pr-1 w-10 rounded text-sm focus:outline-none border-solid border-2 border-gray-500"
              />
              <p className="ml-1">Meter</p>
            </div>
            <div className="flex flew-row">
              <p className="mr-1">B:</p>
              <input
                placeholder=""
                className="bg-white  px-2 pr-1 w-10 rounded text-sm focus:outline-none border-solid border-2 border-gray-500"
              />
              <p className="ml-1">Meter</p>
            </div>
            <div className="flex flew-row">
              <p className="mr-1">H:</p>
              <input
                placeholder=""
                className="bg-white  px-2 pr-1 w-10 rounded text-sm focus:outline-none border-solid border-2 border-gray-500"
              />
              <p className="ml-1">Meter</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
