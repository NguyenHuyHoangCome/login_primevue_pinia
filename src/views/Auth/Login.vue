<script setup>
import { computed, inject, reactive } from "vue";
import { useAuthStore } from '@/core/store/AuthStore';
import { useRouter } from "vue-router";

const router = useRouter()
const logoColor = computed(() => {
    if (appState.darkTheme) return 'white';
    return 'dark';
});
const appState = inject('appState');

// User and login 
const { loginActions } =  useAuthStore();

const userLogin = reactive({
  username: 'kminchelle',
  password: '0lelplR',
  // checked: false,
});

const onLogin = async ()  => {
  const loginResult = await loginActions({'username': userLogin.username, 'password': userLogin.password});

  if (loginResult) router.push({name: 'dashboard'})
}

</script>

<template>
  <div class="surface-0 flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
    <div class="grid justify-content-center p-2 lg:p-0" style="min-width:80%">
      <div class="col-12 mt-5 xl:mt-0 text-center">
        <img :src="'layout/images/logo-' + logoColor + '.svg'" alt="Sakai logo" class="mb-5" style="width:81px; height:60px;">
      </div>
      <div class="col-12 xl:col-6" style="border-radius:56px; padding:0.3rem; background: linear-gradient(180deg, var(--primary-color), rgba(33, 150, 243, 0) 30%);">
        <div class="h-full w-full m-0 py-7 px-4" style="border-radius:53px; background: linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0));">
          <div class="text-center mb-5">
            <img src="layout/images/avatar.png" alt="Image" height="50" class="mb-3">
            <div class="text-900 text-3xl font-medium mb-3">Welcome, Isabel!</div>
            <span class="text-600 font-medium">Sign in to continue</span>
          </div>
      
          <form @submit.prevent="onLogin">
            <div class="w-full md:w-10 mx-auto">
              <label for="email1" class="block text-900 text-xl font-medium mb-2">Email</label>
              <InputText id="email1" v-model="userLogin.username" type="text" class="w-full mb-3" placeholder="Email" style="padding:1rem;" />
      
              <label for="password1" class="block text-900 font-medium text-xl mb-2">Password</label>
              <Password id="password1" v-model="userLogin.password" :feedback="false" placeholder="Password" :toggleMask="true" class="w-full mb-3" inputClass="w-full" inputStyle="padding:1rem"></Password>
      
              <div class="flex align-items-center justify-content-between mb-5">
                <div class="flex align-items-center">
                  <Checkbox id="rememberme1" v-model="userLogin.checked" :binary="true" class="mr-2"></Checkbox>
                  <label for="rememberme1">Remember me</label>
                </div>
                <a class="font-medium no-underline ml-2 text-right cursor-pointer" style="color: var(--primary-color)">Forgot password?</a>
              </div>
              <Button type="submit" label="Sign In" class="w-full p-3 text-xl"></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pi-eye {
    transform:scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform:scale(1.6);
    margin-right: 1rem;
}
</style>