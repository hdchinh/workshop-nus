import axios from 'axios';

export const delProject = (id) => {
  const headers = {
    'Content-Type': 'application/json',
    'api_key': 'comp-1568382003-_HLDmZWo2CQFmNgVtbMGlA'
  }

  axios.delete(`https://nus-react-demo-backend.herokuapp.com/v1/projects/${id}`, { headers: headers })
  .then(function (response) {
    // console.log(response.data);
    // _this.props.getProjects(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}