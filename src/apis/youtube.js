import axios from 'axios';

const KEY = 'AIzaSyDheiDiIdchI4pO0CfFTgsxj7mOTUs5ico';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
