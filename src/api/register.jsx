export const register = async (userData) => {
    try {
      const response = await axiosInstance.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      if (error.response) {
        // Backend xato javobini qaytaradi
        console.error('Backend error:', error.response.data);
      } else if (error.request) {
        // So'rov yuborildi, lekin javob kelmadi
        console.error('Request error:', error.request);
      } else {
        // Xatolikni sozlashda yuzaga kelgan xato
        console.error('Error', error.message);
      }
      throw error;  // Xatoni tashlash
    }
  };
  