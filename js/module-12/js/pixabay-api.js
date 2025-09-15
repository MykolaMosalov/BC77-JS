axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getPhotos(q, page, perPage) {
  const API_KEY = '22356210-f5a6fb995cd777b2b01184cc9';

  const res = await axios.get('', {
    params: {
      image_type: 'photo',
      orientation: 'horizontal',
      q,
      page,
      per_page: perPage,
      key: API_KEY,
      safesearch: true,
    },
  });

  return res.data;
}
