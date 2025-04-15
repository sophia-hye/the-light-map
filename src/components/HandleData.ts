interface StarData {
  id: number;
  nickname: string;
  lightName: string;
  emotionTags: string;
  color: string;
  location: string;
  message: string;
  createdAt: string;
}

const generateTestData = (): StarData[] => {
  const emotions = ['Happy', 'Hope', 'Love', 'Peace', 'Thanks', 'Brave'];
  const locations = ['Korea', 'Japan', 'China', 'USA'];
  const colors = ['#FFFFFF', '#FAEDCB', '#C6DEF1', '#FAE1DD', '#F5EBE0', '#FFFDD0'];

  const testData: StarData[] = [];

  for (let i = 0; i < 1000; i++) {
    testData.push({
      id: Date.now() + i,
      nickname: `User${i + 1}`,
      lightName: `Light${i + 1}`,
      emotionTags: emotions[Math.floor(Math.random() * emotions.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      location: locations[Math.floor(Math.random() * locations.length)],
      message: `This is a test message ${i + 1}. Let's spread light and hope together!`,
      createdAt: new Date().toISOString(),
    });
  }

  return testData;
};

export const saveTestData = () => {
  const testData = generateTestData();
  localStorage.setItem('starData', JSON.stringify(testData));
  console.log('테스트 데이터가 성공적으로 저장되었습니다.');
};
