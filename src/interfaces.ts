interface Task{
    id: number,
    description: string,
    assignee: string,
    status: string,
    priority: number,
    dueDate: Date;
}

export default Task;