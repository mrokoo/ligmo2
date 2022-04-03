<template>
  <div class="navbar bg-base-100 fixed top-0">
    <div class="container mx-auto">
      <div class="navbar-start md:hidden">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-5 h-5 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a>Introduction</a></li>
            <li><a>More</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
      </div>
      <div class="navbar-center flex md:flex-1">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">Ligmo</a>
        </div>
      </div>

      <div class="navbar-end flex">
        <div class="hidden md:block md:justify-items-end">
          <ul class="menu menu-horizontal p-0 flex-1">
            <li><a>Introduction</a></li>
            <li><a>About</a></li>
            <li tabindex="0">
              <a>
                More
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                  />
                </svg>
              </a>
              <ul class="p-2 bg-base-100">
                <li><a>Example</a></li>
                <li><a>Blog</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="flex-none">
          <button class="btn btn-square btn-secondary btn-ghost ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="w-4 h-4"
              fill="currentColor"
            >
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="hero min-h-screen">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
        <p class="mb-5">
          The past is our definition. We may strive, with good reason, to escape
          it or what is bad in it, but we will escape it only by adding things
          better to it.
        </p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.hero {
  background-image: url("src/assets/ba.jpg");
}

.navbar,
.hero {
  font-family: "Roboto", sans-serif;
}
</style>
