import {create} from 'zustand';

interface IMode  {
  toggleMode: string
  setToggleMode: (toggleMode: string) => void;

};

export const ModeStore = create<IMode>((...args) => {
  const [set, get] = args;
  return {
    toggleMode: 'light',
    setToggleMode(toggleMode){
      set({toggleMode})
    }
    
  }

})
