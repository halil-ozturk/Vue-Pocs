<template>
    <label>Vuex Denemesi İçin Girilen Veri : {{ data }}</label>
    <br>
    <input type="text" v-model="value">
    {{ value }}
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            data: 'getData'
        }),
        //vuexte two way data binding için computed içerisindeki veriyi bir obje olarak tanımladık ve get-set metotlarını kullandık.
        value: {
            get() {
                return this.$store.getters.getValue;
            },
            set(value) {
                this.$store.dispatch("setData", value);
            }
        },
    },
}
</script>