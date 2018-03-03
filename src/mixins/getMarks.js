import axios from 'axios';

function fetchMarks() {
  return new Promise( (resolve, reject) =>
    axios({
      method: 'GET',
      url: '/api/0.3/?cmd=getMakes'
    }).then((response) => {
      resolve(response.data.Makes.map(maker => maker.make_display));
    }).catch((e) => reject(e))
  )
}

export default {
  mounted() {
    fetchMarks()
      .then(data => console.log(data))
      .catch(e => console.error(e));
  }
}