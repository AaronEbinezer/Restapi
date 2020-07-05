
const Promise = require('bluebird')
const AppDAO = require('./dao')
// const ProjectRepository = require('./project_repository')
// const TaskRepository = require('./task_repository')

function main() {
    const dao = new AppDAO('./holybible.db').get(
        `SELECT Book FROM bible WHERE Chapter = ?`,
        [2]);
}


main()