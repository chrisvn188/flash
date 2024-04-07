const projects = [
    {
        title: 'work',
        todos: [
            {
                title: 'Create a new website',
            },
        ],
        active: true,
    },
    {
        title: 'personal',
        todos: [
            {
                title: 'Create a new habit',
            },
        ],
        active: false,
    },
    {
        title: 'family',
        todos: [
            {
                title: 'Create a new family',
            },
            {
                title: 'Getting married',
            },
        ],
        active: false,
    },
    {
        title: 'play',
        todos: [
            {
                title: 'Create a new sport',
            },
            {
                title: 'Running for 15 mins a day',
            },
        ],
        active: false,
    },
]

export const getProjects = () => {
    return projects
}

export const addNewProjectToList = (newProject) => {
    projects.unshift(newProject)
}

export const changeActiveProject = (title) => {
    projects.forEach((project) => {
        if (project.title === title) {
            project.active = true
        } else project.active = false
    })
}

export const getActiveProject = () => {
    return projects.find((p) => p.active)
}
