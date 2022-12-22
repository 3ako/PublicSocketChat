<script setup>
import ChatHistoryComponent from './ChatHistoryComponent.vue';
import ChatInputComponent from './ChatInputComponent.vue';

</script>
<template>
    <div class="chat">
        <ChatHistoryComponent style="height: 760px;"></ChatHistoryComponent>
        <ChatInputComponent style="height: 40px;"/>
    </div>
</template>
<style scope>
.chat {
    background-color: rgb(255, 255, 255);
    /* width: 500px; */
    height: 800px;
    border-radius: 20px;
    border: 1px solid #ccc;
}
</style>