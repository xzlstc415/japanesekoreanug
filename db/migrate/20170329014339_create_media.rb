class CreateMedia < ActiveRecord::Migration
  def change
    create_table :media do |t|
      t.integer :medium_type

      t.timestamps null: false
    end
  end
end
