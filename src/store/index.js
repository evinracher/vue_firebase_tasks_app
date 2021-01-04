import { createStore } from 'vuex'
import router from '../router'

const API_KEY = 'AIzaSyCWH2oCIrti5XO2_p4z9JD8HB-ZHMehYpY'

export default createStore({
  state: {
    tasks: [],
    task: {
      id: "",
      name: "",
      categories: [],
      state: "",
      number: 0,
    },
    user: null,
    error: { type: null, message: null }
  },
  mutations: {
    setError(state, payload) {
      switch (payload) {
        case "INVALID_PASSWORD":
        case "EMAIL_NOT_FOUND":
          state.error = { type: 'login_failed', message: 'You have entered an invalid email or password' }
          break;
        case "EMAIL_EXISTS":
          state.error = { type: 'register_failed', message: 'This email is already registered' }
          break;
        case "INVALID_EMAIL":
          state.error = { type: 'register_failed', message: 'Invalid email address format' }
          break;
        default:
          state.error = { type: null, message: null };
          break;
      }
      console.log(state.error)
    },
    setUser(state, payload) {
      state.user = payload
      payload ? router.push('/') : router.push('/login')
    },
    loadTasks(state, payload) {
      state.tasks = payload
    },
    addTask(state, payload) {
      state.tasks.push(payload)
    },
    deleteTask(state, payload) {
      state.tasks = state.tasks.filter(item => item.id !== payload)
    },
    setTask(state, payload) {
      if (!state.tasks.find(item => item.id === payload)) {
        router.push('/')
        return
      }
      state.task = state.tasks.find(item => item.id === payload)
    },
    updateTask(state, payload) {
      state.tasks = state.tasks.map(item => item.id === payload.id ? payload : item)
      router.push('/')
    }
  },
  actions: {
    userLogout({ commit }) {
      commit('setUser', null)
      localStorage.removeItem('user')
    },
    async userRegister({ commit }, user) {
      try {
        const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: user.email,
            password: user.password,
            returnSecureToken: true
          })
        })
        const userDB = await res.json()

        if (userDB.error) {
          console.log(userDB.error)
          return commit('setError', userDB.error.message)
        }
        commit('setUser', userDB)
        commit('setError', null)
        localStorage.setItem('user', JSON.stringify(userDB))
      } catch (error) {
        console.log(error)
      }
    },
    async userLogin({ commit }, user) {
      try {
        const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: user.email,
            password: user.password,
            returnSecureToken: true
          })
        })
        const userDB = await res.json()
        if (userDB.error) {
          console.log(userDB.error)
          return commit('setError', userDB.error.message)
        }
        commit('setUser', userDB)
        commit('setError', null)
        localStorage.setItem('user', JSON.stringify(userDB))
      } catch (error) {
        console.log(error)
      }
    },
    async loadTasksAction({ commit, state }) {
      const localUser = localStorage.getItem('user');
      if (localUser) {
        commit('setUser', JSON.parse(localUser))
      } else {
        return commit('setUser', null)
      }
      try {
        const res = await fetch(`https://vueapi-12bfd-default-rtdb.firebaseio.com/tasks/${state.user.localId}.json?auth=${state.user.idToken}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        })

        const dataDB = await res.json()
        const taskArray = []
        for (let id in dataDB) {
          taskArray.push(dataDB[id])
        }
        commit('loadTasks', taskArray)
      } catch (error) {
        console.log(error)
      }
    },
    async addTaskAction({ commit, state }, task) {
      try {
        const res = await fetch(`https://vueapi-12bfd-default-rtdb.firebaseio.com/tasks/${state.user.localId}/${task.id}.json?auth=${state.user.idToken}`, {
          method: 'PUT',
          // method: 'POST', -> Generate a firebase id
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(task)
        })

        const dataDB = await res.json()
        commit('addTask', dataDB)
      } catch (error) {
        console.log(error)
      }
    },
    async updateTaskAction({ commit, state }, task) {
      try {
        const res = await fetch(`https://vueapi-12bfd-default-rtdb.firebaseio.com/tasks/${state.user.localId}/${task.id}.json?auth=${state.user.idToken}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(task)
        })
        const dataDB = await res.json()
        commit('updateTask', dataDB)
      } catch (error) {
        console.log(error)
      }
    },
    async deleteTaskAction({ commit, state }, id) {
      try {
        const res = await fetch(`https://vueapi-12bfd-default-rtdb.firebaseio.com/tasks/${state.user.localId}/${id}.json?auth=${state.user.idToken}`, {
          method: 'DELETE'
        })
        commit('deleteTask', id)
      } catch (error) {
        console.log(error)
      }
    },
    setTaskAction({ commit }, id) {
      commit('setTask', id)
    },
  },
  getters: {
    authUser: state => {
      return state.user !== null;
    }
  },
  modules: {
  }
})
