import { useState, useEffect} from "react";
import Header from "./components/Header/Header.jsx"
import TodoForm from "./components/TodoForm/TodoForm.jsx"
import FilterTabs from "./components/FilterTabs/FilterTabs.jsx";
import TodoList from "./components/TodoList/TodoList.jsx";
import TodoFooter from "./components/TodoFooter/TodoFooter.jsx";

let date = new Date().toLocaleDateString("th-TH", {
  month: "long",
  day: "numeric",
  weekday: 'long',
});

const filterStatus =  {
        all: "ทั้งหมด",
        notDone: "ยังไม่เสร็จ",
        done: "เสร็จแล้ว",
      }

export default function TodoPage() {

  const [useTodo, setUseTodo] = useState(() => JSON.parse(localStorage.getItem("data")) || []); /* เปลี่ยน str เป็น js */

useEffect(() => {
  localStorage.setItem("data", JSON.stringify(useTodo)); /* เปลี่ยน js เป็น str */
}, [useTodo])

  const [useFilterState, setUseFilterState] = useState(filterStatus.all); {/* State ของ button (ทั้งหมด, ยังไม่เสร็จ, เสร็จแล้ว) */}

  const alreadyFilter = useTodo.filter((i) => {      {/* ต้องเป็น true ถึงจะแสดงผล */}
    if (useFilterState === filterStatus.all) {                {/* แสดงทั้ง array Todo */}
      return true;
    }
    else if (useFilterState === filterStatus.notDone) {          {/* สลับจาก false เป็น true */}
      return !i.Done;
    }
    else if (useFilterState === filterStatus.done) {           {/* แสดงเฉพาะ true */}
      return i.Done;
    }
  })

  return (
    <div className="flex flex-col h-full min-h-[90vh] md:min-h-[85vh] border-2 border-[#d9dce1] rounded-[50px] w-full max-w-[90%] md:max-w-[50%] mt-10 md:mt-15 m-auto bg-white"> {/* เสร็จแล้วลบ min-h ออก */}
        <div className="ml-7.5 mt-5">
          <Header Title="สิ่งที่ต้องทำ" Date={date} />
        </div>
        <div className="mt-5 max-w-[92%] w-full mx-auto">
          <TodoForm useTodo={useTodo} setUseTodo={setUseTodo} />
        </div>
        <div className="ml-7 mt-5 max-w-[80%] md:max-w-[80%] w-full">
          <FilterTabs useFilterState={useFilterState} setUseFilterState={setUseFilterState}/>
        </div>
        <div className="mt-5 ml-8 border-t mr-9 ">
          <TodoList alreadyFilter={alreadyFilter} setUseTodo={setUseTodo} useFilterState={useFilterState} filterStatus={filterStatus}/>
        </div>
        <footer className="mt-auto"><TodoFooter/></footer> {/* ค่อยแก้ */}
    </div>
  );
}