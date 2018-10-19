ActiveAdmin.register_page 'Dashboard' do
  content title: proc { I18n.t('active_admin.dashboard') } do
    tasks_data = {
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
