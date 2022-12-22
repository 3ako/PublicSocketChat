<template>
    <div class="history" ref="history">
        <div class="message" v-for = "m in messages" :key="m">
            <div class="author">{{ m.author }}</div>
            <div class="text">{{ m.text }}</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){return{
        messages: []
    }},
    sockets: {
        newMessage(message) {
            this.messages.push({
                author: message.username,
                text: message.text
            })
            this.$nextTick(() => {
                this.$refs.history.scrollTop = 9999;
            });
        }
    }
}
</script>

<style scoped>
.history::-webkit-scrollbar {
  width: 0px;
}
.history {
    overflow: auto;
}
.history .message {
    width: 100%;
    display: flex;
    line-height: 30px;
    padding: 5px;
}
.history .message .author {
    background: rgb(103,9,121);
    background: linear-gradient(90deg, rgba(172, 41, 198, 0.676) 35%, rgba(255,0,211,0.46262254901960786) 100%);
    color: white;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 30px;
    font-weight: bold;
}

.history .message .text {
    padding-left: 10px;
}
</style>