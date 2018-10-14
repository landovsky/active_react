# frozen_string_literal: true

class CreateTasks < ActiveRecord::Migration[5.2]
  def up
    create_table 'Tasks' do |t|
      t.integer :task_type
      t.string :title
      t.string :comment
      t.datetime :due_at
      t.datetime :completed_at
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
    end
  end

  def down
    drop_table 'Tasks'
  end
end
