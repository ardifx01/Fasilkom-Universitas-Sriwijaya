// API URL
const API_URL = "http://localhost:8080";

// Function Fetch Berita
const getBerita = async () => {
  const response = await fetch(`${API_URL}/api/berita`);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  return response.json();
};

// Function Fetch KemahasiswaanKerjasama
const getKemahasiswaanKerjasama = async () => {
  const response = await fetch(`${API_URL}/api/kemahasiswaan-kerjasama`);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  return response.json();
};

// Function Fetch Vacancies
const getVacancies = async () => {
  const response = await fetch(`${API_URL}/api/vacancies`);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  return response.json();
};

// Function Fetch Scholarship
const getScholarship = async () => {
  const response = await fetch(`${API_URL}/api/scholarship`);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  return response.json();
};

// Function Fetch Achievements
const getAchievements = async () => {
  const response = await fetch(`${API_URL}/api/achievements`);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  return response.json();
};

// Function Fetch With Fallback
const fetchWithFallback = async (fetchFunction, localData) => {
  try {
    const data = await fetchFunction();
    return { data, isFallback: false };
  } catch (error) {
    console.error("Server is Offline, using local data:", error);
    return { data: localData, isFallback: true };
  }
};

export {
  getBerita,
  getKemahasiswaanKerjasama,
  getVacancies,
  getScholarship,
  getAchievements,
  fetchWithFallback,
};
