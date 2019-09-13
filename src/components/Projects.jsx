import React from 'react';
import { Col, Row, Button, Table } from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import { testUsersAction } from './../actions/Users';
import { getProjects, deleteProject } from './../actions/Projects';

class Projects extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const _this = this;

    const headers = {
      'Content-Type': 'application/json',
      'api_key': 'comp-1568382003-_HLDmZWo2CQFmNgVtbMGlA'
    }

    axios.get('https://nus-react-demo-backend.herokuapp.com/v1/projects', { headers: headers })
    .then(function (response) {
      console.log(response.data);
      _this.props.getProjects(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleChangeName = () => {
    this.props.testUsersAction();
  }

  deleteProject = (e, id, index) => {
    this.props.deleteProject(id, index);
  }

  renderProjects = () => {
    let projects = this.props.projects.map((item, index) => {
      return(
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{item.name}</td>
          <td><Button variant="warning">Edit</Button></td>
          <td>
            <Button variant="danger" onClick={((e) => this.deleteProject(e, item.id, index))}>
              Delete
            </Button>
          </td>
        </tr>
      )
    })

    return projects;
  }

  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Project Name</th>
              <th>Edit Project</th>
              <th>Delete Project</th>
            </tr>
          </thead>

          <tbody>
            {this.renderProjects()}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects.listProjects
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    testUsersAction: () => {
      dispatch(testUsersAction());
    },
    getProjects: (projects) => {
      dispatch(getProjects(projects));
    },
    deleteProject: (id, index) => {
      dispatch(deleteProject(id, index));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
