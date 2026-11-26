export default function TodoFooter ({useTodo, setUseTodo}) {

    const remainingTask = useTodo.filter((i) => i.Done === false).length;

    const deleteDone = () => {
        setUseTodo((i) => i.filter((t) => !t.Done))
    }

    return (
        <div className="flex">
            <div className="text-[#8593a5] flex-1">
                เหลือ {remainingTask} งาน
            </div>
            <button className="flex mr-10 cursor-pointer text-[#c4320a]" onClick={deleteDone}>
                ลบงานที่เสร็จแล้ว
            </button>
        </div>
    )
}