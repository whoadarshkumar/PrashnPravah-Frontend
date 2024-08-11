const { default: axiosInstance } = require(".");

// add exam

export const addExam = async (payload) => {
  try {
    const response = await axiosInstance.post("https://prashn-pravah-backend-et4nozin4-adarsh-kumars-projects-004e490d.vercel.app/api/exams/add", payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// get all exams
export const getAllExams = async () => {
  try {
    const response = await axiosInstance.post("https://prashn-pravah-backend-et4nozin4-adarsh-kumars-projects-004e490d.vercel.app/api/exams/get-all-exams");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// get exam by id

export const getExamById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "https://prashn-pravah-backend-et4nozin4-adarsh-kumars-projects-004e490d.vercel.app/api/exams/get-exam-by-id",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// edit exam by id

export const editExamById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "https://prashn-pravah-backend-et4nozin4-adarsh-kumars-projects-004e490d.vercel.app/api/exams/edit-exam-by-id",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// delete exam by id

export const deleteExamById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "https://prashn-pravah-backend-et4nozin4-adarsh-kumars-projects-004e490d.vercel.app/api/exams/delete-exam-by-id",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// add question to exam

export const addQuestionToExam = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "https://prashn-pravah-backend-et4nozin4-adarsh-kumars-projects-004e490d.vercel.app/api/exams/add-question-to-exam",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const editQuestionById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "https://prashn-pravah-backend-et4nozin4-adarsh-kumars-projects-004e490d.vercel.app/api/exams/edit-question-in-exam",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteQuestionById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "https://prashn-pravah-backend-ewl0qomuc-adarsh-kumars-projects-004e490d.vercel.app/api/exams/delete-question-in-exam",
      payload
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
