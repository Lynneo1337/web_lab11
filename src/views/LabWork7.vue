<template>
  <div>
    <h1>Лабораторная работа №7</h1>
    <p style="color: gray;">Работа с DOM</p>

    <!-- Задание 3.1 -->
    <h3>Задание 1: Изменение текста</h3>
    <div id="myId" ref="myIdDiv">Исходный текст (id)</div>
    <div class="myClass" ref="myClassDiv">Исходный текст (class)</div>
    <button @click="changeText">Изменить текст</button>

    <!-- Задание 3.2 -->
    <h3>Задание 2: Работа со ссылками</h3>
    <a href="https://stud.lms.tpu.ru/my/" ref="link1">STUD LMS</a><br />
    <a href="https://ro-rasp.tpu.ru/" ref="link2">Расписание ТПУ</a><br />
    <a href="https://itr.tpu.ru/" ref="link3">ИШИТР ТПУ</a><br />
    <button @click="changeLinks">Изменить ссылки</button>

    <!-- Задание 3.3 -->
    <h3>Задание 3: Скрыть/показать блоки</h3>
    <div v-for="(block, index) in blocks" :key="index" class="block" :ref="el => blocksRefs[index] = el">
      {{ block.text }}
    </div>
    <button @click="toggleBlocks">Скрыть/Показать последний блок</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Задание 1
const myIdDiv = ref(null)
const myClassDiv = ref(null)

const changeText = () => {
  if (myIdDiv.value) myIdDiv.value.textContent = 'Текст изменён через Vue!'
  if (myClassDiv.value) myClassDiv.value.textContent = 'Тоже изменён!'
}

// Задание 2
const link1 = ref(null)
const link2 = ref(null)
const link3 = ref(null)

const changeLinks = () => {
  if (link1.value) link1.value.href = 'https://vuejs.org/'
  if (link2.value) link2.value.href = 'https://router.vuejs.org/'
  if (link3.value) link3.value.href = 'https://vitejs.dev/'
  
  if (link1.value) link1.value.textContent = 'Vue.js'
  if (link2.value) link2.value.textContent = 'Vue Router'
  if (link3.value) link3.value.textContent = 'Vite'
}

// Задание 3
const blocks = ref([
  { text: 'Первый блок', visible: true },
  { text: 'Второй блок', visible: true },
  { text: 'Третий блок', visible: true },
  { text: 'Четвёртый блок', visible: true }
])

const blocksRefs = ref([])

const toggleBlocks = () => {
  if (blocksRefs.value[3]) {
    if (blocksRefs.value[3].style.display === 'none') {
      blocksRefs.value[3].style.display = 'block'
    } else {
      blocksRefs.value[3].style.display = 'none'
    }
  }
}
</script>

<style scoped>
div {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
}
.block {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
}
button {
  margin: 10px 0;
  padding: 5px 15px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>