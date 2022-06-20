import { BaseDatabase, } from "./BaseDatabase"

class Migrations extends BaseDatabase {
    createTables = async (): Promise<void> => {
        BaseDatabase.connection.raw(`
        CREATE TABLE IF NOT EXISTS dog_walking(
            id VARCHAR(255) PRIMARY KEY,
            status ENUM ("A FAZER", "EM ANDAMENTO", "REALIZADO") NOT NULL DEFAULT "A FAZER",
            scheduling_date DATE NOT NULL,
            price INT NOT NULL,
            duration INT NOT NULL,
            lat DECIMAL(10, 8) NOT NULL, 
            lng DECIMAL(11, 8) NOT NULL, 
            pets INT NOT NULL, 
            start_time INT NOT NULL,
            end_time INT NOT NULL
             ); 

`)
            .then(() => console.log())
            .catch(e =>
                console.log(e.message || e.sqlMessage)
            )
    }
}

const migrations: Migrations = new Migrations()
migrations.createTables()