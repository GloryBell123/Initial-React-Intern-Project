import { useState, useRef, useEffect } from "react";

const TodoItem = ({item, setUseTodo}) => {
    const isDone = item.Done === true;
    const inputRef = useRef(null);

    const [useEdit, setuseEdit] = useState(false);

    const editUsetodo = (e) => {
        setUseTodo((prev) => prev.map((t) => t.id === item.id ? { ...t, Text: e.target.value} : t ))
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, [useEdit]);

    const edit = () => {
        setuseEdit(true);
        };

    const stopEditing = () => {
        setuseEdit(false);
    };

    const deleteButton = () => {
        setUseTodo((prev) => prev.filter((t) => t.id != item.id))
    }

    return (
        <>
            <div className="flex border-b items-center min-h-12 gap-3">
                <input type="checkbox" className="scale-165 checked:accent-[#16794a]" checked={item.Done}
                onChange={(e) => setUseTodo((prev) => prev?.map((t) => t.id === item.id ? { ...t, Done: e.target.checked } : t))}/>

                <button className="flex-1" onDoubleClick={edit}>
                    {useEdit ? (
                    <input ref={inputRef} type="text" value={item.Text} onChange={(e) => editUsetodo(e)} onBlur={stopEditing}
                        onKeyDown={(e) => {
                        if (e.key === "Enter") stopEditing();
                        if (e.key === "Escape") stopEditing();
                        }}
                        className={`${ isDone ? "text-[#9aa0a8] line-through" : "" } lg:w-[60%]`}
                    /> ) : (   <span className={`${isDone ? "text-[#9aa0a8] line-through" : ""} lg:w-[60%] select-none`}>
                                    {item.Text}
                                </span>
                            )
                    }
                </button>
                

                <button onClick={edit}>
                    ✏️ 
                </button>

                <button onClick={deleteButton}>
                    🗑
                </button>
            </div>
        </>
    )
}

export default TodoItem