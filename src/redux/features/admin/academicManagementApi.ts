import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAcademicSemesters: builder.query({
      query: (semesterInfo) => ({
        url: "/semesters",
        method: "GET",
        body: semesterInfo,
      }),
    }),
    addAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "/semesters/create-semester",
        method: "POST",
        body: { ...data },
      }),
    }),
  }),
});

export const {
  useGetAllAcademicSemestersQuery,
  useAddAcademicSemesterMutation,
} = academicManagementApi;
