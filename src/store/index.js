const Store = require('beedle')

import { actions } from './actions.js'

import { mutations } from './mutations.js'

import { initialState }from './state.js'

export const storeInstance = new Store({
    actions,
    mutations,
    initialState
})
