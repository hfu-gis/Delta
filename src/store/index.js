import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    signUserUp({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          const newUser = {
            id: user.id,
            registeredMeetups: []
          };
          commit("setUser", newUser);
        });
      // .catch(
      //     error => {
      //       console.log(error)
      //     }
      // )
    },
    signUserIn({ commit }, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          const newUser = {
            id: user.uid,
            registeredMeetups: []
          };
          commit("setUser", newUser);
        });
      // .catch(
      //     error => {
      //         console.log(error)
      //     }
      // )
    },
    editUser({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')

      const user = {
        firstname: payload.UserData.firstname,
        lastname: payload.UserData.lastname,
        job: payload.UserData.job,
        text: payload.UserData.text,
      }

      let imageUrl
      let key
      let userdb

      const ref = fb.db.collection('user').doc(fb.auth.currentUser.uid)
      console.log("key: "+ref.id)
      ref.set(user)
          .then(() => {
            key = ref.id
            return key
          })
          .then(key => {
            const filename = payload.UserData.image.name
            const ext = filename.slice(filename.lastIndexOf('.'))
            return fb.storage.ref('user/' + key + '.' + ext).put(payload.UserData.image)
          })
          .then(fileData => {
            fileData.ref.getDownloadURL().then((downloadURL) => {
              fb.db.collection('user').doc(key).update({imageUrl: downloadURL})
            })
          })
          .then((data) => {
            console.log("DATA "+data)
            commit('setLoading', false)
            console.log('DONE')
          }).catch(error => {
        commit('setLoading', false)
        commit('setError', error)
        console.log(error)
      })
    },



  },
  modules: {},
  getters: {
    user(state) {
      return state.user;
    }
  }
});
