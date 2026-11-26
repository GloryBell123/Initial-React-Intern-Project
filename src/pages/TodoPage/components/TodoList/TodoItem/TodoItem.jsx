import { useState, useRef, useEffect } from "react";

const TodoItem = ({item, setUseTodo}) => {
    const isDone = item.Done === true;
    const inputRef = useRef(null);

    const [useEdit, setuseEdit] = useState(false);  // เช็คสถานะ edit ? true : false
    const [useFocus, setUseFocus] = useState(false);

    const alert = () => {
        setUseFocus(true)
    }

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
        setUseFocus(false)
    };

    const deleteButton = () => {
        setUseTodo((prev) => prev.filter((t) => t.id != item.id))
    }

    return (
        <>
            <div className="flex border-b items-center min-h-12 gap-3">
                <input type="checkbox" className="scale-165 checked:accent-[#16794a]" checked={item.Done}
                onChange={(e) => setUseTodo((prev) => prev?.map((t) => t.id === item.id ? { ...t, Done: e.target.checked } : t))}/>

                <button className="flex-1 text-left" onDoubleClick={edit}>  {/* double click -> stage = true */}
                    {useEdit ? (
                        <div className="flex flex-1 relative">
                            <input ref={inputRef} type="text" value={item.Text} onChange={(e) => editUsetodo(e)} onBlur={stopEditing} onFocus={alert}
                            onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === "Escape") stopEditing(); }}
                            className={`${ isDone ? "text-[#9aa0a8] line-through" : "" } lg:w-[60%] focus:border-[#4f46e5] focus:outline-[#4f46e5] focus:shadow-xl border-2 rounded-md p-1`}/>
                            { useFocus ? <div className="text-sm font-medium text-[#5f6670] absolute left-0 top-full mt-1">Enter = บันทึก · Esc = ยกเลิก</div> : ""}
                        </div>)
                        : ( <span className={`${isDone ? "text-[#9aa0a8] line-through" : ""} lg:w-[60%] select-text`}>
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