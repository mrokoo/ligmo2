<template>
  <input type="checkbox" id="search-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box w-11/12 sm:w-2/3 max-w-5xl h-full relative p-4">
      <label
        for="search-modal"
        class="btn btn-sm btn-circle absolute top-4 right-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </label>

      <div class="searchbox flex rounded-full border-2 border-base-content mt-10">
        <input
          type="text"
          placeholder="Search"
          class="flex-1 outline-none rounded-full pl-4 bg-base-100"
        />
        <button class="btn btn-ghost rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div class="divider">Results</div>
      <div>
          我是内容
      </div>
      <!-- <div class="modal-action">
        <label for="search-modal" class="btn">Yay!</label>
      </div> -->
    </div>
  </div>
</template>

<script setup></script>
