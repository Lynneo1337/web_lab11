<template>
  <div>
    <h1>Лабораторная работа №8</h1>
    <p style="color: gray;">Обработка событий, запуск функции по клику, слушатель событий, работа с формами</p>

    <!-- Задание 1 -->
    <div class="task-block">
      <h4>Задание 1: Скрыть/показать блоки</h4>
      <div class="d-flex align-items-center">
        <div id="divFirst" class="box div-one" v-show="showFirst">Первый блок</div>
        <div id="divSecond" class="box div-two" :class="{ 'color-change': secondChanged }">Второй блок</div>
        <button @click="toggleAction" class="btn-primary">Кнопка</button>
      </div>
    </div>

    <!-- Задание 2 -->
    <div class="task-block">
      <h4>Задание 2: Счётчик</h4>
      <div class="d-flex align-items-center">
        <button @click="decrement" class="custom-counter-btn">Уменьшить</button>
        <div class="counter-value">{{ counter }}</div>
        <button @click="increment" class="btn-success">Увеличить</button>
      </div>
    </div>

    <!-- Задание 3 -->
    <div class="task-block">
      <h4>Задание 3: Событие change</h4>
      <label>Введите текст:</label>
      <input 
        type="text" 
        class="form-control" 
        placeholder="Печатайте и покиньте поле..." 
        @change="handleChange"
        v-model="inputValue"
      />
      <p v-if="lastChangedValue">Последнее изменённое значение: {{ lastChangedValue }}</p>
    </div>

    <!-- Задание 4 -->
    <div class="task-block">
      <h4>Задание 4: Форма</h4>
      <form @submit.prevent="submitForm">
        <div class="mb-2">
          <label>Имя *</label>
          <input type="text" class="form-control" v-model="formData.name" />
        </div>
        <div class="mb-2">
          <label>Фамилия *</label>
          <input type="text" class="form-control" v-model="formData.female" />
        </div>
        <div class="mb-2">
          <label>Email *</label>
          <input type="email" class="form-control" v-model="formData.email" />
        </div>
        <div class="mb-2">
          <label>Телефон *</label>
          <input type="tel" class="form-control" v-model="formData.phone" />
        </div>
        <div class="mb-2 form-check">
          <input type="checkbox" class="form-check-input" id="consentCheckbox" v-model="formData.checkboxvalue" />
          <label class="form-check-label">Согласен на обработку данных</label>
        </div>
        <button type="submit" class="btn-primary">Отправить</button>
      </form>
      <p v-if="submitted" class="success-message">Форма отправлена! Проверь консоль.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Задание 1
const showFirst = ref(true)
const secondChanged = ref(false)
let isActionApplied = ref(false)

const toggleAction = () => {
  if (isActionApplied.value) {
    showFirst.value = true
    secondChanged.value = false
    isActionApplied.value = false
  } else {
    showFirst.value = false
    secondChanged.value = true
    isActionApplied.value = true
  }
}

// Задание 2
const counter = ref(0)
const decrement = () => counter.value--
const increment = () => counter.value++

// Задание 3
const inputValue = ref('')
const lastChangedValue = ref('')
const handleChange = (event) => {
  lastChangedValue.value = event.target.value
  console.log('Значение изменилось на', event.target.value)
}

// Задание 4
const formData = ref({
  name: 'Ivan',
  female: 'Ivanov',
  email: 'ivanov@yandex.ru',
  phone: '482482304324',
  checkboxvalue: true
})
const submitted = ref(false)

const submitForm = () => {
  submitted.value = true
  console.log('Данные формы:', formData.value)
  setTimeout(() => {
    submitted.value = false
  }, 3000)
}
</script>

<style scoped>
body {
  background-color: #f8f9fa;
  padding: 20px;
}
.box {
  width: 200px;
  height: 100px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
.div-one {
  background-color: #ffc107;
  border: 2px solid #e0a800;
}
.div-two {
  background-color: #17a2b8;
  border: 2px solid #117a8b;
  color: white;
}
.color-change {
  background-color: #28a745;
  color: white;
}
.task-block {
  margin-bottom: 30px;
  padding: 15px;
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 8px;
}
.custom-counter-btn {
  background-color: #0d6efd;
  border: none;
  color: white;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.counter-value {
  font-size: 2rem;
  font-weight: bold;
  background-color: #e9ecef;
  padding: 5px 20px;
  margin: 0 15px;
}
.btn-primary {
  background-color: #0d6efd;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.btn-success {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.form-control {
  width: 100%;
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.form-check {
  margin: 10px 0;
}
.success-message {
  color: green;
  margin-top: 10px;
}
.d-flex {
  display: flex;
  align-items: center;
  gap: 10px;
}
.mb-2 {
  margin-bottom: 10px;
}
</style>