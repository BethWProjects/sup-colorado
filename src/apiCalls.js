const fetchDestinations = () => {
    return fetch('https://sup-colorado-api.vercel.app/api/v1/destinations')
  };

export { fetchDestinations }