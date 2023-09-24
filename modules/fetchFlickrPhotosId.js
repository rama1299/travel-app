import axios from 'axios'

async function fetchFlickrPhotosId(photoId) {
    try {
        const response = await axios.get('https://www.flickr.com/services/rest/', {
        params: {
            method: 'flickr.photos.getInfo',
            api_key: 'e6fd55146627d245ed80f011fab1eb3b',
            format: 'json',
            nojsoncallback: 1,
            photo_id: photoId,
        },
        });
        
        const data = response.data.photo;
        const url = `https://farm${data.farm}.staticflickr.com/${data.server}/${data.id}_${data.secret}.jpg`

        const dataNew = {
            id: photoId,
            title: 'Seminyak Beach',
            harga: '750.000',
            tag: 'Perfect Romantic',
            detail: 'Tempat wisata unggulan di kawasan Seminyak adalah pesona alam pantai pasir putih yang terbentang indah dari Utara ke Selatan menghadap ke arah Barat, sehingga objek wisata pantai Seminyak Bali ini sangat ideal sekali untuk menyaksikan keindahan sunset.',
            url: url
        }
        return dataNew
    } catch (error) {
        console.log(error)
    }
}

export default fetchFlickrPhotosId