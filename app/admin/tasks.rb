ActiveAdmin.register Task do
  permit_params :due_at, :name, :comment, :task_type, :title
end
