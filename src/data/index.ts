import IUser from '@/types/user.type'

export const usersData = <IUser[]>[
  {
    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    title: 'Brunch this weekend?',
    subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
    country: 'russia',
    score: 0,
    address: 'Москва, улица Пушкина 36'
  },
  {
    avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
    title: 'Summer BBQ <span class="grey-text text-lighten-1">4</span>',
    subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
    country: 'usa',
    score: 10,
    address: 'Москва, улица Пушкина 36'
  },
  {
    avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
    title: 'Oui oui',
    subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
    country: 'russia',
    score: 20,
    address: 'Москва, улица Пушкина 36'
  },
  {
    avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
    title: 'Birthday gift',
    subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
    country: 'usa',
    score: 30,
    address: 'Москва, улица Пушкина 36'
  },
  {
    avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    title: 'Recipe to try',
    subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
    country: 'russia',
    score: 50,
    address: 'Москва, улица Пушкина 36'
  }
]

export default usersData
