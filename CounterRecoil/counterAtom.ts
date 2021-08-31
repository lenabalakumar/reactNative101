import { atom, selector } from 'recoil';

export interface User {
  id: number;
  name: String;
}

export const counterAtom = atom({
  key: 'counterAtom',
  default: 0,
});

export const idAtom = atom({ key: 'idAtom', default: 1 });

// export const idSelector = selector({
//   key: 'idSelector',
//   get: ({get}) => get(idAtom),
//   set: ({set}, idFromView) => {
//     set(idAtom, idAtom + idFromView);
//   },
// });

export const userAtom = atom<User[]>({
  key: 'userAtom',
  default: [{ id: 0, name: '' }],
});

export const counterSelector = selector({
  key: 'counterSelector',
  get: ({ get }) => {
    const counterTimes = get(counterAtom);
    return counterTimes + 1;
  },
});
