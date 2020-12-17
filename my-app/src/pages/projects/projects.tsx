import React, {FC, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUserEpic, ProjectState} from "./reducer/reducer.projects";
import {Dispatch} from "redux";
import {ActionsProject, ActionsUser, projectActions, userActions} from "./action/action.projects";

interface Props {
    projects: Array<{ id: number, name: string, description: string }>,
    users: Array<{id: number, name: string}>
}


export const ProjectsPage: FC<Props> = () => {

    const dispatchProject = useDispatch<Dispatch<ActionsProject>>()
    const dispatchUser = useDispatch<Dispatch<ActionsUser>>()


    const projects = useSelector((state: ProjectState) => state.projects)

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");


    return (
        <div>
            {projects.map(item => <div key={item.id}>
                <div>{item.name}</div>
                <div>{item.description}</div>
                <label>Пользователь:</label>
                <div>{item.user.name}</div>
                <button onClick={() => {
                    dispatchProject(projectActions.update({
                        id: item.id,
                        name,
                        description,
                        user: {
                            id: 0,
                            name: "Петя"

                        }
                    }))
                }}>Редактировать
                </button>
                <button onClick={() => {
                    dispatchProject(projectActions.remove(item.id))
                }}>Удалить
                </button>
                <button onClick={() => {
                    dispatchUser(fetchUserEpic("FETCH_USER"))
                }}>Добавить пользователя</button>
            </div>)}
            <form>
                <input type="string" onChange={(event) => {
                    setName(event.target.value)
                }} value={name} placeholder="Введите Название"/>
                <input type="string" onChange={(event) => {
                    setDescription(event.target.value)
                }} value={description} placeholder="Введите Описание"/>
                <div>
                    <button onClick={(event) => {
                        event.preventDefault()
                        dispatchProject(projectActions.add({
                            id: 0,
                            name,
                            description,
                            user: {
                                id: 0,
                                name: "Петя"
                            }
                        }))
                    }}>Добавить
                    </button>
                </div>

            </form>

        </div>
    )
}
