import TodoItem from "./TodoItem/TodoItem.jsx"

export default function TodoList ({alreadyFilter, setTodo}) {
    if (alreadyFilter.length > 0) {
        return (
        <>
        {alreadyFilter.map((item) => (
            <TodoItem key={item.id} item={item} setTodo={setTodo} />
        ))}
        </>
        )
    }
    else if (alreadyFilter.length === 0) {
        return ("ว่าง")
    }
    
}