export const actions = {
    saySomething(context, payload) {
        context.commit('setMessage', payload);
    }
}