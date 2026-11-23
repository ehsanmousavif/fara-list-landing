import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite';

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.run(sql`
    ALTER TABLE blogs ADD COLUMN author text DEFAULT 'تیم تحریریه فرالیست';
  `).catch(() => {});
  await db.run(sql`
    ALTER TABLE blogs ADD COLUMN reviewer text DEFAULT 'استودیو جیکات وب';
  `).catch(() => {});
  await db.run(sql`
    ALTER TABLE blogs ADD COLUMN meta_title text;
  `).catch(() => {});
  await db.run(sql`
    ALTER TABLE blogs ADD COLUMN meta_description text;
  `).catch(() => {});
  await db.run(sql`
    ALTER TABLE blogs ADD COLUMN canonical_u_r_l text;
  `).catch(() => {});
  await db.run(sql`
    ALTER TABLE blogs ADD COLUMN no_index integer DEFAULT 0;
  `).catch(() => {});

  await db.run(sql`
    CREATE TABLE IF NOT EXISTS blogs_rels (
      id integer PRIMARY KEY NOT NULL,
      "order" integer,
      parent_id integer NOT NULL,
      path text NOT NULL,
      blogs_id integer,
      FOREIGN KEY (parent_id) REFERENCES blogs(id) ON UPDATE no action ON DELETE cascade,
      FOREIGN KEY (blogs_id) REFERENCES blogs(id) ON UPDATE no action ON DELETE cascade
    );
  `);
  await db.run(sql`CREATE INDEX IF NOT EXISTS blogs_rels_order_idx ON blogs_rels ("order");`).catch(() => {});
  await db.run(sql`CREATE INDEX IF NOT EXISTS blogs_rels_parent_idx ON blogs_rels (parent_id);`).catch(() => {});
  await db.run(sql`CREATE INDEX IF NOT EXISTS blogs_rels_path_idx ON blogs_rels (path);`).catch(() => {});
  await db.run(sql`CREATE INDEX IF NOT EXISTS blogs_rels_blogs_id_idx ON blogs_rels (blogs_id);`).catch(() => {});
}

export async function down(): Promise<void> {
  // SQLite does not easily support dropping columns without recreating table
}
