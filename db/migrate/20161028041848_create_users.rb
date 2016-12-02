class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :avatar_url
      t.boolean :receive_email, default: true

      t.timestamps
    end
  end
end
