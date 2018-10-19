class Task < ApplicationRecord
  self.table_name = 'Tasks'

  enum task_type: { 'important': 1, 'critical': 2 }

  def to_hash
    JSON.parse(to_json)
  end
end
