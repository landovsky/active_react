ActiveAdmin.register_page "Dashboard" do
  content title: proc { I18n.t('active_admin.dashboard') } do
    # id = 0
    # user_map = Array.new(50) do
    #   id += 1
    #   { name: Faker::Name.first_name, surname: Faker::Name.last_name, role_id: (1..3).to_a.sample }
    # end.to_json

    tasks_data = {
      data: Task.all.map(&:to_hash),
      enums: { task_type: Task.task_types }
    }

    script do
      raw "
        window.data = {
          'tasks': #{tasks_data.to_json},
        };
        "
    end
    link_to fa_icon 'camera-retro'
    div id: 'react_app' do
      javascript_pack_tag 'app'
    end
  end
end
