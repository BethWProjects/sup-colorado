const fetchDestinations = () => {
    return fetch('https://sup-colorado-api.vercel.app/api/v1/destinations')
    .then(response => {
      if (!response.ok) {
          throw new Error('Not a 200 status')
      }
      return response.json()
    })
  };

export { fetchDestinations }