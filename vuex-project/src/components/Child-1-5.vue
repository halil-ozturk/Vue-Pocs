<template>
    <label>Vuex Denemesi İçin Yapıldım.</label>
    <input v-model="gidecekVeri" v-bind:on-keypress="updateData(gidecekVeri)">
    {{ gidecekVeri }}
    <v-select v-model="select" :hint="`${select.state}, ${select.abbr}`" :items="items" item-title="state" item-value="abbr"
        label="Select" persistent-hint return-object single-line></v-select>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            gidecekVeri: null,
            select: { state: 'Florida', abbr: 'FL' },
            items: [
                { state: 'Florida', abbr: 'FL' },
                { state: 'Georgia', abbr: 'GA' },
                { state: 'Nebraska', abbr: 'NE' },
                { state: 'California', abbr: 'CA' },
                { state: 'New York', abbr: 'NY' },
            ],
        }
    },
    methods: {
        //tıpkı mutationslar gibi actionslar da aynı şekilde methodsun altında maplanerek kullanılabilirler.
        ...mapMutations([
            "updateData"
        ]),

    },
    // computed: {
    //     updateData() {
    //         // this.$store.state.denemeVerisi = this.gidecekVeri
    //         this.$store.commit("updateData", this.gidecekVeri)
    //     }
    // }
}
</script>