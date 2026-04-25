<template>
  <div>
    <h1>Лабораторная работа №9</h1>
    <p style="color: gray;">Асинхронность: setTimeout, setInterval, fetch, XMLHttpRequest</p>

    <!-- Задание 1: setTimeout / setInterval -->
    <div class="task-block">
      <h4>Задание 1: Таймеры</h4>
      <button @click="runTimeout" class="btn-primary">Запустить setTimeout (5 раз)</button>
      <button @click="startInterval" class="btn-primary">Старт setInterval</button>
      <button @click="stopInterval" class="btn-danger">Стоп setInterval</button>
      <p v-if="timeoutMessages.length > 0">
        <strong>Сообщения:</strong>
        <span v-for="(msg, i) in timeoutMessages" :key="i">{{ msg }} </span>
      </p>
      <p v-if="lastRandomNumber !== null">Последнее случайное число: {{ lastRandomNumber }}</p>
    </div>

    <!-- Задание 2: fetch -->
    <div class="task-block">
      <h4>Задание 2: Fetch API</h4>
      <button @click="loadData" class="btn-primary">Загрузить данные</button>
      <div v-if="fetchResult" class="result-box" v-html="fetchResult"></div>
    </div>

    <!-- Задание 3: XMLHttpRequest -->
    <div class="task-block">
      <h4>Задание 3: XMLHttpRequest</h4>
      <button @click="xhrRequest" class="btn-primary">Выполнить XHR</button>
      <p v-if="xhrStatus">Статус: {{ xhrStatus }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Задание 1: setTimeout
const timeoutMessages = ref([])

const runTimeout = () => {
  timeoutMessages.value = []
  let count = 1
  
  function next() {
    if (count <= 5) {
      timeoutMessages.value.push(`Повторение №${count}`)
      console.log(`Повторение №${count}`)
      count++
      setTimeout(next, 1000)
    }
  }
  next()
}

// setInterval
let intervalId = null
const lastRandomNumber = ref(null)

const startInterval = () => {
  if (intervalId) clearInterval(intervalId)
  intervalId = setInterval(() => {
    const num = Math.floor(Math.random() * 101)
    lastRandomNumber.value = num
    console.log(`Случайное число: ${num}`)
  }, 2000)
}

const stopInterval = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
    console.log('Интервал остановлен')
  }
}

// Задание 2: fetch
const fetchResult = ref('')

const loadData = async () => {
  try {
    const postsRes = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
    const posts = await postsRes.json()
    
    const usersRes = await fetch('https://randomuser.me/api/?results=3')
    const usersData = await usersRes.json()
    const users = usersData.results
    
    let html = '<div class="fetch-box">'
    html += '<strong>Посты:</strong><br>'
    posts.forEach(p => { html += `- ${p.title}<br>` })
    html += '<br><strong>Пользователи:</strong><br>'
    users.forEach(u => { html += `- ${u.name.first} ${u.name.last} (${u.email})<br>` })
    html += '</div>'
    fetchResult.value = html
  } catch (e) {
    fetchResult.value = `Ошибка: ${e.message}`
  }
}

// Задание 3: XMLHttpRequest
const xhrStatus = ref('')

const xhrRequest = () => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
  xhr.onload = () => {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText)
      xhrStatus.value = 'Успешно! Данные в консоли'
      console.log('XMLHttpRequest полученные данные:', data)
    } else {
      xhrStatus.value = `Ошибка: ${xhr.status}`
      console.log(`Ошибка XHR: ${xhr.status}`)
    }
  }
  xhr.onerror = () => {
    xhrStatus.value = 'Ошибка запроса'
  }
  xhr.send()
}
</script>

<style scoped>
.task-block {
  margin-bottom: 30px;
  padding: 15px;
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 8px;
}
.btn-primary {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}
.btn-danger {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.result-box {
  margin-top: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}
.fetch-box {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px;
}
</style>