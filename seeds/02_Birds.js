/*
 * @Author: Prawee Wongsa prawee.w@integra8t.com 
 * @Date: 2017-09-26 18:27:12 
 * @Last Modified by: Prawee Wongsa
 * @Last Modified time: 2017-09-26 18:29:31
 */
exports.seed = function(knex, Promise) {
  const tableName = 'birds';
  const rows = [
    {
      owner: 'f038d87c-b121-4112-b887-130a3e87988c',
      species: 'Columbidae',
      name: 'Pigeon',
      picture_url: 'http://pngimg.com/upload/pigeon_PNG3423.png',
      guid: '4c8d84f1-9e41-4e78-a254-0a5680cd19d5',
      isPublic: true,
    },
    {
      owner: 'f038d87c-b121-4112-b887-130a3e87988c',
      species: 'Zenaida',
      name: 'Mourning dove',
      picture_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Mourning_Dove_2006.jpg/220px-Mourning_Dove_2006.jpg',
      guid: 'ddb8a136-6df4-4cf3-98c6-d29b9da4fbc6',
      isPublic: false,
    }
  ];
  // Deletes ALL existing entries
  return knex(tableName).del()
    .then(function () {
      // Inserts seed entries
      return knex(tableName).insert(rows);
    });
};
