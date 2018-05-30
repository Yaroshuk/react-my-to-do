const API_STATUS_SUCCESS = 200;

export const hasStatusSuccess = (response) => {
  return response.status === API_STATUS_SUCCESS;
};