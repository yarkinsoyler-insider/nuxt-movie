<template>
    <div class="text-center" style="margin-top:100px" v-if="getLoadingStatus">
        <v-progress-circular :size="70" color="primary" indeterminate ></v-progress-circular>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getLoadingStatus']),
    },
};
</script>