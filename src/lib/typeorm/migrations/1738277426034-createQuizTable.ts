import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateQuizTable1738277426034 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE quiz (
              id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
              post_id UUID NOT NULL,
              created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
              updated_at TIMESTAMP,
              FOREIGN KEY (post_id) REFERENCES post(id)
            );
      `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE quiz`)
    }

}
