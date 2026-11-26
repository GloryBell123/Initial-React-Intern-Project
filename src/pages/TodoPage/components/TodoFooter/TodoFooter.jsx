export default function TodoFooter ({useTodo}) {

    const remainingTask = useTodo.filter((i) => i.Done === false).length;

    return (
        <div>
            {}
            เหลือ {remainingTask} งาน
        </div>
    )
}