
export const testProjectsAction = () => {
  return {
    type: 'TEST_PROJECTS_ACTION'
  }
}

export const getProjects = (listProjects) => {
  return {
    type: 'GET_PROJECTS',
    listProjects: listProjects
  }
}

export const deleteProject = (id, index) => {
  return {
    type: 'DEL_PROJECTS',
    id: id,
    index: index
  }
}
