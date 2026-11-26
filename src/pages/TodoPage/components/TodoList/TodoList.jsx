import TodoItem from "./TodoItem/TodoItem.jsx"
import emptyPage from "../../../../assets/emptyPage.png"
import notDone from "../../../../assets/notDone.png"
import done from "../../../../assets/done.png"

const Container = ({object}) => {
    return (
        <div className="flex items-center flex-col mt-10 gap-2">
            <img src={object?.img} className="w-30 h-30"></img>
            <div className="text-[#1f2328] font-bold text-[25px]">
                {object?.text}
            </div>
            <div className="text-[#5f6670] font-bold text-[15px]">
                {object?.subtext}
            </div>
        </div>
    )
}

export default function TodoList ({alreadyFilter, setUseTodo, useFilterState, filterStatus}) {
    if (alreadyFilter.length <= 0) {
        const findObject = () => { 
            if (useFilterState === filterStatus?.all) {
                return { img: emptyPage, text: "ยังไม่มีงาน", subtext: "พิมพ์งานแรกด้านบนได้เลย"}
            }
            else if (useFilterState === filterStatus?.notDone) {
                return { img: done, text: "ทำครบทุกงานแล้ว", subtext: "ไม่มีงานค้าง พักได้เลย"}
                
            }
            else if (useFilterState === filterStatus?.done) {
                return { img: notDone, text: "ยังไม่มีงานที่เสร็จ", subtext: "ติ๊กงานที่ทำเสร็จแล้วจะมาอยู่ตรงนี้"}
            }
            
         }
        return (
            <Container object={findObject()}/>
        )
    }

    if (alreadyFilter.length > 0) {
        return (
        <>
            {alreadyFilter.map((item) => (
                <TodoItem key={item.id + "test"} item={item} setUseTodo={setUseTodo} />
            ))}
        </>
        )
    }
    
} 