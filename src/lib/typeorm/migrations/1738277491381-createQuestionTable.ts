import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateQuestionTable1738277491381 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE question (
              id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
              quiz_id UUID NOT NULL,
              content TEXT NOT NULL,
              created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
              updated_at TIMESTAMP,
              FOREIGN KEY (quiz_id) REFERENCES quiz(id)
            );
      `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE question`)
    }

}
