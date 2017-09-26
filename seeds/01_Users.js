/*
 * @Author: Prawee Wongsa prawee.w@integra8t.com 
 * @Date: 2017-09-26 18:23:32 
 * @Last Modified by: Prawee Wongsa
 * @Last Modified time: 2017-09-26 18:26:20
 */
exports.seed = function(knex, Promise) {
  const tableName = 'users';
  const rows = [
    {
      name: 'Prawee Wongsa',
      username: 'admin',
      password: '1234',
      email: 'prawee@hotmail.com',
      guid: 'f038d87c-b121-4112-b887-130a3e87988c'
    }
  ];
  // Deletes ALL existing entries
  return knex(tableName).del()
    .then(function () {
      // Inserts seed entries
      return knex(tableName).insert(rows);
    });
};
