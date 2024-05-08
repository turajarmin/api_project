(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const s=async()=>{try{let a=await(await fetch("https://turajarmin.github.io/json_mft/db.json")).json();console.log(a);let o=a.menu.map(t=>t.dropdown.length===0?`<div class="w-fit h-[inherit]">
            <a
              href=${t.link}
              class="block w-fit px-[5px] box-border capitalize text-[12px] text-white/[0.9] leading-[40px] font-bold hover:bg-slate-400 transition-all duration-150 ease-linear"
              >${t.name}</a
            >
          </div>`:`<div class="w-fit h-[inherit] relative group">
        <a
          href=${t.link}
          class="block w-fit px-[5px] box-border capitalize text-[12px] text-white/[0.9] leading-[40px] font-bold hover:bg-slate-400 transition-all duration-150 ease-linear"
          >${t.name}</a  
        >
        <div class='subMenu absolute hidden group-hover:block w-[300px]  bg-[#2b2b2b] left-[50%] translate-x-[-50%]'>
             ${t.dropdown.map(e=>`<div class='w-[100%] h-[40px]'>
                <a href=${e.link} class='block w-[100%] h-[inherit] text-center leading-[40px] font-bold text-white/[0.8] capitalize text-[12px]'>${e.name}</a>
            </div>`).join("")}   
        </div>
      </div>`);document.querySelector(".menu nav").insertAdjacentHTML("beforeend",o.join(""))}catch(i){console.log(i.message)}},l=async()=>{try{let o=(await(await fetch("https://turajarmin.github.io/json_mft/db.json")).json()).products.map(t=>`<div class="w-[30%]">
            <h5 class="text-left text-[16px] font-bold mb-[15px] capitalize">
              title:${t.title}
            </h5>
            <h5 class="text-left text-[16px] font-bold mb-[15px] capitalize">
              price:${t.price}
            </h5>
            <p
              class="text-left text-[16px] mb-[15px] capitalize text-ellipsis overflow-hidden text-nowrap"
            >
              description:${t.description}
            </p>
            <h5 class="text-left text-[16px] font-bold mb-[15px] capitalize">
              category:${t.category}
            </h5>
            <img src=${t.image} class="block w-[50%] mx-auto mb-[15px]" alt="">
            <div class="w-[100%] flex justify-between px-[10px] box-border">
              <h5 class="text-left text-[16px] font-bold mb-[15px] capitalize">
                rate:${t.rating.rate}
              </h5>
              <h5 class="text-left text-[16px] font-bold mb-[15px] capitalize">
                count:${t.rating.count}
              </h5>
            </div>
          </div>`);document.querySelector(".products").insertAdjacentHTML("beforeend",o.join(""))}catch(i){console.log(i.message)}},c=async()=>{try{let o=(await(await fetch("https://turajarmin.github.io/json_mft/db.json")).json()).slider.map(t=>` <div class="swiper-slide">
            <img src=${t.image} alt=${t.alt} />
      </div>
        `);document.querySelector(".swiper-wrapper").insertAdjacentHTML("beforeend",o.join(""))}catch(i){console.log(i.message)}};async function d(){await s(),await c(),l(),new Swiper(".mySwiper",{spaceBetween:0,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}d();
