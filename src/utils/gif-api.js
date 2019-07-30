const API = 'Gg8myGJJ00rKTsHqkNwPNlmZsV92EHJB';
const searchURL = 'http://api.giphy.com/v1/gifs/search?q=';

class Gif {
  constructor(query, limit) {
    this.query = query;
    this.limit = limit;
    this.gif = null
  }
  
  async getGIFs(query, limit) {
    const url = searchURL + this.query + '&api_key=' + API + '&limit=' + this.limit;
    const response = await fetch(url);
    const data = await response.json();
    return data['data'];
  }
  
  async setGifURL() {
    const imageNum = this.getRandomImage();
    const images = await this.getGIFs(this.query, this.limit);
    
    const img = images[imageNum];
    console.log(img);
    const url = img['images']['original']['url'];
    const alt = img['title'];
    
    this.gifURL = url;
    this.gif = {
      src: url,
      alt: alt
    }
  }
  
  getRandomImage() {
    return Math.floor(this.limit * Math.random());
  }
  
}

export default Gif;