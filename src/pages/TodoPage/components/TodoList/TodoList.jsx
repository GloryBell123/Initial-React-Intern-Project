import TodoItem from "./TodoItem/TodoItem.jsx"

export default function TodoList ({alreadyFilter, setUseTodo}) {
    if (alreadyFilter.length > 0) {
        return (
        <>
        {alreadyFilter.map((item) => (
            <TodoItem key={item.id + "test"} item={item} setUseTodo={setUseTodo} />
        ))}
        </>
        )
    }
    else if (alreadyFilter.length === 0) {
        return ("ว่าง")
    }
    
}