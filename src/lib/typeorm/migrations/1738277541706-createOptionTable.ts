import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateOptionTable1738277541706 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE option (
              id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
              question_id UUID NOT NULL,
              content TEXT NOT NULL,
              is_correct BOOLEAN NOT NULL,
              created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
              updated_at TIMESTAMP,
              FOREIGN KEY (question_id) REFERENCES question(id)
            );
      `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE option`)
    }

}
