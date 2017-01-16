# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170108084828) do

  create_table "comments", force: :cascade do |t|
    t.integer  "episode_id",        limit: 4
    t.integer  "user_id",           limit: 4
    t.integer  "parent_comment_id", limit: 4
    t.text     "content",           limit: 65535
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "deleted"
  end

  add_index "comments", ["episode_id"], name: "fk_rails_54055a1a28", using: :btree
  add_index "comments", ["user_id"], name: "fk_rails_03de2dc08c", using: :btree

  create_table "episode_types", force: :cascade do |t|
    t.string   "name",       limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "episodes", force: :cascade do |t|
    t.integer  "youtube_video_id",         limit: 4
    t.integer  "number",                   limit: 4
    t.integer  "comments_count",           limit: 4,     default: 0
    t.string   "name",                     limit: 255
    t.integer  "duration",                 limit: 4
    t.text     "description",              limit: 65535
    t.date     "published_at"
    t.string   "thumbnail_url",            limit: 255
    t.integer  "next_episode_id",          limit: 4
    t.integer  "previous_episode_id",      limit: 4
    t.integer  "similar_episode_group_id", limit: 4
    t.integer  "episode_type_id",          limit: 4
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "episodes", ["episode_type_id"], name: "fk_rails_fbae6c65b1", using: :btree
  add_index "episodes", ["similar_episode_group_id"], name: "index_episodes_on_similar_episode_group_id", using: :btree
  add_index "episodes", ["youtube_video_id"], name: "index_episodes_on_youtube_video_id", using: :btree

  create_table "episodes_tags", id: false, force: :cascade do |t|
    t.integer "episode_id", limit: 4
    t.integer "tag_id",     limit: 4
  end

  add_index "episodes_tags", ["episode_id"], name: "fk_rails_6a7d400b54", using: :btree
  add_index "episodes_tags", ["tag_id"], name: "fk_rails_59e2c75c6f", using: :btree

  create_table "similar_episode_groups", force: :cascade do |t|
    t.string   "name",       limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "starred_episode_users", force: :cascade do |t|
    t.integer  "episode_id", limit: 4
    t.integer  "user_id",    limit: 4
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
  end

  add_index "starred_episode_users", ["episode_id"], name: "index_starred_episode_users_on_episode_id", using: :btree
  add_index "starred_episode_users", ["user_id"], name: "index_starred_episode_users_on_user_id", using: :btree

  create_table "tags", force: :cascade do |t|
    t.string   "name",       limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "twitch_users", force: :cascade do |t|
    t.integer  "user_id",          limit: 4
    t.string   "api_access_token", limit: 255
    t.string   "api_name",         limit: 255
    t.string   "api_logo",         limit: 255
    t.string   "api_id",           limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "twitch_users", ["user_id"], name: "fk_rails_6b3b7d36b0", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "name",                limit: 255
    t.string   "avatar_url",          limit: 255
    t.boolean  "receive_email",                   default: true
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "email",               limit: 255, default: "",   null: false
    t.string   "encrypted_password",  limit: 255, default: "",   null: false
    t.integer  "sign_in_count",       limit: 4,   default: 0,    null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip",  limit: 255
    t.string   "last_sign_in_ip",     limit: 255
    t.integer  "role",                limit: 4
    t.string   "avatar_file_name",    limit: 255
    t.string   "avatar_content_type", limit: 255
    t.integer  "avatar_file_size",    limit: 4
    t.datetime "avatar_updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree

  create_table "youtube_clients", force: :cascade do |t|
    t.string   "api_access_token",  limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "api_refresh_token", limit: 255
  end

  create_table "youtube_videos", force: :cascade do |t|
    t.string   "api_title",          limit: 255
    t.text     "api_description",    limit: 65535
    t.string   "api_id",             limit: 255
    t.string   "api_thumbnail_url",  limit: 255
    t.string   "api_privacy_status", limit: 255
    t.integer  "api_duration",       limit: 4
    t.text     "api_embed_html",     limit: 65535
    t.boolean  "api_processed"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_foreign_key "comments", "episodes"
  add_foreign_key "comments", "users"
  add_foreign_key "episodes", "episode_types"
  add_foreign_key "episodes", "similar_episode_groups"
  add_foreign_key "episodes", "youtube_videos"
  add_foreign_key "episodes_tags", "episodes"
  add_foreign_key "episodes_tags", "tags"
  add_foreign_key "starred_episode_users", "episodes"
  add_foreign_key "starred_episode_users", "users"
  add_foreign_key "twitch_users", "users"
end
