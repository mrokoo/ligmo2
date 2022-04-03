<template>
  <input type="checkbox" id="my-modal" class="modal-toggle" />
  <label for="my-modal" id="my-modal" class="modal cursor-pointer">
    <div class="modal-box">
      <div class="form-control">
        <label class="label">
          <span class="label-text font-bold">Question</span>
          <span class="label-text-alt">Alt label</span>
        </label>
        <textarea
          class="textarea textarea-bordered h-24 resize-none"
          placeholder="Writing something..."
        ></textarea>
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text font-bold">Answer</span>
          <span class="label-text-alt">Alt label</span>
        </label>
        <textarea
          class="textarea textarea-bordered h-24 resize-none"
          placeholder="Writing something..."
        ></textarea>
      </div>
      <div class="modal-action">
        <label for="my-modal" class="btn">Yay!</label>
      </div>
    </div>
  </label>
</template>

<script setup></script>
