export default function Header({Title, Date}) {
  return (
    <>
        <div className="text-[22px] md:text-[25px] font-bold text-[#1f2328]">
          {Title}
        </div>
        <div className="text-[#5f6670] text-[15px] md:text-[17px]">
          {Date}
        </div>
    </>
  );
}