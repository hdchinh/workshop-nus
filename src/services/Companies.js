import axios from 'axios';

export const getCompany = () => {
  axios.post('https://nus-react-demo-backend.herokuapp.com/v1/companies', {
    company: {
      name: 'meovangdilonton'
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
