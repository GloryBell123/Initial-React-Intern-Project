import { useState } from "react";
import Header from "./components/Header/Header.jsx"
import TodoForm from "./components/TodoForm/TodoForm.jsx"
import FilterTabs from "./components/FilterTabs/FilterTabs.jsx";
import TodoList from "./components/TodoList/TodoList.jsx";
import TodoFooter from "./components/TodoFooter/TodoFooter.jsx";

export default function TodoPage() {

  let date = new Date().toLocaleDateString("th-TH", {
  month: "long",
  day: "numeric",
  weekday: 'long',
  });

  const [Todo, setTodo] = useState([
    {id: 1, Text: "TestTodoList-notDone", Done: false},
    {id: 2, Text: "TestTodoList-Done", Done: true},
  ]);

  const [filterState, setFilter] = useState("ทั้งหมด"); {/* State ของ button (ทั้งหมด, ยังไม่เสร็จ, เสร็จแล้ว) */}

  const alreadyFilter = Todo.filter((i) => {      {/* ต้องเป็น true ถึงจะแสดงผล */}
    if (filterState === "ทั้งหมด") {                {/* แสดงทั้ง array Todo */}
      return i;
    }
    else if (filterState === "ยังไม่เสร็จ") {          {/* สลับจาก false เป็น true */}
      return !i.Done;
    }
    else if (filterState === "เสร็จแล้ว") {           {/* แสดงเฉพาะ true */}
      return i.Done;
    }
  })

  return (
    <div className="flex flex-col h-full min-h-[90vh] md:min-h-[85vh] border-2 border-[#d9dce1] rounded-[50px] w-full max-w-[90%] md:max-w-[50%] mt-10 md:mt-15 m-auto bg-white"> {/* เสร็จแล้วลบ min-h ออก */}
        <div className="ml-7.5 mt-5">
          <Header Title="สิ่งที่ต้องทำ" Date={date} />
        </div>
        <div className="mt-5 max-w-[92%] w-full mx-auto">
          <TodoForm/>
        </div>
        <div className="ml-7 mt-5 max-w-[80%] md:max-w-[80%] w-full">
          <FilterTabs filter={filterState} setFilter={setFilter}/>
        </div>
        <div className="mt-5 ml-8 border-t mr-9 ">
          <TodoList alreadyFilter={alreadyFilter} setTodo={setTodo}/>
        </div>
        <footer className="mt-auto"><TodoFooter/></footer> {/* ค่อยแก้ */}
    </div>
  );
}