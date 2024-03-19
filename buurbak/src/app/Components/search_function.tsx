<<<<<<< Updated upstream
import { useState, useEffect } from 'react'
import { TrailerList } from '../Types/TrailerList'
import { TrailerType } from '../Types/TrailerType'
=======
import { useState, useEffect } from "react";
import { TrailerList } from "../Types/TrailerList";
>>>>>>> Stashed changes
const DEFAULT_CENTER = {
  lat: 52.131401,
  lng: 5.42747,
};

<<<<<<< Updated upstream
export default function searchOrFilter() {
  const [data, setData] = useState<TrailerList[]>([])
  const [isLoading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterDate, setFilterDate] = useState<Date>()
  const [filterType, setFilterType] = useState<TrailerType>()
  const [filterPrice, setFilterPrice] = useState<number>()
  const [filterDimensions, setFilterDimensions] = useState()
  const [centerCoordinates, setCenterCoordinates] = useState(DEFAULT_CENTER)
  const [filteredTrailers, setFilteredTrailers] = useState<TrailerList[]>([])
=======
export default function SearchOrFilter() {
  const [data, setData] = useState<TrailerList[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  const [centerCoordinates, setCenterCoordinates] = useState(DEFAULT_CENTER);
  const [filteredTrailers, setFilteredTrailers] = useState<TrailerList[]>([]);
>>>>>>> Stashed changes

  const haversineDistance = (coords1: any, coords2: any) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (coords2.lat - coords1.lat) * (Math.PI / 180);
    const dLon = (coords2.lng - coords1.lng) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((coords1.lat * Math.PI) / 180) *
        Math.cos((coords2.lat * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  useEffect(() => {
    fetch("https://pilot.buurbak.nl/api/v1/traileroffers")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filteredAndReordered = [...data].filter((trailer) => {
      return (
        (!searchTerm ||
          trailer.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (!searchTerm ||
          trailer.trailerType.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())) &&
        (!searchTerm ||
          trailer.cityAddress.city
            .toLowerCase()
            .includes(searchTerm.toLowerCase())) &&
<<<<<<< Updated upstream
        (!filterType || trailer.trailerType.name === filterType.name) &&
        (!filterPrice || trailer.price <= filterPrice)
      )
    })
=======
        (!activeCategory || trailer.trailerType.name === activeCategory)
      );
    });
>>>>>>> Stashed changes
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
    function success(position: {
      coords: { latitude: number; longitude: number };
    }) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setCenterCoordinates({ lat: latitude, lng: longitude });
    }

    function error() {
      console.log("Unable to retrieve your location");
    }
    if (
      centerCoordinates.lat !== DEFAULT_CENTER.lat ||
      centerCoordinates.lng !== DEFAULT_CENTER.lng
    ) {
      filteredAndReordered = filteredAndReordered.sort((a, b) => {
        const distanceA = haversineDistance(
          { lat: a.nearbyLatitude, lng: a.nearbyLongitude },
          centerCoordinates
        );
        const distanceB = haversineDistance(
          { lat: b.nearbyLatitude, lng: b.nearbyLongitude },
          centerCoordinates
        );
        return distanceA - distanceB;
      });
    }

<<<<<<< Updated upstream
    setFilteredTrailers(filteredAndReordered)
  }, [data, searchTerm, filterType, centerCoordinates])
=======
    setFilteredTrailers(filteredAndReordered);
  }, [data, searchTerm, activeCategory, centerCoordinates]);
>>>>>>> Stashed changes

  return <div></div>;
}
<<<<<<< Updated upstream
=======

function compareValues<T>(
  value1: T,
  value2: T,
  otherValue1: T,
  otherValue2: T
) {
  if (value1 !== value2 && otherValue1 !== otherValue2) {
  }
}
>>>>>>> Stashed changes
