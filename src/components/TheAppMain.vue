<template>
  <div
    class="appmain bg-base-100 m-4 rounded-box overflow-auto relative px-4"
    @scroll="fixin"
  >
    <div
      class="flex justify-between items-center sticky top-0 bg-base-100 pt-2 px-4 w-full z-10"
    >
      <div class="text-sm breadcrumbs">
        <ul>
          <li><a>Home</a></li>
          <li><a>Card</a></li>
        </ul>
      </div>
      <div>
        <label for="my-modal" class="btn btn-ghost btn-circle modal-button">
          <svg
            class="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="currentColor"
            stroke="currentColor"
          >
            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"
            />
          </svg>
        </label>
        <button class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="w-4 h-4"
            fill="currentColor"
          >
            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z"
            />
          </svg>
        </button>
        <button class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4" fill="currentColor">
            <path
              d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="divider my-0"></div>

    <router-view></router-view>
  </div>
</template>

<script setup>
// fixin 为滑动显示装饰类，组件在scroll 滑动条的组件中绑定，为了便于维护，在这里写以下
const fixin = (e) => {
  const tabbar = document.querySelector(".tabbar");
  tabbar.classList.remove("fixout");
  tabbar.classList.add("fixin");
  let t1 = 0;
  let t2 = 0;
  let timer = null; // 定时器
  clearTimeout(timer);
  timer = setTimeout(isScrollEnd, 150);
  t1 = e.target.scrollTop;

  function isScrollEnd() {
    t2 = e.target.scrollTop;
    if (t2 == t1) {
      tabbar.classList.replace("fixin", "fixout");
    }
  }
};


const addCardItem = () => {}
</script>

<style scoped>
  .appmain {
    font-family: 'Roboto', sans-serif;
  }
</style>
