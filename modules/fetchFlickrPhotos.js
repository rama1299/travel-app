import axios from 'axios'

async function fetchFlickrPhotos() {
  try {
    const response = await axios.get('https://www.flickr.com/services/rest/', {
      params: {
        method: 'flickr.photos.search',
        api_key: 'e6fd55146627d245ed80f011fab1eb3b',
        format: 'json',
        nojsoncallback: 1,
        text: 'nature',
        per_page: 8,
      },
    });

    const data = response.data.photos.photo
    const dataNew = data.map(item => ({
        ...item,
        imageUrl: `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`,
        rating: Math.floor(Math.random() * 5) + 1
    }))
    return dataNew
  } catch (error) {
    console.error('Error fetching Flickr data:', error);
  }
}

// async function fetchFlickrPhotosId(photoId) {
//     try {
//         const response = await axios.get('https://www.flickr.com/services/rest/', {
//         params: {
//             method: 'flickr.photos.getInfo',
//             api_key: 'e6fd55146627d245ed80f011fab1eb3b',
//             format: 'json',
//             nojsoncallback: 1,
//             photo_id: photoId,
//         },
//         });
        
//         const data = response.data.photo.urls.url
//         const dataNew = {
//             id: photoId,
//             title: 'Seminyak Beach',
//             harga: '750.000',
//             tag: 'Perfect Romantic',
//             detail: 'Tempat wisata unggulan di kawasan Seminyak adalah pesona alam pantai pasir putih yang terbentang indah dari Utara ke Selatan menghadap ke arah Barat, sehingga objek wisata pantai Seminyak Bali ini sangat ideal sekali untuk menyaksikan keindahan sunset.',
//             url: data[0]._content
//         }
//         return dataNew
//     } catch (error) {
//         console.log(error)
//     }
// }

export default fetchFlickrPhotos