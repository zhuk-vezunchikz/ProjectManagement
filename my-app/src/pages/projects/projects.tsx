import React, {FC, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ProjectState} from "./reducer/reducer.projects";
import {Dispatch} from "redux";
import {Actions, projectActions} from "./action/action.projects";

interface Props {
    projects: Array<{ id: number, name: string, description: string }>,
}


export const ProjectsPage: FC<Props> = () => {

    const dispatch = useDispatch<Dispatch<Actions>>()

    const projects = useSelector((state: ProjectState) => state.projects)

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");


    return (
        <div>
            {projects.map(item => <div key={item.id}>
                <div>{item.name}</div>
                <div>{item.description}</div>
                <button onClick={() => {
                }}>Редактировать
                </button>
                <button onClick={() => {
                }}>Удалить
                </button>
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
                        dispatch(projectActions.add({
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
