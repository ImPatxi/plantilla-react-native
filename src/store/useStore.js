import { MMKV } from 'react-native-mmkv';
import { create } from 'zustand';

const storage = new MMKV();

const useStore = create((set, get) => ({
  token: storage.getString('token') || null,
  user: storage.getString('user') ? JSON.parse(storage.getString('user')) : null,
  setToken: (token) => {
    storage.set('token', token);
    set({ token });
  },
  setUser: (user) => {
    storage.set('user', JSON.stringify(user));
    set({ user });
  },
  logout: () => {
    storage.delete('token');
    storage.delete('user');
    set({ token: null, user: null });
  }
}));

export default useStore;
