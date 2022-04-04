<template>
  <div
    class="card w-full bg-base-100 border cursor-pointer swiper"
    v-for="item in cardItems"
    :key="item.id"
    @click="changeCard"
    :cardid="item.id"
  >
    <div class="card-body">
      <h2 class="card-title">
        {{ item.title }}
        <div class="badge badge-secondary" v-show="item.isNew">NEW</div>
      </h2>
      <p>{{ item.content }}</p>
      <div class="card-actions justify-end">
        <div
          class="badge badge-outline"
          v-for="tag in item.tags"
          :key="tag.key"
        >
          #{{ tag }}
        </div>
      </div>
    </div>
  </div>
  <!-- <label for="card-modal" class="btn modal-button invisible"></label> -->
  <!-- Put this part before </body> tag -->
  <input
    type="checkbox"
    id="card-modal"
    class="modal-toggle"
    v-model="isCheck"
  />
  <div class="modal modal-bottom sm:modal-middle h-screen">
    <div class="modal-box h-full md:h-1/2 flex flex-col">
      <div class="tool flex justify-between pb-4">
        <button class="btn btn-active btn-ghost btn-sm" @click="cancelChange">
          cancel
        </button>
        <button class="btn btn-active btn-primary btn-sm" @click="saveChange">
          save
        </button>
      </div>
      <!-- <h3 class="font-bold text-lg">{{ modalContent.title }}</h3> -->
      <input
        type="text"
        v-model="modalContent.title"
        class="input input-ghost w-full font-bold text-lg"
      />
      <div class="divider my-0"></div>
      <!-- <p class="py-4">
        {{ modalContent.content }}
      </p> -->
      <textarea
        class="textarea textarea-ghost py-4 pt-2 mt-2 resize-none w-full flex-grow text-base"
        v-model="modalContent.content"
      ></textarea>
      <!-- <div class="modal-action">
        <label for="card-modal" class="btn">Yay!</label>
      </div> -->
    </div>
  </div>
</template>

<script>
import _ from "lodash";
// import Hammer from "hammerjs";

export default {
  components: "Card",
  props: {
    cardItems: Object, // array
  },
  data() {
    return {
      isCheck: false,
      modalContent: {
        title: "Congratulations random Interner user!",
        content:
          "You've been selected for a chance to get one year of subscription to useWikipedia for free!",
        isNew: false,
        tags: [""],
        id: null, //标记是那一张卡片
      },
    };
  },
  methods: {
    //当单击卡片时，会弹出changemodal框，卡片内容会被自动读取到modal框中，然后用户可以进行修改，修改完成后会将内容同步到carddata中。我的方案是当click时，读取key属性键值，然后在cardItem中根据key值找到对应卡片，然后读取进入modalContent。第二个时，在modal添加save按钮 和 cancel按钮，绑定saveChange事件，完成两件事情，一是emit事件+key值，二是将modal-input checked属性设置为false。
    changeCard(e) {
      const id = e.currentTarget.getAttribute("cardid"); // 这里必须是currentTarget，即绑定事件的元素，也就是.card元素
      //   console.log(id) // 这里逻辑有些问题，需要利用id在数组中查找实现效果
      let index = _.findIndex(this.cardItems, (o) => {
        return o.id == id;
      });
      //   console.log(index)
      this.modalContent.title = this.cardItems[index].title;
      this.modalContent.content = this.cardItems[index].content;
      this.modalContent.isNew = this.cardItems[index].isNew;
      this.modalContent.tags = this.cardItems[index].tags;
      this.modalContent.id = this.cardItems[index].id;

      this.isCheck = true;
    },
    saveChange(e) {
      this.$emit("changeCardItem", this.modalContent);
      this.isCheck = false;
    },
    cancelChange(e) {
      this.isCheck = false;
    },
    
  },
};
</script>
