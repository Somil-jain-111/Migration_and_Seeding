1. npm install sequelize sequelize-cli pg pg-hstore
2. npx sequelize-cli init
3. In config folder convert config.json into config.ts
4. npx sequelize-cli db:migrate (for creating table)
5. npx sequelize-cli db:migrate:undo (for delete table)




		add data using seeder
1. npx sequelize-cli seed:generate --name demo-users
2. npx sequelize-cli db:seed:all
3. npx sequelize-cli db-seed:undo
