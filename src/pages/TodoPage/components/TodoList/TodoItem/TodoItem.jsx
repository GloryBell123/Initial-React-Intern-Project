import { useState } from "react"
const TodoItem = ({item, setTodo}) => {
    const [done, setDone] = useState(item.Done);
    const isDone = item.Done === true;

    return (
        <>
            <div className="flex border-b items-center min-h-12 gap-3">
                <input type="checkbox" className="scale-165 checked:accent-[#16794a]" checked={done}  /* ถ้า Done === true ให้ติ๊กถูก */
                onChange={(e) => setDone(e.target.checked)}/> {/* เช็คจากสถานะที่กดปัจจุบัน ไม่ใช่จาก chedked={done} */}
                <p className={`${isDone ? "text-[#9aa0a8] line-through" : ""} flex-1`}>
                    {item.Text}
                </p>
                <button>                           {/* เปลี่ยนเป็น input type text แล้วซ่อนกรอบ */}
                    ✏️ 
                </button>
                <button>                         {/* กดแล้ว filter != id แล้ว map ใหม่ */}
                    🗑
                </button>
            </div>
        </>
    )
}

export default TodoItem