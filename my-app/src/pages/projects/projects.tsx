import React from 'react';

interface Project {
    id: number,
    name: string,
    description: string,
    //user: User,
}

export const ProjectsPage = ({id, name, description}: Project) => {
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{description}</div>
            <div>User</div>
        </div>
    )
}
