import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite';

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.run(sql`
    CREATE TABLE IF NOT EXISTS users (
      id integer PRIMARY KEY NOT NULL,
      name text,
      updated_at text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
      created_at text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
      email text,
      username text NOT NULL,
      reset_password_token text,
      reset_password_expiration text,
      salt text,
      hash text,
      reset_password_requested_at text,
      login_attempts numeric DEFAULT 0,
      lock_until text
    );
  `);
  await db.run(sql`CREATE INDEX IF NOT EXISTS users_updated_at_idx ON users (updated_at);`);
  await db.run(sql`CREATE INDEX IF NOT EXISTS users_created_at_idx ON users (created_at);`);
  await db.run(sql`CREATE UNIQUE INDEX IF NOT EXISTS users_username_idx ON users (username);`);

  await db.run(sql`
    CREATE TABLE IF NOT EXISTS users_sessions (
      _order integer NOT NULL,
      _parent_id integer NOT NULL,
      id text PRIMARY KEY NOT NULL,
      created_at text,
      expires_at text NOT NULL,
      FOREIGN KEY (_parent_id) REFERENCES users(id) ON UPDATE no action ON DELETE cascade
    );
  `);
  await db.run(sql`CREATE INDEX IF NOT EXISTS users_sessions_order_idx ON users_sessions (_order);`);
  await db.run(sql`CREATE INDEX IF NOT EXISTS users_sessions_parent_id_idx ON users_sessions (_parent_id);`);

  await db.run(sql`
    CREATE TABLE IF NOT EXISTS media (
      id integer PRIMARY KEY NOT NULL,
      alt text,
      updated_at text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
      created_at text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
      url text,
      thumbnail_u_r_l text,
      filename text,
      mime_type text,
      filesize numeric,
      width numeric,
      height numeric,
      focal_x numeric,
      focal_y numeric
    );
  `);
  await db.run(sql`CREATE INDEX IF NOT EXISTS media_updated_at_idx ON media (updated_at);`);
  await db.run(sql`CREATE INDEX IF NOT EXISTS media_created_at_idx ON media (created_at);`);
  await db.run(sql`CREATE UNIQUE INDEX IF NOT EXISTS media_filename_idx ON media (filename);`);

  await db.run(sql`
    CREATE TABLE IF NOT EXISTS blogs (
      id integer PRIMARY KEY NOT NULL,
      title text NOT NULL,
      slug text NOT NULL,
      image_id integer,
      image_url text,
      excerpt text NOT NULL,
      category text DEFAULT 'آموزش' NOT NULL,
      reading_time text DEFAULT '۳ دقیقه',
      published_at text DEFAULT 'آبان ۱۴۰۳',
      featured integer DEFAULT 0,
      status text DEFAULT 'published',
      updated_at text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
      created_at text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
      FOREIGN KEY (image_id) REFERENCES media(id) ON UPDATE no action ON DELETE set null
    );
  `);
  await db.run(sql`CREATE UNIQUE INDEX IF NOT EXISTS blogs_slug_idx ON blogs (slug);`);
  await db.run(sql`CREATE INDEX IF NOT EXISTS blogs_updated_at_idx ON blogs (updated_at);`);
  await db.run(sql`CREATE INDEX IF NOT EXISTS blogs_created_at_idx ON blogs (created_at);`);

  await db.run(sql`
    CREATE TABLE IF NOT EXISTS blogs_paragraphs (
      _order integer NOT NULL,
      _parent_id integer NOT NULL,
      id text PRIMARY KEY NOT NULL,
      text text NOT NULL,
      FOREIGN KEY (_parent_id) REFERENCES blogs(id) ON UPDATE no action ON DELETE cascade
    );
  `);
  await db.run(sql`CREATE INDEX IF NOT EXISTS blogs_paragraphs_order_idx ON blogs_paragraphs (_order);`);
  await db.run(sql`CREATE INDEX IF NOT EXISTS blogs_paragraphs_parent_id_idx ON blogs_paragraphs (_parent_id);`);

  await db.run(sql`
    CREATE TABLE IF NOT EXISTS blogs_tags (
      _order integer NOT NULL,
      _parent_id integer NOT NULL,
      id text PRIMARY KEY NOT NULL,
      tag text NOT NULL,
      FOREIGN KEY (_parent_id) REFERENCES blogs(id) ON UPDATE no action ON DELETE cascade
    );
  `);
  await db.run(sql`CREATE INDEX IF NOT EXISTS blogs_tags_order_idx ON blogs_tags (_order);`);
  await db.run(sql`CREATE INDEX IF NOT EXISTS blogs_tags_parent_id_idx ON blogs_tags (_parent_id);`);

  await db.run(sql`
    CREATE TABLE IF NOT EXISTS payload_kv (
      id integer PRIMARY KEY NOT NULL,
      key text NOT NULL,
      data text NOT NULL
    );
  `);
  await db.run(sql`CREATE UNIQUE INDEX IF NOT EXISTS payload_kv_key_idx ON payload_kv (key);`);

  await db.run(sql`
    CREATE TABLE IF NOT EXISTS payload_locked_documents (
      id integer PRIMARY KEY NOT NULL,
      global_slug text,
      updated_at text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
      created_at text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
    );
  `);
  await db.run(sql`CREATE INDEX IF NOT EXISTS payload_locked_documents_global_slug_idx ON payload_locked_documents (global_slug);`);
  await db.run(sql`CREATE INDEX IF NOT EXISTS payload_locked_documents_updated_at_idx ON payload_locked_documents (updated_at);`);
  await db.run(sql`CREATE INDEX IF NOT EXISTS payload_locked_documents_created_at_idx ON payload_locked_documents (created_at);`);

  await db.run(sql`
    CREATE TABLE IF NOT EXISTS payload_locked_documents_rels (
      id integer PRIMARY KEY NOT NULL,
      _order integer,
      parent_id integer NOT NULL,
      path text NOT NULL,
      users_id integer,
      media_id integer,
      blogs_id integer,
      FOREIGN KEY (parent_id) REFERENCES payload_locked_documents(id) ON UPDATE no action ON DELETE cascade,
      FOREIGN KEY (users_id) REFERENCES users(id) ON UPDATE no action ON DELETE cascade,
      FOREIGN KEY (media_id) REFERENCES media(id) ON UPDATE no action ON DELETE cascade,
      FOREIGN KEY (blogs_id) REFERENCES blogs(id) ON UPDATE no action ON DELETE cascade
    );
  `);
  await db.run(sql`CREATE INDEX IF NOT EXISTS payload_locked_documents_rels_order_idx ON payload_locked_documents_rels (_order);`);
  await db.run(sql`CREATE INDEX IF NOT EXISTS payload_locked_documents_rels_parent_idx ON payload_locked_documents_rels (parent_id);`);
  await db.run(sql`CREATE INDEX IF NOT EXISTS payload_locked_documents_rels_path_idx ON payload_locked_documents_rels (path);`);

  await db.run(sql`
    CREATE TABLE IF NOT EXISTS payload_preferences (
      id integer PRIMARY KEY NOT NULL,
      key text,
      value text,
      updated_at text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
      created_at text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
    );
  `);
  await db.run(sql`CREATE INDEX IF NOT EXISTS payload_preferences_key_idx ON payload_preferences (key);`);
  await db.run(sql`CREATE INDEX IF NOT EXISTS payload_preferences_updated_at_idx ON payload_preferences (updated_at);`);
  await db.run(sql`CREATE INDEX IF NOT EXISTS payload_preferences_created_at_idx ON payload_preferences (created_at);`);

  await db.run(sql`
    CREATE TABLE IF NOT EXISTS payload_preferences_rels (
      id integer PRIMARY KEY NOT NULL,
      _order integer,
      parent_id integer NOT NULL,
      path text NOT NULL,
      users_id integer,
      FOREIGN KEY (parent_id) REFERENCES payload_preferences(id) ON UPDATE no action ON DELETE cascade,
      FOREIGN KEY (users_id) REFERENCES users(id) ON UPDATE no action ON DELETE cascade
    );
  `);
  await db.run(sql`CREATE INDEX IF NOT EXISTS payload_preferences_rels_order_idx ON payload_preferences_rels (_order);`);
  await db.run(sql`CREATE INDEX IF NOT EXISTS payload_preferences_rels_parent_idx ON payload_preferences_rels (parent_id);`);
  await db.run(sql`CREATE INDEX IF NOT EXISTS payload_preferences_rels_path_idx ON payload_preferences_rels (path);`);

  await db.run(sql`
    CREATE TABLE IF NOT EXISTS payload_migrations (
      id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
      name text NOT NULL,
      batch numeric NOT NULL,
      updated_at text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
      created_at text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
    );
  `);
  await db.run(sql`CREATE INDEX IF NOT EXISTS payload_migrations_created_at_idx ON payload_migrations (created_at);`);
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE IF EXISTS payload_preferences_rels;`);
  await db.run(sql`DROP TABLE IF EXISTS payload_preferences;`);
  await db.run(sql`DROP TABLE IF EXISTS payload_locked_documents_rels;`);
  await db.run(sql`DROP TABLE IF EXISTS payload_locked_documents;`);
  await db.run(sql`DROP TABLE IF EXISTS payload_kv;`);
  await db.run(sql`DROP TABLE IF EXISTS blogs_tags;`);
  await db.run(sql`DROP TABLE IF EXISTS blogs_paragraphs;`);
  await db.run(sql`DROP TABLE IF EXISTS blogs;`);
  await db.run(sql`DROP TABLE IF EXISTS media;`);
  await db.run(sql`DROP TABLE IF EXISTS users_sessions;`);
  await db.run(sql`DROP TABLE IF EXISTS users;`);
}
