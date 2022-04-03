<template>
  <!-- <Stats /> -->
  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
    <Card :cardItems="cardItems" @changeCardItem="changeCardItem" />
  </div>
</template>

<script setup>
import _ from "lodash";
import Stats from "../components/Stats.vue";
import Card from "../components/Card.vue";
import { reactive } from "@vue/reactivity";
const cardItems = reactive([
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
]);

function changeCardItem(pararms) {
  // console.log(pararms)
  let index = _.findIndex(cardItems, (o) => {
    return o.id == pararms.id
  })

  cardItems[index].id = pararms.id
  cardItems[index].title = pararms.title
  cardItems[index].content = pararms.content
  cardItems[index].isNew = pararms.isNew
  cardItems[index].tags = pararms.tags
}
</script>
