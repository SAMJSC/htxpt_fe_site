import api from '@/app/services/api';
import { TestReturn } from '@/app/types/common';

const testApi = api.injectEndpoints({
  endpoints: (builder) => ({
    fetchData: builder.query<TestReturn, string>({
      query: () => ({
        url: '/gardens/',
      }),
    }),
  }),
});

export default testApi;
