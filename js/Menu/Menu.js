const Menu = async () => {
  try {
    let data = await fetch("https://turajarmin.github.io/json_mft/db.json");
    let res = await data.json();
    console.log(res);
    let menu = res.menu.map((elem) => {
      if (elem.dropdown.length === 0) {
        return `<div class="w-fit h-[inherit]">
            <a
              href=${elem.link}
              class="block w-fit px-[5px] box-border capitalize text-[12px] text-white/[0.9] leading-[40px] font-bold hover:bg-slate-400 transition-all duration-150 ease-linear"
              >${elem.name}</a
            >
          </div>`;
      } else {
        return `<div class="w-fit h-[inherit] relative group">
        <a
          href=${elem.link}
          class="block w-fit px-[5px] box-border capitalize text-[12px] text-white/[0.9] leading-[40px] font-bold hover:bg-slate-400 transition-all duration-150 ease-linear"
          >${elem.name}</a  
        >
        <div class='subMenu absolute hidden group-hover:block w-[300px]  bg-[#2b2b2b] left-[50%] translate-x-[-50%]'>
             ${elem.dropdown
               .map((elem) => {
                 return `<div class='w-[100%] h-[40px]'>
                <a href=${elem.link} class='block w-[100%] h-[inherit] text-center leading-[40px] font-bold text-white/[0.8] capitalize text-[12px]'>${elem.name}</a>
            </div>`;
               })
               .join("")}   
        </div>
      </div>`;
      }
    });
    document
      .querySelector(".menu nav")
      .insertAdjacentHTML("beforeend", menu.join(""));
  } catch (error) {
    console.log(error.message);
  }
};
export default Menu;
