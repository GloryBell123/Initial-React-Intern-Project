const btnstyle = "border-2 rounded-3xl border-[#d9dce1] text-[#5f6670] p-0.5 md:p-1.5 w-[50%] md:w-25 cursor-pointer transition-colors";

export default function FilterTabs ({useFilterState, setUseFilterState}) {

    const buttonType = [
        {name: "ทั้งหมด"},
        {name: "ยังไม่เสร็จ"},
        {name: "เสร็จแล้ว"},
    ]

    return (
        <div className="flex gap-3">
            {buttonType.map((b) => {

                const activeButton = useFilterState === b.name;

                return (
                    <button key={b.name} type="button" className={`${activeButton ? 'bg-[#1F2328] text-white' : ''} ${btnstyle}`}
                    onClick={() => setUseFilterState(b.name)}>
                        {b.name}
                    </button>
                )
            })}
        </div>
    )
}