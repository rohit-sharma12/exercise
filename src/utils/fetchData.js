export const exerciseOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '8e407dad97msh1abe4a9a2bfb8d4p1c6e14jsn955155eb5fdf',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};

export const youtubeOptions = {
	method: 'GET',
	headers: {
	  'x-rapidapi-key': '8e407dad97msh1abe4a9a2bfb8d4p1c6e14jsn955155eb5fdf',
	  'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
	}
  };


export const fetchData = async (url, options) => {
	const response = await fetch(url, options);
	const data = await response.json();

	return data;
}