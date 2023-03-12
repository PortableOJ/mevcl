<template>
  <div style="margin-top: 60px; display: grid; place-items: center">
    <div style="display: grid; grid-template-columns: 1fr auto auto 1fr; grid-column-gap: 20px; place-items: center">
      <div></div>
      <div>
        <img src="https://github.com/ZJGSU-TTCM/mevcl/blob/master/public/favicon.png?raw=true" alt="favicon">
      </div>
      <div style="text-align: left">
        <div style="font-size: 50px; font-weight: bolder; display: flex" class="text-shadow">
          <span class="text-lightblue">M</span>
          <span class="text-pink">E</span>
          <span class="text-white">V</span>
          <span class="text-pink">C</span>
          <span class="text-lightblue">L</span>
        </div>
        <div>{{ $t('home.desc') }}</div>
      </div>
      <div></div>
    </div>
    <div style="margin-top: 60px">
      <InputSelect v-model="lang" :data="langList" @change="langChange"></InputSelect>
    </div>
    <div style="width: 800px; margin-top: 60px; display: grid; grid-template-columns: 1fr 1fr 1fr 1fr">
      <div class="feature">
        <h1>{{ $t('home.feature[0].title') }}</h1>
        <div>{{ $t('home.feature[0].desc') }}</div>
      </div>
      <div class="feature">
        <h1>{{ $t('home.feature[1].title') }}</h1>
        <div>{{ $t('home.feature[1].desc') }}</div>
      </div>
      <div class="feature">
        <h1>{{ $t('home.feature[2].title') }}</h1>
        <div>{{ $t('home.feature[2].desc') }}</div>
      </div>
      <div class="feature">
        <h1>{{ $t('home.feature[3].title') }}</h1>
        <div>{{ $t('home.feature[3].desc') }}</div>
      </div>
    </div>
  </div>
</template>

<script>

import InputSelect from "../components/v1/InputSelect.vue";

export default {
  name: "Home",
  components: {
    InputSelect
  },
  data() {
    return {
      lang: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en',
      langList: [
        {
          label: 'English',
          value: 'en'
        },
        {
          label: '中文(简体)',
          value: 'zh-cn'
        }
      ]
    }
  },
  created() {
    this.$i18n.locale = this.lang
  },
  methods: {
    langChange(value) {
      localStorage.setItem('lang', value)
      window.location.reload()
    }
  }
}
</script>

<style scoped>
.text-shadow {
  text-shadow: #000 1px 0 0, #000 0 1px 0, #000 -1px 0 0, #000 0 -1px 0;
}

.text-lightblue {
  color: lightblue;
}

.text-pink {
  color: pink;
}

.text-white {
  color: white;
}

.feature {
  margin: 10px;
  padding: 10px;
  border: 1px var(--brand-color) solid;
  border-radius: 30px;
  text-align: center;
  transition: 0.5s;
}

.feature:hover {
  background-color: var(--background-brand-color);
  box-shadow: var(--focus-hightlight-shadowbox)

}

.feature > div {
  margin-top: 10px;
  color: var(--info-color);
}
</style>