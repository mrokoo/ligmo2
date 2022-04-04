<template>
  <!-- <Stats /> -->
  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
    <Card :cardItems="cardItems" @changeCardItem="changeCardItem" />
  </div>
  <AddModal @addCardItem="addItem" />
</template>


<script>
import _ from "lodash";
import AddModal from "../components/AddModal.vue";
import Stats from "../components/Stats.vue";
import Card from "../components/Card.vue";
export default {
  component: "home",
  components: {
    AddModal,
    Stats,
    Card,
  },
  data() {
    return {
      cardItems: [
        {
          id: "1",
          title: "Shoes!",
          content: "If a dog chews shoes whose shoes does he choose?",
          isNew: true,
          tags: ["Fashion", "Products"],
        },
        {
          id: "2",
          title: "Shoes!",
          content: "If a dog chews shoes whose shoes does he choose?",
          isNew: false,
          tags: ["Fashion", "Products"],
        },
        {
          id: "3",
          title: "Shoes!",
          content: "If a dog chews shoes whose shoes does he choose? ",
          isNew: true,
          tags: ["Fashion", "Products"],
        },
        {
          id: "4",
          title: "Shoes!",
          content: "If a dog chews shoes whose shoes does he choose? 弄弄",
          isNew: true,
          tags: ["Fashion", "Products"],
        },
        {
          id: "5",
          title: "Shoes!",
          content: "If a dog chews shoes whose shoes does he choose?",
          isNew: true,
          tags: ["Fashion", "Products"],
        },
      ],
    };
  },
  methods: {
    changeCardItem(pararms) {
      // console.log(pararms)
      let index = _.findIndex(this.cardItems, (o) => {
        return o.id == pararms.id;
      });

      this.cardItems[index].id = pararms.id;
      this.cardItems[index].title = pararms.title;
      this.cardItems[index].content = pararms.content;
      this.cardItems[index].isNew = pararms.isNew;
      this.cardItems[index].tags = pararms.tags;
    },
    addItem(pararms) {
      this.cardItems.push(pararms);
    },
  },
  emits: ["addCardItem", "changeCardItem"],
};
</script>
