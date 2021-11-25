import { useState } from "react";

const useCount = (initialCount = 0) => { // Создаем хук
   const [count, setCount] = useState(initialCount); // Используем состояние внутри хука
   const addCount = () => {
      setCount(count + 1);
   };
   return {
      count,
      addCount,
   };
};

export default useCount;