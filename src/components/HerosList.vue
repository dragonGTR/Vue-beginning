<template>
  <div style="text-align:center">
    <h3>HERO LIST {{ herosCount }}</h3>
    <ul style=" list-style-type:none">
      <li style="none" v-for="(hero, index) in heroList" v-bind:key="index">
        {{ hero.name }}
        <button
          style="marginLeft:40px"
          id="sd"
          @click="remove(index)"
          class="btn-success mb-3"
        >
          X
        </button>
      </li>
    </ul>
    <form v-on:submit.prevent="addHero">
      <input v-model="names" />
      <button style="marginLeft:20px" type="submit" class="btn btn-primary">
        ADD
      </button>
    </form>
  </div>
</template>

<script>
export default {
  //computed is used to await for details filled
  computed: {
    herosCount() {
      return this.heroList.length;
    },
  },
  methods: {
    addHero() {
      if (this.names !== "") {
        this.heroList.push({ name: this.names }), (this.names = "");
      }
    },

    //remove HERO
    remove(index) {
      this.heroList = this.heroList.filter((hero, i) => i != index);
    },
  },
  data() {
    return {
      names: "Aquaman",
      heroList: [
        { name: "IronMan" },
        { name: "SuperMan" },
        { name: "BatMan" },
        { name: "Hulk" },
        { name: "SpiderMan" },
        { name: "captain americas" },
      ],
    };
  },
};
</script>
