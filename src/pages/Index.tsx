// В начале файла обновляем интерфейс пропсов
interface IndexProps {
  isTheaterMode: boolean;
  setIsTheaterMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Index: React.FC<IndexProps> = ({ isTheaterMode, setIsTheaterMode }) => {
  // Удаляем локальное состояние isTheaterMode, так как оно теперь приходит из App
  // Остальной код компонента остается без изменений
  ...
}