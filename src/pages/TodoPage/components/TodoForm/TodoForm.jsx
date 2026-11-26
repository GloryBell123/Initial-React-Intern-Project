import { useState, useRef } from "react"

export default function TodoForm ({useTodo, setUseTodo}) {

    const [useText, setUseText] = useState("");
    const [useFocus, setUseFocus] = useState(false);

    const alert = () => {
        setUseFocus(true)
    }

    const stopAlert = () => {
        setUseFocus(false)
        setUseText("")
    }

    const empty = useText.trim() === "";

    const inputRef = useRef(null);
    const saveTodo = (e) => {
        e.preventDefault()
        const newTask ={
            id: crypto.randomUUID(),
            Text: useText,
            Done: false
        }
        setUseTodo([...useTodo, newTask])  /* ครอบด้วย [array] ก่อนจะเพิ่ม object {key: value} */
        setUseText("")
        inputRef.current?.focus();
    }

    return (
        <div className="flex">
            <form className="flex w-full justify-between gap-5" onSubmit={saveTodo}>
                <div className="flex flex-1 relative">
                    <input ref={inputRef} type="text" value={useText} placeholder="พิมพ์งานใหม่..."
                    className={` ${empty ? "focus:border-[#c4320a] focus:outline-none focus:bg-[#fff5f3]" : "" } border-2 border-[#d9dce1] rounded-xl p-3 flex-1 md:text-[20px]`}
                    onChange={(e) => setUseText(e.target.value)}
                    onFocus={alert} onBlur={stopAlert}
                    onKeyDown={(e) => {
                            if (e.key === "Escape") inputRef.current?.blur(); }}/>
                    {empty && useFocus ? <div className="absolute left-0 bottom-full ml-1 mb-1 text-sm text-[#c4320a] font-medium">กรุณาพิมพ์ชื่องาน</div> : ""}
                </div>
                
                <button type="submit" className="border rounded-xl bg-[#4f46e5] w-30 md:w-20 text-white text-[18px]" disabled={useText.trim()===""}>
                    + เพิ่ม
                </button>
            </form>
        </div>
    )
}