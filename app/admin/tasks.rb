ActiveAdmin.register Task do
  permit_params :due_at, :name
end
