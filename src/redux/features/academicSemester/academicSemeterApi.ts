import { baseApi } from "../../api/baseApi";

const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemester: builder.query({
      query: (semesterInfo) => ({
        url: "/semesters",
        method: "GET",
        body: semesterInfo,
      }),
    }),
  }),
});

export const { useGetAllSemesterQuery } = academicSemesterApi;
