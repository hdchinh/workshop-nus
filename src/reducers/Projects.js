import { delProject } from './../services/Projects'

let initState = {
  submit_name: 'Add Task',
  listProjects: []
  // list: localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [],
};

const ProjectsReducer = (state = initState, action) => {
  switch(action.type) {
    case 'TEST':
      return {...state};
    case 'GET_PROJECTS':
      state.listProjects = action.listProjects;
      return {...state};
    case 'DEL_PROJECTS':
      delProject(action.id)
      state.listProjects.splice(action.index, 1);
      // state.listProjects.splice(action.id, 1);
      return {...state};
    default: return state;
  }
}

export default ProjectsReducer;