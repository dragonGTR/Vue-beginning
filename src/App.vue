<template>
  <AppHeader />
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";

export default {
  components: { AppHeader },

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
