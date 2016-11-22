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

ActiveRecord::Schema.define(version: 20161122043519) do

  create_table "comments", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "episode_id"
    t.integer  "user_id"
    t.integer  "parent_comment_id"
    t.text     "content",           limit: 65535
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.boolean  "deleted"
    t.boolean  "root"
    t.index ["episode_id"], name: "index_comments_on_episode_id", using: :btree
    t.index ["user_id"], name: "index_comments_on_user_id", using: :btree
  end

  create_table "episode_types", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "episodes", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "number"
    t.integer  "comments_count",                         default: 0
    t.string   "name"
    t.boolean  "starred",                                default: false
    t.integer  "duration"
    t.text     "description",              limit: 65535
    t.date     "published_at"
    t.string   "thumbnail_url"
    t.integer  "next_episode_id"
    t.integer  "previous_episode_id"
    t.integer  "similar_episode_group_id"
    t.integer  "episode_type_id"
    t.datetime "created_at",                                             null: false
    t.datetime "updated_at",                                             null: false
    t.index ["episode_type_id"], name: "index_episodes_on_episode_type_id", using: :btree
    t.index ["similar_episode_group_id"], name: "index_episodes_on_similar_episode_group_id", using: :btree
  end

  create_table "episodes_tags", id: false, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer "episode_id"
    t.integer "tag_id"
    t.index ["episode_id"], name: "index_episodes_tags_on_episode_id", using: :btree
    t.index ["tag_id"], name: "index_episodes_tags_on_tag_id", using: :btree
  end

  create_table "similar_episode_groups", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tags", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "twitch_users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "user_id"
    t.string   "api_access_token"
    t.string   "api_name"
    t.string   "api_logo"
    t.string   "api_id"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.index ["user_id"], name: "index_twitch_users_on_user_id", using: :btree
  end

  create_table "users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name"
    t.string   "avatar_url"
    t.boolean  "receive_email",      default: true
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
    t.string   "email",              default: "",   null: false
    t.string   "encrypted_password", default: "",   null: false
    t.integer  "sign_in_count",      default: 0,    null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.integer  "role"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
  end

  add_foreign_key "comments", "episodes"
  add_foreign_key "comments", "users"
  add_foreign_key "episodes", "episode_types"
  add_foreign_key "episodes", "similar_episode_groups"
  add_foreign_key "episodes_tags", "episodes"
  add_foreign_key "episodes_tags", "tags"
  add_foreign_key "twitch_users", "users"
end
