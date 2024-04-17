import React, { useState, useEffect, useRef } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimer';

const InfiniteScroll = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (
        container?.scrollTop + container?.clientHeight >=
          container?.scrollHeight &&
        !loading
      ) {
        fetchData();
      }
    };

    container?.addEventListener('scroll', handleScroll);

    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, [loading]);

  const fetchData = async () => {
    setLoading(true);
    // Fetch data from the API
    try {
      const response = await fetch(
        "https://api.allorigins.win/raw?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D15.8323892%26lng%3D78.0544946%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING&page=${page}"
      );
      const data = await response.json();
      const newRestaurants =
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setListOfRestaurants((prev) => [...prev, ...newRestaurants]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Simulate loading indicator
  if (loading && !listOfRestaurants.length) {
    return <Shimmer />;
  }

  return (
    <div
      ref={containerRef}
      className="flex flex-wrap"
      style={{ overflowY: 'auto', height: '80vh' }}
    >
      {listOfRestaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
      ))}
      {loading && <Shimmer />}
    </div>
  );
};

export default InfiniteScroll;