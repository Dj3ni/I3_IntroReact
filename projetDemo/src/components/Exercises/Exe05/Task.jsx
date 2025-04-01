
function Task({data}) {
    return (
        <>
            <p>Name = {data.name}</p>
            <p>Priority : {data.priority}</p>
            <p>Description = {(data.description === "")? "No description": data.description }</p>
            <div>
                <form onSubmit={}>
                    <button>Done</button>
                    <button>Delete</button>
                </form>
            </div>
        </>
    )

}

export default Task;