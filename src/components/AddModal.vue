<template>
  <input type="checkbox" id="addModal" class="modal-toggle" />
  <label for="addModal" id="addModal" class="modal cursor-pointer">
    <div class="modal-box">
      <div class="form-control">
        <label class="label">
          <span class="label-text font-bold">Question</span>
          <span class="label-text-alt">Alt label</span>
        </label>
        <textarea
          class="textarea textarea-bordered h-24 resize-none"
          placeholder="Writing something..."
          v-model="newCardItem.title"
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
          v-model="newCardItem.content"
        ></textarea>
      </div>
      <div class="modal-action">
        <label for="AddModal" class="btn">Yay!</label>
      </div>
    </div>
  </label>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
// 根据日期时间生成唯一ID
import { v1 as uuidv1 } from 'uuid';
const newCardItem = reactive({
    id:'',
    title: '',
    content: '',
    isNew: true,
    tags:[],
})

const addCardItem = () => {
  newCardItem.id = v1()
  this.$emit('addCardItem', newCardItem)
  
}
</script>
