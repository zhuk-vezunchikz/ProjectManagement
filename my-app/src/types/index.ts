export interface Project {
    id: number,
    name: string,
    description: string,
    user: User
}

export interface User {
    id: number,
    name: string
}