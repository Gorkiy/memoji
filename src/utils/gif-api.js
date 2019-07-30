const API = 'Gg8myGJJ00rKTsHqkNwPNlmZsV92EHJB';
const searchURL = 'http://api.giphy.com/v1/gifs/search?q=';

class Gif {
  constructor(query, limit) {
    this.query = query;
    this.limit = limit;
    this.gifURL = null;
  }
  
  async getGIFs(query, limit) {
    const url = searchURL + this.query + '&api_key=' + API + '&limit=' + this.limit;
    const response = await fetch(url);
    const data = await response.json();
    return data['data'];
  }
  
  async setGifURL() {
    const images = await this.getGIFs(this.query, this.limit);
    // console.log(images);
    const url = await images[this.getRandomImage()]['images']['original']['url'];
    this.gifURL = url;
  }
  
  getRandomImage() {
    return Math.floor(this.limit * Math.random());
  }
  
}

export default Gif;