
import Vue from 'vue'
import Vuex from 'vuex'

import slips from './modules/slips'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
    modules: {
        slips,
    }
});

export default store