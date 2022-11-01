import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import ExampleService from '@/core/service/example.service';
import { callApiService } from '@/core/libs/callApi';

export const useExampleStore = defineStore('useExampleStore', () => {
  // STATE
  const count = ref(0);

  // GETTERS
  const doubleCount = computed(() => count.value * 2);
  const increment = () => {
    count.value++;
  };

  const getApi = async () => {
    const exampleService = new ExampleService();

    try {
      const res = await exampleService.getExampleData();
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const getApiV2 = (onSuccess) => {
    const exampleService = new ExampleService();
    callApiService(
      exampleService.getExampleData(),
      () => onSuccess && onSuccess()
    );
  };

  return {
    // state
    count,

    // getters
    doubleCount,

    // actions
    increment,
    getApi,
    getApiV2,
  };
});
