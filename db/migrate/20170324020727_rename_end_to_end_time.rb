class RenameEndToEndTime < ActiveRecord::Migration
  def change
    rename_column :events, :end, :end_time
    rename_column :events, :start, :start_time
  end
end
