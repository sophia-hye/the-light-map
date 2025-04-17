// import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { Tooltip } from '@/components/ui/tooltip';
// import { motion } from 'framer-motion';

// const stars = [
//   {
//     id: 'star-001',
//     name: '빛_하나',
//     emotion: '위로',
//     shape: 'soft',
//     size: 3,
//     message: '당신 덕분에 오늘 하루를 버텼어요.',
//     country: 'KR',
//   },
//   {
//     id: 'star-002',
//     name: '빛_둘',
//     emotion: '열정',
//     shape: 'spiky',
//     size: 5,
//     message: '매 순간 당신을 응원해요!',
//     country: 'US',
//   },
//   // ...더 많은 팬 별
// ];

// const getShape = (shape) => {
//   if (shape === 'soft') return 'rounded-full';
//   if (shape === 'spiky') return 'rotate-45';
//   return '';
// };

// const FanConstellation = () => {
//   const [filter, setFilter] = useState('');
//   const [hoveredStar, setHoveredStar] = useState(null);

//   const filteredStars = stars.filter((star) =>
//     filter ? star.emotion === filter : true
//   );

//   return (
//     <div className="min-h-screen bg-black text-white p-8">
//       <h1 className="text-3xl font-bold text-center mb-4">
//         From Sparks to Stars ✦ Fan Constellation
//       </h1>

//       <div className="flex justify-center mb-6 gap-2">
//         <Input
//           placeholder="감정 태그로 검색 (예: 위로, 열정)"
//           className="w-64"
//           onChange={(e) => setFilter(e.target.value)}
//         />
//         <Button onClick={() => setFilter('')}>초기화</Button>
//       </div>

//       <div className="grid grid-cols-6 gap-6 justify-items-center">
//         {filteredStars.map((star) => (
//           <Tooltip key={star.id} content={`빛 이름: ${star.name}, 감정: ${star.emotion}`}>
//             <motion.div
//               onHoverStart={() => setHoveredStar(star)}
//               onHoverEnd={() => setHoveredStar(null)}
//               onClick={() => alert(star.message)}
//               className={`bg-white/80 ${getShape(star.shape)} cursor-pointer`}
//               style={{
//                 width: `${star.size * 12}px`,
//                 height: `${star.size * 12}px`,
//               }}
//               animate={{ opacity: 1, scale: hoveredStar?.id === star.id ? 1.2 : 1 }}
//               transition={{ duration: 0.3 }}
//             />
//           </Tooltip>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FanConstellation;
