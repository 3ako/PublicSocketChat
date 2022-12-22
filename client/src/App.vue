<script setup>
import ChatComponent from './components/ChatComponent.vue';

</script>

<template>
  <div>
    <img alt="Vue logo" class="logo" src="@/assets/mem.webp" width="325" height="325" />
    <input type="text" placeholder="Никнейм" v-model="username" @input="saveUsername">
    <div class="info" style="width: 325px;">
      Простейший сокетный чат. Все участники могут использовать любой никнейм. Все данные пользоваетелей скрыты.<br>
      Существует метод, позволяющий отправить сообщение со стороны
      <input type="text" readonly value="/sendMessage?username=TestNick&text=Приветствую"><br><br>
      Либо Вы можете получить все сообщения из чата в JSON формате
      <input type="text" readonly value="/getChatHistory"><br><br><br>
      А вообще веб говно, как и все псевдоязыки из серии питухона, джавастриптиза и пыхыпых. Бардак и скучно.
    </div>
  </div>
  <div>
    <ChatComponent/>
  </div>


</template>
<script> 
export default {
  data(){return{
    username: localStorage.getItem("username")
  }},
  methods: {
    saveUsername(){
      localStorage.setItem("username", this.username)
    }
  },
  sockets: {
    ping() {
      this.$socket.emit("pong")
    }
  }
}
</script>
<style scoped>
input[readonly]
{
  border: none;
  opacity: 0.6;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}
input {
  line-height: 30px;
  width: 318px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
