export const exerciseOptions = {
	method: 'GET',
	headers: {
		 'x-rapidapi-key': '6d8e5be9f6msh7dad6b4d319d472p1c7b1djsnb321408f4501',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};

export const youtubeOptions = {
	method: 'GET',
	headers: {
	  'x-rapidapi-key': '6d8e5be9f6msh7dad6b4d319d472p1c7b1djsnb321408f4501',
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
	}
  };


export const fetchData = async (url, options) => {
	const response = await fetch(url, options);
	const data = await response.json();

	return data;
}