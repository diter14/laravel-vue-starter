<template>
    <div class="main-layout">
        <!-- <Header :title="title" :description="description"/> -->

        <router-view/>

        <!-- <Footer/> -->
    </div>
</template>

<script>

// import Header from '../components/layout/Header'
// import Footer from '../components/layout/Footer'

export default {
    // components: {
    //     Header,
    //     Footer
    // },

    data() {
        return {
            title: '',
            description: ''
        }
    },

    mounted() {
    }
}

</script>
