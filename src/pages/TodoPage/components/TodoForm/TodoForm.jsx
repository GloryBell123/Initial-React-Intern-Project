export default function TodoForm () {
    return (
        <div className="flex">
            <form className="flex w-full justify-between gap-5">
                <input type="text" className="border-2 rounded-xl border-[#d9dce1] p-3 flex-1 md:text-[20px]" placeholder="พิมพ์งานใหม่..."/>
                <button className="border rounded-xl bg-[#4f46e5] w-30 md:w-20 text-white text-[18px]">
                    + เพิ่ม
                </button>
            </form>
        </div>
    )
}