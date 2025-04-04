import { useEffect } from 'react';

interface MierdonProps {
  name: string;
}

export const Mierdon = (props: MierdonProps) => {
  const { name } = props;
  useEffect(() => {
    // Esto se utiliza sobre todo para limpiar intervals y event listeners. Si no los limpiases en cada montaje arrastraría los del resto.

    // console.log('viva mierdon');

    // const interval = setInterval(() => {
    //   console.log('viva mierdon de nombre' + name);
    // }, 1000);

    const handleWindowsClick = () => {
      console.log('click', name);
    };
    window.addEventListener('click', handleWindowsClick);

    //guardamos las cosas que queremos parar en variables para que tengan una referencia en memoria que atacar para matarlas.

    return () => {
      //   console.log('nos volveremos a ver');
      //   clearInterval(interval); Esto mata los intervals anteriores
      window.removeEventListener('click', handleWindowsClick);
    };
  }, [name]);

  return (
    <div key="mierdon" className="dog">
      <img src="https://i.pinimg.com/474x/a2/0b/f5/a20bf5d571671401374d884bd0232df1.jpg" alt="" />
      <div className="dog__votes">
        <span>{1}❤️</span>
        <span>{100}🤮</span>
      </div>
    </div>
  );
};
