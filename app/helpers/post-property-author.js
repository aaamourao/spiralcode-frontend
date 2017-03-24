import Ember from 'ember';

const myidsPropertyAuthors = [
  'madc0w',
  'adriano',
  'Adriano',
  'aaamourao',
  'adrianomourao',
  'adrianomourao@protonmail.com',
  'madc0w@protonmail.ch',
  'madcow'
];

export function postPropertyAuthor([author]){
  if(myidsPropertyAuthors.includes(author)){
    return 'madc0w';
  }
  else {
    return 'community';
  }
}

export default Ember.Helper.helper(postPropertyAuthor);
